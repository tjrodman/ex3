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
    //1-------11:00
    $('div#f1').hover(function(){
        console.log('on');
        $('article p#s1').css('visibility','visible');
    }, function(){
        $('article p#s1').css('visibility','hidden');
        console.log('off');
    });
    
    //2-------11:15
    $('div#f2').hover(function(){
        console.log('on');
        $('article p#s2').css('visibility','visible');
    }, function(){
        $('article p#s2').css('visibility','hidden');
        console.log('off');
    });
    
    //3-------11:30
     $('div#f3').hover(function(){
        console.log('on');
        $('article p#s3').css('visibility','visible');
    }, function(){
        $('article p#s3').css('visibility','hidden');
        console.log('off');
    });
    
    //4-------11:45
     $('div#f4').hover(function(){
        console.log('on');
        $('article p#s4').css('visibility','visible');
    }, function(){
        $('article p#s4').css('visibility','hidden');
        console.log('off');
    });
    
    //play1-------12:00
     $('div#p1').hover(function(){
        console.log('on');
        $('article p#s5').css('visibility','visible');
    }, function(){
        $('article p#s5').css('visibility','hidden');
        console.log('off');
    });
    
    //pl2-------12:15
     $('div#p2').hover(function(){
        console.log('on');
        $('article p#s6').css('visibility','visible');
    }, function(){
        $('article p#s6').css('visibility','hidden');
        console.log('off');
    });
    
    //pl3-------12:30
     $('div#p3').hover(function(){
        console.log('on');
        $('article p#s7').css('visibility','visible');
    }, function(){
        $('article p#s7').css('visibility','hidden');
        console.log('off');
    });
    
    //pl4-------12:45
     $('div#p4').hover(function(){
        console.log('on');
        $('article p#s8').css('visibility','visible');
    }, function(){
        $('article p#s8').css('visibility','hidden');
        console.log('off');
    });
    
    //e1-------1:00
     $('div#e1').hover(function(){
        console.log('on');
        $('article p#s9').css('visibility','visible');
    }, function(){
        $('article p#s9').css('visibility','hidden');
        console.log('off');
    });
    
    //e2--------1:15
     $('div#e2').hover(function(){
        console.log('on');
        $('article p#s10').css('visibility','visible');
    }, function(){
        $('article p#s10').css('visibility','hidden');
        console.log('off');
    });
    
    //e3--------1:30
     $('div#e3').hover(function(){
        console.log('on');
        $('article p#s11').css('visibility','visible');
    }, function(){
        $('article p#s11').css('visibility','hidden');
        console.log('off');
    });
    
    //e3--------1:45
     $('div#e4').hover(function(){
        console.log('on');
        $('article p#s12').css('visibility','visible');
    }, function(){
        $('article p#s12').css('visibility','hidden');
        console.log('off');
    });
    
    //pl5--------1:15
     $('div#p5').hover(function(){
        console.log('on');
        $('article p#s13').css('visibility','visible');
    }, function(){
        $('article p#s13').css('visibility','hidden');
        console.log('off');
    });
    
    //pl6--------1:15
     $('div#p6').hover(function(){
        console.log('on');
        $('article p#s14').css('visibility','visible');
    }, function(){
        $('article p#s14').css('visibility','hidden');
        console.log('off');
    });
    
    //sc1--------1:15
     $('div#sc1').hover(function(){
        console.log('on');
        $('article p#s15').css('visibility','visible');
    }, function(){
        $('article p#s15').css('visibility','hidden');
        console.log('off');
    });
    
    //sc2--------1:30
     $('div#sc2').hover(function(){
        console.log('on');
        $('article p#s16').css('visibility','visible');
    }, function(){
        $('article p#s16').css('visibility','hidden');
        console.log('off');
    });
    
    //sc3--------1:45
     $('div#sc3').hover(function(){
        console.log('on');
        $('article p#s17').css('visibility','visible');
    }, function(){
        $('article p#s17').css('visibility','hidden');
        console.log('off');
    });
    
    //sc4--------1:30
     $('div#sc4').hover(function(){
        console.log('on');
        $('article p#s18').css('visibility','visible');
    }, function(){
        $('article p#s18').css('visibility','hidden');
        console.log('off');
    });
    
    //sc5--------1:30
     $('div#sc5').hover(function(){
        console.log('on');
        $('article p#s19').css('visibility','visible');
    }, function(){
        $('article p#s19').css('visibility','hidden');
        console.log('off');
    });
    
    //pl7--------1:30
     $('div#p7').hover(function(){
        console.log('on');
        $('article p#s20').css('visibility','visible');
    }, function(){
        $('article p#s20').css('visibility','hidden');
        console.log('off');
    });
    
});//end main