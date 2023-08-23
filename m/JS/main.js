var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'JS/jquery-3.6.1.min.js'; // set the source of the script to your script

var head = document.getElementsByTagName("head")[0];
head.appendChild(newScript);

$(document).ready(function () {
    $(".loader-wrapper", 'body').fadeOut("slow");
});

$(window).on("load", function() {
    document.body.classList.remove('no-scroll');
 });
 

function show_list() {
    var dropdown = document.getElementById("dropdown-id");

    if (dropdown.style.display == "block") {
        dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
}

function myFunction(x) {
  x.classList.toggle("change");
}

      $(document).ready(function(){
        $(window).scroll(function(){
          if($(this).scrollTop() > 40)
          {
            $('#topBtn').fadeIn();
          }
          else
          {
            $('#topBtn').fadeOut();
          }
        });
        
         $("#topBtn").click(function(){
            $('html, body').animate({scrollTop: 0},200);
         });             
      });

      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
          document.getElementById("alternative-navigation").style.animationDuration = "1s";
          document.getElementById("alternative-navigation").style.animationName = "background-appear";
          document.getElementById("alternative-navigation").style.animationFillMode = "forwards";

        } else {
            document.getElementById("alternative-navigation").style.animationDuration = "1s";
            document.getElementById("alternative-navigation").style.animationName = "background-dissapear";
            document.getElementById("alternative-navigation").style.animationFillMode = "forwards";
          }
      }

      $("#scroll-down-header").click(function() {
        $("html, body").animate({ scrollTop: $("#header-down-scroll").offset().top }, 1500);
    });
    
    setInterval(function() {
    $(document).ready(function(){
      if($(window).width() >= 1000) {
    window.location = "https://simuliks-dev.lt/index.html";
    }
    });
  }, 100);
