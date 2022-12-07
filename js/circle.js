(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^2

            let area = Math.PI * radius ** 2;
            if(typeof radius === `number`){
                return area;
            }
            return false
            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding === true){
                return Math.round(this.getArea());
            }  else{
                return false
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log(`Area of a circle with radius: ${this.radius}, is:`);
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();