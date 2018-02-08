app.controller('page2Controller',page2Controller);
page2Controller.$inject = ['$scope','myService'];

function page2Controller($scope,myService){
    // $scope.myService = myService;
    $scope.user=myService.getUser();
     console.log("page2 entred data"+JSON.stringify($scope.user));
 

}