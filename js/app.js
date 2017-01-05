/**
 * Created by ���� on 2017/1/4.
 */
var mapp=angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/info',{
                templateUrl:'info.html',
                controller : 'infoCtrl'
            })
            .when('/list',{
                templateUrl:'list.html',
                controller : 'listCtrl'
            })
            .otherwise({
                templateUrl:'info.html'
            })
    }])
    .controller('infoCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
        //http请求渲染
        $http({
            url:'./data/cont.json',
            method:'post'
        })
            .success(function(data){
                //console.log(data)
                $scope.msg=data.info
            });
        //按钮点击
        $rootScope.mark=function(){
            
        }
     /*   $scope.goto= function (ind) {
            var sel=$('#sel li').eq(ind);
            srtFoucs(sel)
        }

        function srtFoucs($el){
            $el.addClass('on').silibings().removeClass('on')
        }*/
    }])
    .controller('listCtrl',['$scope','$http',function($scope,$http){
        //$scope.msg='this is home page!!!!'
        /*  $http({
             url:'./data/cont.json',
             method:'post'
             })
             .success(function(data){
             console.log(data)
             $scope.msg=data.info
         })*/
    }])

