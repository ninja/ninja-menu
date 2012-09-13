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

    menu.$element.addClass('nui-mnu').append($('<span class="nui-arw-dwn">'));

    menu.$list = $('<div>', {
      css: {
        top: menu.$element.outerHeight() - 1
      }
    });

    menu.$element.parent().find($('datalist#' + menu.$element.attr('list'))).find('option').each(function () {
      menu.$list.append($($(this).html()).addClass('nui-opt'));
    });

    $(document).on('click.ninja', function () {
      if (menu.$list.is(':visible')) {
        menu.$list.detach();
      }
    });

    menu.$element.on('click.ninja', function (event) {
      event.stopImmediatePropagation();

      if (menu.$list.is(':visible')) {
        menu.$list.detach();
      } else {
        menu.$element.append(menu.$list);
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
