$(document).ready(function(){

    $("#red-box").fadeOut(2000);

    $("#hi").click(function(){
        $("p").hide();
    });

    $("#click-event").click(function(){
        $(this).hide();
    });

    $("#mouse-over").mouseenter(function(){
        alert("마우스를 올리셨네여");
    });

    $("#show").click(function(){
        $("#hide-text").show(2000);
    });

    $("#hide").click(function(){
        $("#hide-text").hide(2000);
    });

    $("#toggle-button").click(function(){
        $("#toggle").toggle(2000);
    });

    $("#button1").click(function(){
        $("#green-box").fadeOut("slow");
    });

    $("#button2").click(function(){
        $("#blue-box").fadeIn(2000);
        $("#green-box").fadeIn(3000);
    });

    $("#button3").click(function(){
        $("#maroon-box").fadeTo("20000", 0.25);
    });

    $("#button4").click(function(){
        $("#pink-box").slideUp(2000);
    });

    $("#button5").click(function(){
        $("#pink-box").slideDown(3000);
    });

    $("#button6").click(function(){
        $("#pink-box").slideToggle("show");
    });

    $("#callback-button").click(function(){
        $("#callback").hide("fast",function(){
            alert("마우스를 올리셨네요");
        });
    });

    $("#double-button").click(function(){
        $("#double").toggle(2000);
        alert("fagyfhdad");
    });

    $("#chaining").click(function(){
        $("#maroon-box").slideUp(6000).css("background-color", "blue").slideDown();
    });

    $("#get-text").click(function(){
        alert("Text: " + $("#text-box").text());
    });

    $("#get-html").click(function(){
        alert("HTML: " + $("#text-box").html());
    });

    $("#get-value-button").click(function(){
        alert("Value: " + $("#get-value").val());
    });

    $("#todo-button").click(function(){
        $("#ul-todo").append("<li>" + ($("#todo").val()) + "</li>");
        $("#todo").val("");
    });
});