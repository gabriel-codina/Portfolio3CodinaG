
$("document").ready(function(){
    $(".yeah").css({"background-color":"black","border":"2px solid red"});
  
    $(".link1,.link2,.link3").css({"background-color":"blue","padding":"0px","margin":"0px","width":"200px","border":"2px solid black","color":"black","text-decoration":"none"});
    $("body p").css("color","white");
    $("h1").css("color","white");
    $(".backbutton").css({"border":"2px solid white","background-color":"blue","border-radius":"10px","color":"white"});
    $(".link1").bind('mouseover', mouseOverMeLink1).bind('mouseout', mouseOutMe);
    $(".link3").bind('mouseover', mouseOverMeLink3).bind('mouseout', mouseOutMe);
    $(".link2").bind('mouseover', mouseOverMeLink2).bind('mouseout', mouseOutMe);
    $("html").bind("dblclick", clrChange);
    $("p").bind("dblclick", clrChangeP);
    $("#techAccord").accordion({ header: "h1" });
    
    
    $(".link1,.link2,.link3").bind('click', mouseClick);
    $(".backbutton").bind('click', mouseClick);
    
    $("#filter").keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $(".commentlist").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).prev().prev().prev().fadeOut(1000);
                $(this).prev().prev().fadeOut(1000);
                $(this).prev().fadeOut(1000);
                $(this).fadeOut(1000);
                $(this).next().fadeOut(1000);
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).prev().prev().prev().show();
                $(this).prev().prev().show();
                $(this).prev().show();
                $(this).show();
                $(this).next().show();
                count++;
            }
        });
 
        // Update the count
        var numberItems = count;
        $("#filter-count").text("Number of Results = "+count).css("color","white");
    });
    
    
    function mouseOverMeLink1(){
        $(".link1").css("background-color","red");
    }
    
    function mouseOverMeLink2(){
        $(".link2").css("background-color","red");
    }
    
    function mouseOverMeLink3(){
        $(".link3").css("background-color","red");
    }
    
    function clrChange(){
        var RandomColor = Math.floor(Math.random()*9);
        
        if(RandomColor == "9"){
            $(".bodi").css({"background-color":"blue","background":"url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfxw--GPRUvr75vtclhdyv9BxHaEq7eFJ1QkAOouZwvM62w9Urrg') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "8"){
            $(".bodi").css({"background-color":"orange","background":"url('http://ldopa.net/wp-content/uploads//AquaNegative.jpg') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "7"){
            $(".bodi").css({"background-color":"purple","background":"url('http://p1.pichost.me/i/41/1640904.jpg') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "6"){
            $(".bodi").css({"background-color":"cyan","background":"url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmzOhYjugsFll6907VOQLHGY3tbFyvUZd6MV1vGZ7EIxJoO-HO') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "5"){
            $(".bodi").css({"background-color":"green","background":"url('http://slowbuddy.com/wp-content/gallery/plain-background/4567766846.jpg') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "4"){
            $(".bodi").css({"background-color":"black","background":"url('http://wallown.com/wp-content/uploads/2014/06/cool_wallpapers_for_desktop.jpg') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "3"){
            $(".bodi").css({"background-color":"pink","background":"url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3TCBpOC-134QP1ghBn3N6KtdWCo5tu8iZb1ABbYPMoK9g1v3wCA') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "2"){
            $(".bodi").css({"background-color":"choclate","background":"url('http://abstractatus.com/images/2013/11/cool-backgrounds-patterns-catalog-of-patterns.jpg') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "1"){
            $(".bodi").css({"background-color":"grey","background":"url('http://img15.nnm.me/d/9/2/8/f/28b9c03a90d1dea1473a8a9a797.jpg') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }else if(RandomColor == "0"){
            $(".bodi").css({"background-color":"magenta","background":"url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQb49tgTOSyIUK75CzoPIp4Dk51VeJXqPc3Mn8cO0Wv7XfbeXGBZA') no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size": "cover","-o-background-size": "cover","background-size": "cover"});
        }
    }
    
    function clrChangeP(){
        var RandomColor = Math.floor(Math.random()*9);
        
        if(RandomColor == "9"){
            $("p").css({"color":"blue"});
        }else if(RandomColor == "8"){
            $("p").css({"color":"orange"});
        }else if(RandomColor == "7"){
            $("p").css({"color":"purple"});
        }else if(RandomColor == "6"){
            $("p").css({"color":"cyan"});
        }else if(RandomColor == "5"){
            $("p").css({"color":"green"});
        }else if(RandomColor == "4"){
            $("p").css({"color":"black"});
        }else if(RandomColor == "3"){
            $("p").css({"color":"pink"});
        }else if(RandomColor == "2"){
            $("p").css({"color":"choclate"});
        }else if(RandomColor == "1"){
            $("p").css({"color":"grey"});
        }else if(RandomColor == "0"){
            $("p").css({"color":"white"});
        }
    }
    
    function mouseOutMe(){
        $(".link1,.link2,.link3").css("background-color","blue");
    }
    
    function mouseClick(){
        $(".link1,.link2,.link3, body p,h1,.yeah").fadeToggle(2000);
        $(".backbutton").html("show website");
        
    }
    
});