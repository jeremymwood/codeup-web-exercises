(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(`String: ${planetsString}`);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    let planetsArray = planetsString.split(`|`);
    console.log(`Array: ${planetsArray}`);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let unorderedPlanets = planetsArray.join(`<br>\n`);
    console.log(unorderedPlanets);

    function unorderedPlanetsFunc(arr) {
        // console.log(arr.join(`<br>\n`));
        // console.log(planetsArray);
        // let openCLoseTags = `<ul>\n`;
        // console.log(openCloseTags);
        for (let i = 0; i < planetsArray.length; i++) {
            console.log(`  <li>${planetsArray[i]}</li>`)
        }

    }
    unorderedPlanetsFunc(planetsArray);


    for (let i = 0; i < planetsArray.length; i++) {
        console.log(`  <li>${planetsArray[i]}</li>`)
    }


    console.log(planetsArray.join(`<li>\n`));

    // for (let i = 0; i < planetsArray.length; i++) {
    //     console.log(`  <li>${planetsArray[i]}</li>`)
    // }


})();

