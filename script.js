// $(document).ready(function () {

//we need to make a btn click event that fires when the searchMovie btn is clicked
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
  });
});
