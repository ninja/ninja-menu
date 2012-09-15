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

    menu.$element.addClass('nui-mnu').append($('<span>', {
      'class': 'nui-arw-dwn',
      css: {
        'border-top-color': menu.$element.css('color')
      }
    }));

    menu.$list = $('<div class="nui-lst">');

    menu.$carrot = $('<span class="nui-crt"></span>').appendTo(menu.$list);

    $('#' + menu.$element.attr('list')).find('option').each(function (i, option) {
      var $element = $($(option).html()).addClass('nui-opt');

      if (i === 0) {
        $element.addClass('nui-fst');
      }

      menu.$list.append($element);
    });

    $(document).on('click.ninja', function () {
      menu.$list.fadeOut('fast');
    });

    menu.$element.on('click.ninja', function (event) {
      event.stopPropagation();

      var offset;

      if (menu.$list.is(':visible')) {
        menu.$list.fadeOut('fast');
      } else {
        $('.nui-mnu > div').fadeOut('fast');

        menu.$element.append(menu.$list.fadeIn('fast'));

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

          menu.$carrot.css({
            left: 'auto',
            right: '12px'
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
