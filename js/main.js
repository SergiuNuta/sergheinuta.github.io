// const title = document.querySelector('.title');
// const logo = document.querySelector('.logo');
// const menu = document.querySelector('.menu');

// const timeLine = new TimelineMax ();

// // timeLine.fromTo(title, 1, {height: "0%"}, {height: "80vh", ease: Power2.easeInOut})
// timeLine.fromTo(title, 1.2, {width: "40%"}, {width: "100%", ease: Power2.easeInOut})
// .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
// .fromTo(menu, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5");





function myFunction(x) {

    x.classList.toggle("change");
}

function openNav() {

    document.getElementById("myNav").style.width = "100%";
}
 
function closeNav() {

    document.getElementById("myNav").style.width = "0%";

}
            
           
//////////////////////////////////////////////////////

// let logoElement = $(' .footerLogo);

// $(window).scroll(function() {
  
//    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     
//        $(logoElement).addClass('show');
     
//    } else if($(logoElement).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 150) {
     
//       $(logoElement).removeClass('show');
     
//    }
// });