var sampleApp = angular.module("sampleApp",[]);

sampleApp.provider("sampleProvider", function() {

	this.$get = function() {
	console.log("hello");
	return "Hello From Provider";
};
});

sampleApp.controller("sampleController",function(sampleProvider,$scope) {
	$scope.sampleProvider = sampleProvider;
	console.log("sampleController :: sampleProvider is" +sampleProvider);
});
