describe('Controllers', function(){
  var scope;

  beforeEach(module('starter.controllers'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    $controller('AccountCtrl', {$scope: scope});
  }));

  it('should have enableFriends setting as set', function(){
    expect(scope.settings.enableFriends).toEqual(true);
  });
});
