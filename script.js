$(document).ready(function () {
  //create a btn click event that fires when the searchMovie btn is clicked
  //once btn click works the btn click should fire the ajax call
  $("#searchMovieBtn").on("click", function (event) {
    console.log("I've been clicked");
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
      var trailerUrl = "https://www.youtube.com/watch?v=" + youtubeVideoId;

      console.log(trailerUrl);
      $("#trailerDisplay").text(response.youtubeVideoId);
    });
  });
});

var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=Spiderman&country=us",
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "x-rapidapi-key": "230f5fd612msh4e36283b5d68e1bp179416jsnd53a23333929",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

$(document).ready(function () {
  $(".slider").slider({ full_width: true });
});

/*var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}*/
