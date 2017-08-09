// $(function () {
//
//     var scene = $('.scene');
//     // var context = canvas[0].getContext('2d');
//
//     const sceneMaxH = 600,
//         sceneMinH = 240,
//         sceneMaxW = 800,
//         sceneMinW = 320;
//
//     var setValues = function (w, h) {
//         scene.width(w);
//         scene.height(h);
//         console.log("set w and h");
//         // other game objects...
//     }
//
//     var recalculateSizes = function (w, h) {
//         var sceneW,
//             sceneH;
//
//         w > sceneMinW && w < sceneMaxW ? sceneW = w : w > sceneMaxW ? sceneW = sceneMaxW : sceneW = sceneMinW ;
//         h > sceneMinH && h < sceneMaxH ? sceneH = h : h > sceneMaxH ? sceneH = sceneMaxH : sceneH = sceneMinH ;
//         setValues(sceneW, sceneH);
//
//     }
//
//     console.log("ready");
//     // first things first, Set up the canvas max 800x600
//     recalculateSizes(window.innerWidth, window.innerHeight);
//     // second things second, track window size and adjust canvas
//     $(window).resize(function(){
//         recalculateSizes(window.innerWidth, window.innerHeight);
//     });
//     // now setup game objects
//
//     // var smallerDimension = Math.min(context.canvas.width, context.canvas.height);
//     // var size = smallerDimension / 2;
//     // var myImage = new Image(size * 0.3, size*0.4);
//     // var center = {x : context.canvas.width/2, y : context.canvas.height/2};
//     // var koala = new Character(center, myImage, size);
//     // myImage.src = '../images/koala.png';
//
//
//
//     // koala.toString();
//     // koala.draw();
//
//
// });
