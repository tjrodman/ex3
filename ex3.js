//Javascript

//cal to jQuery ready function
//make sure the html & css is loaded

$(document).ready(function(){
    console.log("ready");//check
    
    //preload images to avoide delay 
    //(p. 212 of "The MIssing Manual: Javascript and jQuery")
    var preloadImages = ['images/allS.png',
                          'images/freelanceS.png',
                          'images/playS.png',
                          'images/errandsS.png',
                          'images/schoolS.png',
                          'images/noneS.png'
                         ];
    //go through each item in the array and load it
    for (var i=0; i < preloadImages.length; i++) {
      new Image().src = preloadImages[i];
    }

    //-------------------------------HOVER SECTION---------------------------------
    //---------ALL: HOVER
    var colorFreelance= '#dcedc8';
    var colorPlay='#85d7d1';
    var colorErrands='#2267ab';
    var colorSchool='#1a237e';
    var none='#e4e4e4';
        
    $('img#all').hover(function(){
    //first function to add hover image
    $('img#all').attr('src','images/allS.png');
        console.log("hover");//check
        //turn everything into their original color
        $('div.circleFreelance').css('background-color','#dcedc8');
        $('div.circlePlay').css('background-color','#85d7d1');
        $('div.circleErrands').css('background-color','#2267ab');
        $('div.circleSchool').css('background-color','#1a237e');
}, function(){//second function
        $('img#all').attr('src','images/all.png');
        $('div.circleFreelance').css('background-color',colorFreelance);
        $('div.circlePlay').css('background-color',colorPlay);
        $('div.circleErrands').css('background-color',colorErrands);
        $('div.circleSchool').css('background-color',colorSchool);
        //turn it back to whatever the variable is
        
    });//end hover All
    
    //--------FREELANCE: HOVER
    $('img#freelance').hover(function(){
        //add image on hover
        $('img#freelance').attr('src','images/freelanceS.png');
        $('div.circleFreelance').css('background-color','#dcedc8');
        $('div.circlePlay').css('background-color',none);
        $('div.circleErrands').css('background-color',none);
        $('div.circleSchool').css('background-color',none);
    }, function(){
        //mouse exit
        $('img#freelance').attr('src','images/freelance.png');
        $('div.circleFreelance').css('background-color',colorFreelance);
        $('div.circlePlay').css('background-color',colorPlay);
        $('div.circleErrands').css('background-color',colorErrands);
        $('div.circleSchool').css('background-color',colorSchool);
    });//end hover freelance

    //----------PLAY: HOVER
    $('img#play').hover(function(){
        $('img#play').attr('src','images/playS.png');
        $('div.circleFreelance').css('background-color',none);
        $('div.circlePlay').css('background-color','#85d7d1');
        $('div.circleErrands').css('background-color',none);
        $('div.circleSchool').css('background-color',none);
    }, function(){
        //mouse exit
        $('img#play').attr('src','images/play.png');
        $('div.circleFreelance').css('background-color',colorFreelance);
        $('div.circlePlay').css('background-color',colorPlay);
        $('div.circleErrands').css('background-color',colorErrands);
        $('div.circleSchool').css('background-color',colorSchool);
    });
    
    //----------ERRANDS: HOVER
    $('img#errands').hover(function(){
        $('img#errands').attr('src','images/errandsS.png');
        $('div.circleFreelance').css('background-color',none);
        $('div.circlePlay').css('background-color',none);
        $('div.circleErrands').css('background-color','#2267ab');
        $('div.circleSchool').css('background-color',none);
    }, function(){
        //mouse exit
        $('img#errands').attr('src','images/errands.png');
        $('div.circleFreelance').css('background-color',colorFreelance);
        $('div.circlePlay').css('background-color',colorPlay);
        $('div.circleErrands').css('background-color',colorErrands);
        $('div.circleSchool').css('background-color',colorSchool);
    });
    
    //----------SCHOOL: HOVER
    $('img#school').hover(function(){
        $('img#school').attr('src','images/schoolS.png');
        $('div.circleFreelance').css('background-color',none);
        $('div.circlePlay').css('background-color',none);
        $('div.circleErrands').css('background-color',none);
        $('div.circleSchool').css('background-color','#1a237e');
        
    }, function(){
        //mouse exit
        $('img#school').attr('src','images/school.png');
        $('div.circleFreelance').css('background-color',colorFreelance);
        $('div.circlePlay').css('background-color',colorPlay);
        $('div.circleErrands').css('background-color',colorErrands);
        $('div.circleSchool').css('background-color',colorSchool);
    });
    
    //----------NONE: HOVER
    $('img#none').hover(function(){
        $('img#none').attr('src','images/noneS.png');
        $('div.circleFreelance').css('background-color',none);
        $('div.circlePlay').css('background-color',none);
        $('div.circleErrands').css('background-color',none);
        $('div.circleSchool').css('background-color',none);
    }, function(){
        //mouse exit
        $('img#none').attr('src','images/none.png');
        $('div.circleFreelance').css('background-color',colorFreelance);
        $('div.circlePlay').css('background-color',colorPlay);
        $('div.circleErrands').css('background-color',colorErrands);
        $('div.circleSchool').css('background-color',colorSchool);
    });
    
    
    //---------------------------------MOOD SECTION HOVERS--------------------------
    //ENERGY hover
    $('h3#energy').hover(function(){
        $('h3#energy').css('background-color','#BFBFBF');
        
    }, function(){
     $('h3#energy').css('background-color','#e4e4e4');}
    );
    
    //MOOD hover
    $('h3#mood').hover(function(){
        $('h3#mood').css('background-color','#BFBFBF');
    }, function(){
        $('h3#mood').css('background-color','#e4e4e4');
    })
    
    //CONFUSED hover
    $('h3#confused').hover(function(){
        $('h3#confused').css('background-color','#BFBFBF');
    }, function(){
        $('h3#confused').css('background-color','#e4e4e4');
    })



//--------------------------------------CLICK TO CHANGE IMAGE---------------------
//-----------------------ALL: CLICK 
    //create variables 
    var all = new Image();
    all.src = 'images/all.png';
    var allS = new Image();
    allS.src = 'images/allS.png';
    var allImage = false;

    //when an image is selected replace variables 
    $('img#all').mousedown(function(){
    //switch the bool
    if(allImage == false){
        allImage = true;
    } else {allImage = false;}
        console.log(allImage); //check
        
        //if true use allS.png, if false, change to all.png
    if(allImage){
        console.log('its true!');//check
        //swap 
        $('#all').replaceWith('<img src="images/allS.png" alt="Happy Face" id="all">');
    }else {console.log('its false!');//check
        $('#all').replaceWith('<img src="images/all.png" alt="Happy Face" id="all">');}
});//end img#all click function

//--------------------------MOODS
    
    
//----------------------------------------TOOL TIP-----------------------
    //when you hover over each circle, it gives your more information
    $('div#f1').hover(function(){
        console.log('on');
        $('article p#1').css('visibility','visible');
    }, function(){
        $('article p#1').css('visibility','hidden');
        console.log('off');
    });
    
    //USING SEPARATE FUNCTIONS ^^
//    $('div#f1').mouseenter(function(){
//        console.log('aside');
//        $('p#1').show();
//    });
//    $('div#f1').mouseleave(function(){
//        $('p#1').hide();
//        console.log('hide aside');
//    });

//---------------------------BOX-----
    
    
    
});//end main