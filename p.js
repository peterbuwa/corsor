



function open()
{
document.getElementById("hamburger-wrapper1").style.display="block";
document.getElementById("times1").style.display="block";
document.getElementById("nav1").style.display="block";
 }

 let slideIndex = 0;
 let left= document.querySelector(".left");
 let right = document.querySelector(".right");
 left.addEventListener("click", function(){
     let slide = document.getElementsByClassName("slide-container")
     slideIndex += 1;

     if (slideIndex > slide.length){
         slideIndex = 1;
     }

     for (let index = 0; index < slide.length; index++){
         slide[index].style.display="none";
     }
     slide[slideIndex-1].style.display="block";
 })


 right.addEventListener("click", function(){
     let slide = document.getElementsByClassName("slide-container")
     slideIndex -= 1;
     if(slideIndex < 1){
        slideIndex = slide.length;
     }

     for(let index=0; index < slide.length; index++){
         slide[index].style.display="none";
         slide[slideIndex - 1].style.display="block";
     }
 })








 let sliderIndex = 0;
 let go = document.querySelector(".fa-chevron-left")
 go.addEventListener("click", function(){
     let slider = document.getElementsByClassName("container3-content36");
     sliderIndex += 1;

     if (sliderIndex > slider.length){
         sliderIndex = 1;
     }

     for(let i = 0; i < slider.length; i++){
         slider[i].style.display = "none";
     }

     slider[sliderIndex-1].style.display="block";


 })


 









 let come = document.querySelector(".fa-chevron-right")
 come.addEventListener("click", function(){
     let slider = document.getElementsByClassName("container3-content36");
     sliderIndex -= 1;

     if (sliderIndex < 1){
         sliderIndex = slider.length;
     }

     for(let i = 0; i < slider.length; i++){
         slider[i].style.display = "none";
     }

     slider[sliderIndex-1].style.display="block";


 })
 


let mySliderIndex = 0;
plusSlides();
function plusSlides(){
    let image = document.getElementsByClassName("container3-content36");

    for(let r = 0; r < image.length; r++){
        image[r].style.display = "none";
    }

    mySliderIndex++;

    if(mySliderIndex > image.length){mySliderIndex = 1;}
    image[mySliderIndex - 1].style.display = "block";
    setTimeout(plusSlides, 1000);
}
