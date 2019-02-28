(function() {
  var nx = require('next-js-core2');
  var NxDomClassList = require('../src/next-dom-class-list');
  var html = require('fs').readFileSync('./test/app.html').toString();


  document.documentElement.innerHTML = html;
  var btnAdd = document.getElementById('add');
  var removeAdd = document.getElementById('remove');
  var toggleBtn = document.getElementById('toggle');
  var containsBtn = document.getElementById('contains');


  describe('NxDomClassList.methods', function() {
    test('init', function() {
      console.log(
        btnAdd
      );
    });
  });
})();
