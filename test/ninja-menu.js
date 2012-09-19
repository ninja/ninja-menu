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
      this.instance = new $.Ninja.Menu('<span></span>', {
        list: []
      });
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
      this.elements = $('#qunit-fixture').find('.test-span');
    }
  });

  test('are chainable', function () {
    strictEqual(this.elements.ninja('menu', {
      list: []
    }), this.elements, 'should be chainable');
  });

  test('has class', function () {
    this.elements.ninja('menu', {
      list: []
    }).each(function () {
      ok($(this).hasClass('ninja-menu'), 'should have menu class');
    });
  });

  QUnit.done(function () {
    $('#qunit-examples').find('.test-span').ninja('menu', {
      list: [
        $('<div>foo</div>').on('click', function () {
          console.log('foo');
        }),
        $('<div>bar</div>').on('click', function () {
          console.log('bar');
        })
      ]
    });
  });
}(jQuery));
