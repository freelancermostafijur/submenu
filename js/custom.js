$(document).ready(function(){
   /*------mobile menu Toggle------*/ 
    
    $(".mobile_btn").click(function(){
        $(".primari_menu").animate({
	width: "toggle"
	});
    })
    
    /*------sticky menu------*/ 

    $(".sticky_top_menu").waypoint(function(direction){
    if(direction == "down"){
       $("nav").addClass("sticky")
       }else{
        $("nav").removeClass("sticky")
       }
},1000)
 
 







})

    /*-------active menu color--------*/
            var path = window.location.pathname.split("/").pop();
                    if(path == ""){
                       path = "index.php";
                       }
                    console.log(path);
                    var act = $('.menu li a[href="'+path+'"]');
                    act.addClass('menu_active');



