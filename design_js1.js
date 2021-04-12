$(function(){
  $(".acording a").click(function(){
    $($(this).attr("href")).slideToggle();
    return false;
  });
  $(".slick").slick({
    slidesToShow:3,
    autoplay:true,
    centerMode: true,
    centerPadding: '88px',
    arrows:false,
    autoplaySpeed:5000,
    variableWidth:true,
  });
  $(".fa-bars").click(function(){
    $(".menu").addClass("open");
    $(".menu").animate({width:300},300);
    $(".back").fadeIn();
    if($(".menu").hasClass("open")){
      $(".back").click(function(){
        $(".menu").removeClass("open");
        $(".menu").animate({width:0},300);
        $(".back").fadeOut();
      });
    }
  });
});
