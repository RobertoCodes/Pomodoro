(function () {

  var _todos = [];

  var resetTodos = function (todos) {
    _todos = todos;
  };

  window.TodoStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _todos.slice();
    },

  });

})();
