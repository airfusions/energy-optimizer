$(document).ready(function() {
  // Animate the header text
  var headerText = $("header h1");
  headerText.animate({
    fontSize: "2em"
  }, 2000);

  // Animate the image
  var image = $("img");
  image.animate({
    width: "50%"
  }, 3000);
});
