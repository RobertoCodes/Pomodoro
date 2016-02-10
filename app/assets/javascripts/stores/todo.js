(function () {

  var TODOS_INDEX_CHANGE_EVENT = "todoIndexChangeEvent";

  var _todos = [];

  var resetTodos = function (todos) {
    _todos = todos;
  };

  window.TodoStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _todos.slice();
    },

    addTodosIndexChangeListener: function (callback) {
      this.on(TODOS_INDEX_CHANGE_EVENT, callback);
    },



  });

})();
