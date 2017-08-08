
// CanvasRenderingContext2D.prototype.circle = function(x, y, r, fillStyle) {
//     this.beginPath();
//     this.arc(x, y, r, 0, 2 * Math.PI, false);
//     if (fillStyle) {
//         this.fillStyle = fillStyle;
//     }
//     this.fill();
// };

// function Planet(center, radius, orbitRadius, velocity, color) {
//     this.center = center;
//     this.x = center.x + orbitRadius;
//     this.y = center.y;
//     this.lastX = this.x;
//     this.lastY = this.y;
//     this.radius = radius;
//     this.orbitRadius = orbitRadius || 0;
//     this.velocity = velocity || 0;
//     this.theta = 0;
//     this.color = color || 'black';
// }

// Planet.prototype.update = function(delta) {
//     this.lastX = this.x;
//     this.lastY = this.y;
//     this.theta += this.velocity * delta;
//     this.x = this.center.x + Math.cos(this.theta) * this.orbitRadius;
//     this.y = this.center.y + Math.sin(this.theta) * this.orbitRadius;
// };

// Planet.prototype.draw = function(interpolationPercentage) {
//     // Interpolate with the last position to reduce stuttering.
//     var x = this.lastX + (this.x - this.lastX) * interpolationPercentage,
//         y = this.lastY + (this.y - this.lastY) * interpolationPercentage;
//     context.circle(x, y, this.radius, this.color);
// };

// function update(delta) {
//     for (var i = 0, l = planets.length; i < l; i++) {
//         planets[i].update(delta);
//     }
// }

// function draw(interpolationPercentage) {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     for (var i = 0, l = planets.length; i < l; i++) {
//         planets[i].draw(interpolationPercentage);
//     }
// }

// function end(fps, panic) {
//     fpsCounter.textContent = Math.round(fps) + ' FPS';
//     if (panic) {
//         // This pattern introduces non-deterministic behavior, but in this case
//         // it's better than the alternative (the application would look like it
//         // was running very quickly until the simulation caught up to real
//         // time). See the documentation for `MainLoop.setEnd()` for additional
//         // explanation.
//         var discardedTime = Math.round(MainLoop.resetFrameDelta());
//         console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
//     }
// }
//

// // Set up the planets.
// var smallerDimension = Math.min(window.innerWidth, window.innerHeight),
//     earthOrbitRadius = smallerDimension * 0.38,
//     moonOrbitRadius = smallerDimension * 0.10,
//     moonRadius = smallerDimension * 0.01,
//     sunRadius = earthOrbitRadius * 0.5,
//     earthRadius = earthOrbitRadius * 0.15,
//     sun = new Planet({x: canvas.width*0.5, y: canvas.height * 0.5}, sunRadius, 0, 0, '#FFD000'),
//     earth = new Planet(sun, earthRadius, earthOrbitRadius, 0.03 * Math.PI / 180, 'blue'),
//     moon = new Planet(earth, moonRadius, moonOrbitRadius, 0.1 * Math.PI / 180, 'gray'),
//     planets = [sun, earth, moon];
//
//

$(function () {

    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');
    var fpsCounter = $('#fpscounter');

    const sceneMaxH = 600,
        sceneMinH = 240,
        sceneMaxW = 800,
        sceneMinW = 320;

    var setValues = function (w, h) {
        canvas.width(w);
        canvas.height(h);
        // other game objects...
    }

    var recalculateSizes = function (w, h) {
        var sceneW,
            sceneH;

        w > sceneMinW && w < sceneMaxW ? sceneW = w : w > sceneMaxW ? sceneW = sceneMaxW : sceneW = sceneMinW ;
        h > sceneMinH && h < sceneMaxH ? sceneH = h : h > sceneMaxH ? sceneH = sceneMaxH : sceneH = sceneMinH ;
        setValues(sceneW, sceneH);

    }

    console.log("ready");
    // first things first, Set up the canvas max 800x600
    recalculateSizes(window.innerWidth, window.innerHeight);
    // second things second, track window size and adjust canvas
    $(window).resize(function(){
        recalculateSizes(window.innerWidth, window.innerHeight);
    });
    // now setup game objects

    // Start the main loop.
    MainLoop.setUpdate(update).setDraw(draw).setEnd(end).start();
    MainLoop.setMaxAllowedFPS( Infinity );







});
