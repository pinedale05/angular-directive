angular.module('app.directives.checkbox',[])
	.directive('checkbox', function () {
		return {
			restrict: 'E',
			replace: true,
			scope: { field: '=checkbox' },
			template: '<label><input type="checkbox" ng-model="field.data" ng-true-value="Public" ng-false-value="Private" ng-trim="false"></label>'
		}
	})