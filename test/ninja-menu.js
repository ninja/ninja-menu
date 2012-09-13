(function ($) {
  'use strict';

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('constructor', {
    setup: function () {
      this.constructor = $.Ninja.Menu;
    }
  });

  test('exists', function () {
    ok(this.constructor, 'should exist');
  });

  test('is a function', function () {
    ok($.isFunction(this.constructor), 'should be a function');
  });

  module('instance', {
    setup: function () {
      this.instance = new $.Ninja.Menu('<button></button>');
    }
  });

  test('is an instance', function () {
    ok(this.instance instanceof $.Ninja.Menu, 'should be instance of $.Ninja.Menu');
  });

  test('.$list', function () {
    ok(this.instance.$list, 'should exist');
    ok(this.instance.$list.is('div'), 'should be a div element');
  });

  module('elements', {
    setup: function () {
      this.elements = $('#qunit-fixture').find('.nui-tst-menu');
    }
  });

  test('are chainable', function () {
    strictEqual(this.elements.ninja('menu'), this.elements, 'should be chainable');
  });

  test('has class', function () {
    this.elements.ninja('menu').each(function () {
      ok($(this).hasClass('nui-mnu'), 'should have nui-mnu class');
    });
  });

  QUnit.done(function () {
    $('#qunit-examples').find('.nui-tst-menu').ninja('menu');
  });
}(jQuery));
