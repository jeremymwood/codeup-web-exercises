(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(`planetsString:\n\n${planetsString}`);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // let planetsArray = planetsString.split(`|`);
    // console.log(`planetsArray:\n\n${planetsArray}`);

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

    //create functions for both cases

    // let breakPlanets = planetsArray.join(`<br>\n`);
    // console.log(`breakPlanets:\n\n${breakPlanets}`);
    //
    // console.log(`******************`);

    // let listPlanets = new Array();
    // for (let i = 0; i < planetsArray.length; i++) {
    //     listPlanets[i] = `  <li>${planetsArray[i]}</li>`;
    // }
    // let noReallyFinalPlanets = listPlanets.join(`\n`);
    // breakPlanets = `<ul>\n${noReallyFinalPlanets}\n</ul>`;
    // console.log(breakPlanets)

    let planetsArray = planetsString.split(`|`);
    let listPlanetsArr = new Array();
    // console.log(`listPlanets array:\n${listPlanets}`);
    for (let i = 0; i < planetsArray.length; i++) {
        listPlanetsArr[i] = `  <li>${planetsArray[i]}</li>`;
    }
    let ulPlanets = `<ul>\n${listPlanetsArr.join(`\n`)}\n</ul>`;
    console.log(`ulPlanets:\n\n${ulPlanets}`)


})();