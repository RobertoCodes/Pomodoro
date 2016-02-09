(function () {

  var _todos = [];

  window.TodoStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _todos.slice();
    },

  });

})();
