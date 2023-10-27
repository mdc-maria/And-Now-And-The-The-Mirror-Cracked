
// Hover Effect Color/BW 
let img = document.querySelectorAll('#project-link img');
for (var i = 0; i < img.length; i++)
{
    img[i].addEventListener('mouseover', hover);
    img[i].addEventListener('mouseout', leave);
}

function hover(e) { e.target.src = e.target.getAttribute("data-hover-img"); }
function leave(e) { e.target.src = e.target.getAttribute("data-leave-img"); }

// Scroll

 $(".links").animate({ scrollTop: $(document).height() }, 6000);

 setTimeout(function() {
    $('.links').animate({scrollTop:0}, 6000); 
 },6000);


 setInterval(function(){
//      // 4000 - it will take 4 secound in total from the top of the page to the bottom
 $(".links").animate({ scrollTop: $(document).height() }, 6000);
 setTimeout(function() {
    $('.links').animate({scrollTop:0}, 6000); 
 },6000);
    
 },12000);


 $('.links').mouseover(function(e) {
$(this).stop(true);
      
    }).mouseout(function() {
        $(this).stop(false);
    })


//Slider
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


