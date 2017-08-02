$(function() {
    console.log( "ready!" );

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

        }
    };
    console.log(pinguin);


    $(document).keydown(function(e) {
        switch(e.which) {
            case 38: // up
            console.log("up");
            pinguin.jump();
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

});
