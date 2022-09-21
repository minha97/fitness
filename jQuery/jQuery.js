$(function () {

    //---- price clock ----
    var clock = $('.clock').FlipClock({
        clockFace: 'HourlyCounter',
        autoStart: true
    });
    clock.setTime(24 * 60 * 60);

    clock.setCountdown(true);

    clock.start();

    //---- slickBanner ----
    $(".list").slick({
        slidesToShow: 5, //보여주는 갯수
        slidesToScroll: 1, //움직이는 갯수
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })
     
    // ---- mainBanner ----

    //보여지는 배너가 누군지
    var showBanner=0;

    //첫번째 배너는 복사하여 .banner 끝에 붙인다.
    var obj = $(".banner>li:first").clone();

    $(".banner").append(obj);
    
    //자식의 개수 알아오기
    var liCount = $(".banner>li").length;

    //부모인 banner width
    $(".banner").width(liCount*100+"%");
    //banner>li width
    $(".banner>li").width(100/liCount+"%");

    function moveBanner(){
        $(".banner").stop().animate({
            "margin-left":-showBanner*100+"%"
        },600)

        if(showBanner==5){
            $(".pager>li").eq(0).addClass("active").siblings().removeClass("active")
        }
        else{
            $(".pager>li").eq(showBanner).addClass("active").siblings().removeClass("active");
        }
    }

    

    //pager
    $(".pager>li").click(function(){
        showBanner = $(this).index();
        moveBanner();
    })
    //왼쪽 버튼
    $(".arrow>a:first").click(function(){
        if(showBanner==0){
            $(".banner").css("margin-left",-(liCount-1)*100+"%");
            showBanner=liCount-1;
            
        }
        showBanner--;
        moveBanner();
    })
    //오른쪽 버튼을 누르면
    $(".arrow a:last").click(function(){
        console.log(showBanner);
        if(showBanner==(liCount-1)){
            $(".banner").css("margin-left",0);
            showBanner=0;
        }
        showBanner++;
        moveBanner()
    })



       // ---- ham ----

        //    var count = 0;

       $(".ham").click(function(){
           $(this).children().toggleClass("active")
       })
   
       var button = false;
       $(".ham").on("click", function () {
           if (button == false) {
               // console.log("클릭")
               $("#nav").stop().animate({
                   top: 98
               }, 300)
               button = true;
           }
           else {
               $("#nav").stop().animate({
                   top: -1000 + "%"
               }, 500)
               button = false;
           }
   
       })
   
})