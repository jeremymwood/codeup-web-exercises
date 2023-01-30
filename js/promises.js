"use strict";
(async function() {

    //compare post ex code to this

    function getLastCommitDate(userName, apiKey) {

        // const url = 'data/docrob_github_events.json';
        const url = `https://api.github.com/users/${userName}/events/public`;

        return fetch(url,
            {
                    headers:
                        {
                            'Authorization': `token ${apiKey}`
                        }
            }).then(function (response) {
                return response.json();
        }).then(function (data) {
            // for (let i = 0; i < data.length; i++) {
            //     if (data[i].type === 'PushEvent') {
            //         return data[i].created_at;
            //     }
            // }
            return data.filter(function (event) {
                return event.type === "PushEvent";
            })[0].created_at;
                // return  Promise.reject('')
        });
    }
    const lastCommitDate = await getLastCommitDate('jeremymwood', 'GITHUB_API_KEY');
    console.log(lastCommitDate);

    function wait(ms) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(`howdy, i waited ${ms} ms`);
                //catch and reject:
                // reject(`howdy, i waited ${ms} ms`);
            }, ms);
        })
    }

    wait(1000).then((msg) => console.log(msg));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds')).catch(function (error) {
        console.log('error:/')
    });


})();