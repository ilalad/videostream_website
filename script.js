
$(document).ready(function () {
    $(".slider").slider({ full_width: true });

    //we need to make a btn click event that fires when the searchMovie btn is clicked
    //once btn click works the btn click should fire the ajax call

    $("#searchMovieBtn").on("click", function (event) {
        event.preventDefault();
        console.log("I've been clicked");
        $("#resStream").empty();
        $("#youVid").empty();
        //search movie should equal to the value entered by the user from the input field with an id of userMovieInput
        var searchMovie = $("#userMovieInput").val().trim();
        console.log(searchMovie);
        //here we build our query url by concating var searchMovie into our hard coded url
        var queryUrl =
            "https://www.googleapis.com/youtube/v3/search?type=video&q=" +
            searchMovie +
            " official trailer&key=AIzaSyB_pQRVeuodW7AAbb4hN2COspiJikOuXnQ";
        console.log(queryUrl);
        // Creating an AJAX call for the specific movie's trailer when serached

        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function (response) {
            console.log(response.items[0].id.videoId);
            var youtubeVideoId = response.items[0].id.videoId;
            var trailerUrl = "https://www.youtube.com/embed/" + youtubeVideoId;

            console.log(trailerUrl);

            $("#youVid").attr("class", "video-container").append(`<iframe width="600" height="400" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);



        });

        //Rapid Api Script for Streamer
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${searchMovie}&country=us`,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
                "x-rapidapi-key": "230f5fd612msh4e36283b5d68e1bp179416jsnd53a23333929"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            var row = $("<div>").attr("class", "row");
            $("#resStream").append(row);


            for (var i = 0; i < response.results[0].locations.length; i++) {

                var streamApp = response.results[0].locations[i].display_name;
                console.log(streamApp);

                var streamIcon = response.results[0].locations[i].icon;
                console.log(streamIcon);

                var streamLink = response.results[0].locations[i].url;


                var d1 = $("<div>").attr("class", "col s3");
                var iconEl = $("<img>");
                iconEl.attr("src", streamIcon);
                iconEl.attr("alt", "Click here to go to " + streamApp);
                iconEl.attr("id", "iconStyle");



                var linkEl = $("<a>").attr("href", streamLink).attr("target", "_blank").append(iconEl);

                //var iconBtn = $("<button>").attr("id", "buttonStyle").append(linkEl);


                row.append(d1);
                d1.append(linkEl);


                //;row.append(iconEl, linkEl);

                ///sytax;

            };

        });

    });

});

