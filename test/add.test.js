(function() {
  var nx = require('next-js-core2');
  var DomClass = require('../src/next-dom-class-list');
  var html = require('fs')
    .readFileSync('./test/app.html')
    .toString();
  var el;
  // init document:
  beforeEach(function() {
    document.documentElement.innerHTML = html;
    el = document.getElementById('el');
  });

  // 'add,remove,replace,toggle,contains'
  describe('DomClass.methods - Add', function() {
    test('add single class -> `a`', function() {
      expect(el.className).toBe('');
      DomClass.add(el, 'a');
      expect(el.className).toBe('a');
    });

    test('add muliple class ->`a abc d`', function() {
      expect(el.className).toBe('');
      DomClass.add(el, 'a abc d');
      expect(el.className).toBe('a abc d');
    });

    test('add muliple class with arguments ->`a,bc,d`', function() {
      expect(el.className).toBe('');
      DomClass.add(el, 'a', 'bc', 'd');
      expect(el.className).toBe('a bc d');
    });

    test('add muliple class with arguments and duplicate ->`a,bc,d,a`', function() {
      expect(el.className).toBe('');
      DomClass.add(el, 'a', 'bc', 'd', 'a');
      expect(el.className).toBe('a bc d');
    });
  });
})();
