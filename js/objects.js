$(function() {

    let pinguin = {
        body : $(".pinguin"),
        jump : function () {
            var that = this;

            this.body.animate({ //concentrate
                top: "54.6vh",
                height: "14vh"
            }, 200 );
            setTimeout(function(){
                that.body.animate({ //jump
                    top: "40vh",
                    height: "16.6vw"
                }, 300 );
                that.body.animate({ //fall
                    top: "54.6vh"
                }, 500 );
                that.body.animate({ //release
                    height: "16.6vw",
                    top: "50vh"
                }, 300 );
            }, 300);

        },

        move : function () {
            console.log("move...");
            this.body.animate({ //jump
                top: "40vh",
                height: "16.6vw"
            }, 300 );
            this.body.animate({ //fall
                top: "54.6vh"
            }, 500 );
        }
    };



    let gameController = {

        sceneMaxH : 600,
        sceneMinH : 240,
        sceneMaxW : 800,
        sceneMinW : 320,
        sky : $(".sky"),
        ice : $(".ice"),
        glacier : $(".glacier"),

        setExtremeValues : function (h, w) {
            this.sky.height(h * 0.6);
            this.ice.height(h * 0.3);
            this.glacier.height(h * 0.1);
        },


        startGame : function () {
            console.log("startGame...");
            while (true) {
                setTimeout( function () {
                    pinguin.move();
                } , 100);
            }

        },

        recalculateSizes : function (height, width) {
            console.log("counting dimensions...");
            console.log(height, width);


        }
    };




    // main program :D

    gameController.recalculateSizes($(".scene").height(), $(".scene").width());
    gameController.startGame();


    console.log( "ready!" );


    $(window).resize(function(){
        gameController.recalculateSizes($(".scene").height(), $(".scene").width());
    });



});





//
//

// console.log(pinguin);
//
//
// $(document).keydown(function(e) {
//     switch(e.which) {
//         case 38: // up
//         console.log("up");
//         pinguin.jump();
//         break;
//
//         default: return; // exit this handler for other keys
//     }
//     e.preventDefault(); // prevent the default action (scroll / move caret)
// });
