$("document").ready(function(){
    $(".yeah").css({"background-color":"black","border":"2px solid red"});
    $(".bodi").css("background-image", "url('http://willpaper.com/download/32448-wallpaper-3d-hd-cars-1366x768.jpg')");
    $(".link1",".link2",".link3").css({"background-color":"blue","padding":"0px","margin":"0px","width":"200px","border":"2px solid black"});
    $("p").css("color","white");
    $("h1").css("color","white");
    $(".link1",".link2",".link3").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $(".link1",".link2",".link3").bind('click', mouseClick);
    
    function mouseOverMe(){
        $(".link1",".link2",".link3").css("background-color","red");
    }
    
    function mouseOutMe(){
        $(".link1",".link2",".link3").css("background-color","blue");
    }
    
    function mouseClick(){
        
    }
    
});