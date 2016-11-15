angular.module('todoApp', [])
.controller('mainCtrl', function($scope) {
  var todos = [
    {name: 'Wake up'},
    {name: 'Develop an app with Angular'},
    {name: 'Test the app'},
    {name: 'Debug the code'},
    {name: 'Go to bed'}
  ];
  $scope.todos = todos;
  $scope.addTodo = function(todo) {
    $scope.todos.unshift(todo);
    $scope.todo = '';
  };
  $scope.deleteTodo = function(todo) {
    var index = $scope.todos.indexOf(todo);
    $scope.todos.splice(index, 1);
  };
})
.directive('showFocus', function($timeout) {
  return function(scope, element, attrs) {
    scope.$watch(attrs.showFocus,
      function (newValue) {
        $timeout(function() {
            newValue && element.focus();
        });
      },true);
  };
});
