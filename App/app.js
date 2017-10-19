/**
 * Created by Administrator on 2017\10\18 0018.
 */
var app = angular.module("app",["ui.router"]);

app.config(function($stateProvider,$rlRouterProvider){
    $stateProvider.state('shoppingCar',{
        url:"/shoppingCar",
        templateUrl:"./App/View/shoppingCar.html",
        controller:"shoppingCarController"
    })
})