<!-- <script> 
$(function(){
	var n = localStorage.getItem('counter'); 
	if (n === null) {
		n = 0;
	} 
	if(n==3){
		localStorage.setItem("counter", 0); 
		n = 0;
	}
	if(n==0){
		$(".banner1caption").css("display", "block");
		$(".banner2caption").css("display", "none");
		$(".banner3caption").css("display", "none");
	}
	if(n==1){
		$(".banner1caption").css("display", "none");
		$(".banner2caption").css("display", "block");
		$(".banner3caption").css("display", "none");
	}
	if(n==2){
		$(".banner1caption").css("display", "none");
		$(".banner2caption").css("display", "none");
		$(".banner3caption").css("display", "block");
	}

	n++; 
	localStorage.setItem("counter", n); 
});
</script> -->
<script>
$(document).ready(function(){
/*$('.banner-contand-area').slick({
  dots: false,
arrows:true,
  cssEase: 'linear',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
autoplay:true,
autoplaySpeed:5000,
pauseOnHover:false,
prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
nextArrow:"<button type='button' class='slick-next pull-right'></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});*/
$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.slider-solutions-top').slick({
  dots: false,
arrows:true,
  cssEase: 'linear',
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
autoplay:false,
autoplaySpeed:2000,
pauseOnHover:false,
prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
nextArrow:"<button type='button' class='slick-next pull-right'></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});
</script>