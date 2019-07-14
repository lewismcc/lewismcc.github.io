/*
This page is linked to the look to the past page
These functions allow the slide show to move to the next and previous slide through user interaction 
with arrow buttons
it displays the first image in the webpage as default
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
  $("#animation-image").click(function () {
    console.log("running animation");
    var outputVideo=
    "<div class='video-box'>"+
    "<video width='500px' height='350px' controls>"+
    "<source src='./images/history-clip.mp4' type='video/mp4'>"+
    +"</div>";
    //$(".amination-image").append(outputVideo);  
    $(".video-box").animate({
      height: "toggle",
      top:"0px",
      left: "0px"

      
    });
  })

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
// $("#animation-image").click(function () {
//   console.log("running animation");
//   var outputVideo=
//   "<div class='video-box'>"+
//   "<video width='500px' height='350px' controls>"+
//   "<source src='history-clip.mp4' type='video/mp4'>"+
//   +"</div>";
//  // $(".amination-image")
// })
