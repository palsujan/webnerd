jQuery(document).ready(function(){

	
/*	const humbargerBtn = jQuery('.humbergarBtn');
	
	humbargerBtn.click(function(){

		jQuery('.sitenav').toggleClass('addSlide');

		jQuery(this).toggleClass('close');


	});*/

$(document).on("scroll",function(){
        if($(document).scrollTop()>150){
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
         smartSpeed:2000,
        autoplayTimeout:5000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });

       $('.row-home-product.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
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
             992:{
                items:4,
                nav:true
            }
        }
    });

      $('.row-menu.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplaySpeed: 8000,
        slideTransition: 'linear',
        autoplayHoverPause:true,
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

/*          $(".sitenav a").click(function() {
        event.preventDefault();
    
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 130 }, 500);
        
        $('.sitenav a').removeClass('active');
        $(this).addClass('active');
        return true;
    });*/
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
     }, 1500);


});