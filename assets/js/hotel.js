jQuery(document).ready(function(){

	
	const humbargerBtn = jQuery('.humbergarBtn');
	
	humbargerBtn.click(function(){

		jQuery('.sitenav').toggleClass('addSlide');

		jQuery(this).toggleClass('close');


	});

$(document).on("scroll",function(){
        if($(document).scrollTop()>50){
            $("header").addClass('sticky');      
            $("header").removeClass('site-header');      
        } else{
            $("header").removeClass('sticky');
            $("header").addClass('site-header');
            
        }
    });

    	$('.row-videoWrap.owl-carousel').owlCarousel({
       loop:true,
        autoplay:true,
         smartSpeed:5000,
        autoplayTimeout:5000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });

          $('.row-service.owl-carousel').owlCarousel({
       loop:true,
        autoplay:false,
         smartSpeed:2000,
        autoplayTimeout:5000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
             768:{
                items:3,
                nav:true
            },
             1200:{
                items:4,
                nav:true
            }
        }
    });
       $('.row-reviews.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });



      $(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});  
          

      $('.row-course.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });
      $('body').on('keyup', '.js-input-mobile', function () {
            var $input = $(this),
            value = $input.val(),
            length = value.length,
            inputCharacter = parseInt(value.slice(-1));

         if (!((length > 0 && inputCharacter >= 0 && inputCharacter <= 10) || (length === 1 && inputCharacter >= 7 && inputCharacter <= 10))) {
            $input.val(value.substring(0, length - 1));
         }
      });

      
         (function(){


    const cirClePointerHv = $('.circlePointer');
    cirClePointerHv.each(function(){
      $(this).click(function(){

        cirClePointerHv.removeClass('active');
        $(this).addClass('active');

        const thisAttr = $(this).attr('id');
        /*console.log(thisAttr);*/

        const disvrText = $('.progfill');

        disvrText.each(function(){
          const dsvrTestAttr = $(this).attr('id');
          console.log(dsvrTestAttr);

          if(thisAttr == dsvrTestAttr){
            $(this).addClass('active');
          }else{
            $(this).removeClass('active');
          }

        }); 


      });
    });

    const crltext =$('.crltext a');

    crltext.each(function(){
      $(this).click(function(){
        crltext.removeClass("active");
        $(this).addClass('active');
      });
    });
    })();

        

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
     }, 1500);


wow = new WOW({
        animateClass: 'animated',
        mobile: false,
        offset: 100
    });
    wow.init();

    $(function () {
  // Smooth Scroll
  $('a[href*=#]').bind('click', function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
});


});
document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();
var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};