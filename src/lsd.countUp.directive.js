angular.module('lsd-countup',[])
  .directive('countUp', ['$timeout',
    function($timeout) {
      return {
        restrict: 'AE',
        scope:{
          value: '=',
          interval: '@'
        },
        link: function(scope) {
          var _frNo = 70,
            _counter = 2,
            _fromTime = scope.value,
            _interval = scope.interval ? scope.interval : 90;
          scope.value = 0;

          var _updateNumber = function(){
            if(_counter <= _frNo){
              scope.value = _fromTime * (-Math.pow(2, -10 * _counter / _frNo) + 1) * 1024 / 1023;
              _interval -= 1.5;
              _counter++;

              $timeout(_updateNumber, _interval);
            }
          };

          $timeout(_updateNumber, _interval);
        }
      };
    }]
  );