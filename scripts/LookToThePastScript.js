/*
This page is linked to the look to the past page
These functions allow the slide show to move to the next and previous slide through user interaction 
with arrow buttons
it displays the third image in the webpage as default
*/
$(document).ready(function () {


  $.ajax({
    type: "get",
    url: "./data/gullwing.csv",
    datatype: "text",
    success: function (rawImages) {
      outPutImages(rawImages)
    }
  })

  function outPutImages(rawImages) {
    window.currentSlideIndex = 2;
    window.carImages = $.csv.toObjects(rawImages)
    carouselImages();
  }

/*
  This function runs the animation that when the envelope is clicked it displays the video
*/

  $("#animation-image").click(function () {
    console.log("running animation");
    $(".video-box").animate({
      height: "toggle",
      effect: ""
    });
  });

});

function carouselImages() {

  let content = "<img class='display-img' src='./images/gullwingImages/" + carImages[currentSlideIndex].image + "'>";

  $("#carousel-image").html(content);

}
$("#previous-slide").click(function () {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = carImages.length - 1;
  }

  carouselImages();
})
$("#next-slide").click(function () {
  currentSlideIndex++;
  if (currentSlideIndex == carImages.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex > carImages.length - 1) {
    currentSlideIndex--;
  }
  carouselImages();
})