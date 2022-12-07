(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method
            //dont need a condition
            const area = Math.PI * this.radius ** 2;
            // TODO: return the proper value
            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = this.getArea();
            if(doRounding === true){
                area = Math.round(area);
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            console.log(`Area of a circle with radius: ${this.radius}, is: ${area}`);
        }
    };

    console.log(circle.getArea());
    // log info about the circle
    console.log("Raw area:");
    circle.logInfo(false);
    console.log("Rounded area:");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    //radius 3 above, 5 below
    circle.radius = 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();