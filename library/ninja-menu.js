/*!
##Begin Immediately-Invoked Function Expression

Assign `jQuery` to `$`.

Enable ECMAScript 5 strict mode.
*/
(function ($) {
  'use strict';

/*
##Menu Constructor
*/
  $.Ninja.Menu = function (element, options) {
    var menu = this;

    if (element) {
      menu.$element = $(element);
    } else {
      $.ninja.error('Menu must include an element.');
    }

    if (options && 'list' in options) {
      menu.list = options.list;
    } else {
      $.ninja.error('Menu must include a list.');
    }

    menu.$element.addClass('ninja-menu').append('<div class="ninja-arrow-down">');

    menu.$list = $('<div class="ninja-list">');

    $('<div class="ninja-point-up">').css('left', (menu.$element.outerWidth() / 2) - 3).appendTo(menu.$list);

    $.each(menu.list, function (i, item) {
      var $element = $(item).addClass('ninja-item');

      if (i === 0) {
        $element.addClass('ninja-first');
      }

      menu.$list.append($element);
    });

    $(document).on('click.ninja', function () {
      menu.$list.detach();

      menu.$element.removeClass('ninja-select');
    });

    menu.$element.on('click.ninja', function (event) {
      event.stopPropagation();

      var offset;

      if (menu.$list.is(':visible')) {
        menu.$list.detach();

        menu.$element.removeClass('ninja-select');
      } else {
        $('.ninja-menu').removeClass('ninja-select');

        $('.ninja-list').detach();

        menu.$element.append(menu.$list);

        menu.$element.addClass('ninja-select');

        offset = menu.$list.offset();

        if ((offset.top + menu.$list.outerHeight()) > ($(window).scrollTop() + $(window).height())) {
          menu.$list.css('bottom', 0);
        } else {
          menu.$list.css('top', menu.$element.outerHeight() + 6);
        }
        if ((offset.left + menu.$list.outerWidth()) > ($(window).scrollLeft() + $(window).width())) {
          menu.$list.css({
            left: 'auto',
            right: 0
          });
        }
      }
    });
  };

  $.ninja.menu = function (element, options) {
    $.extend(new $.Ninja(element, options), new $.Ninja.Menu(element, options));
  };

/*!
##End Immediately-Invoked Function Expression

Preserve jQuery's state while invoking.
*/
}(jQuery));
