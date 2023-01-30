"use strict";
(function() {
    $(document).ready(function () {

        fetch('data/docrob_github_events.json')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
            console.log(data[0].created_at);
        });

        // function getCommitDate(commitNumber) {
        //     fetch('https://api.github.com/users/jeremymwood/events', {headers: {'Authorization': 'GITHUB_API_KEY'}})
        //         .then(function (response) {
        //             return response.json();
        //         }).then(function (data) {
        //         console.log(data[commitNumber].created_at);
        //     });
        // }
        // getCommitDate(0);

//         function requestUserRepos(){
//             // create a variable to hold the `Promise` returned from `fetch`
//             return Promise.resolve(fetch(`https://api.github.com/users/username/repos`));
//         }
//
// // call function, passing in any GitHub username as an arg
//         requestUserRepos()
//             // parse response into json
//             .then(response => response.json())
//             // log response data
//             .then(data => console.log(data));


        // https://api.github.com/users/USERNAME/events
        //commits.created at

            // function pr() {
        //     let request = new XMLHttpRequest();
        //     return new Promise(function(resolve, reject) {
        //         request.onreadystatechange = function() {
        //             if (request.readyState == 4) {
        //                 resolve(request.responseText);
        //             }
        //         }
        //         request.open('get', 'https://api.github.com/users/$username', true)
        //         request.send();
        //     });
        // }
        //
        // pr().then(function(val) {
        //     console.log(val)
        // }, function(err) {
        //     console.log(err)
        // })
    });
})();