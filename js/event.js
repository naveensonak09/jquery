$(document).ready(function(){
        $("#clickbutton").click(function(){
            alert("You clicked on button.");
        });
        $("#hoverbutton").hover(function(){
            $(this).css("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "white");
          });
          $("input").focus(function() {
            $(this).next("span").css("display","inline").fadeOut(1000);
          });
          $("#mouseover").mouseover(function(){
            $("#mouseover").css("background-color", "red");
          });
          $("#mouseover").mouseout(function(){
            $("#mouseover").css("background-color", "green");
          });
          $("a").click(function(event){
            event.preventDefault();
          });
});