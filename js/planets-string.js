(function () {
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(`planetsString:\n\n${planetsString}`);
    let galaxiesString = "Andromeda|Cygnus A|Milky Way|Corvus|Circinus";
    console.log(`galaxiesString:\n\n${galaxiesString}`);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    let planetsArray = planetsString.split(`|`);
    console.log(`planetsArray:\n\n${planetsArray}`);

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

    let breakPlanets = planetsArray.join(`<br>\n`);
    console.log(`breakPlanets:\n\n${breakPlanets}`);

    console.log(`******************`);

    function ulGenerator(strings, separator) {
        let arr = strings.split(separator);
        let listArr = new Array();
        for (let i = 0; i < arr.length; i++) {
            listArr[i] = `  <li>${arr[i]}</li>`;
        }
        let ulBlock = `<ul>\n${listArr.join(`\n`)}\n</ul>`;
        console.log(`${ulBlock}`);
        // console.log(ulBlock.name)
    }

    ulGenerator(planetsString, `|`);
    ulGenerator(galaxiesString, `|`);
})();