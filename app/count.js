if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeout;
    function doIt () {
      console.log(start++); // eslint-disable-line no-console

      if (start <= end) {
        timeout = setTimeout(doIt, 100);
      }
    }

    doIt();

    return {
      cancel: function () {
        timeout && clearTimeout(timeout);
      }
    };
    }
  };
});