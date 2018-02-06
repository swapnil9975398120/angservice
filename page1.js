app.controller('page1Controller',page1Controller);
page1Controller.$inject = ['$scope','myService'];

function page1Controller($scope,myService){
    // $scope.myService = myService;
    $scope.user={};
 
    $scope.submit = function(){
        alert("sfdsdf");
        console.log("page1 data"+JSON.stringify($scope.user));
        $scope.myService.user = $scope.user; 
    }
}