FILTERS
//The effects  object exposes the filters that can be applied to the videos. The filters include:
vignette
exposure
blur
noise
fader*

Each filter has an “amount” property that controls the amount of each effect you can apply. Most of the filters accept values between 1 and 20 before they get really abstract-looking.
*fader also has a “color” property that accepts strings or hex codes as color values.

example code snippet: effect.vignette.amount = 5

2. STOP MOTION
//The stopMotion object takes a series of images as an input the populate a frame array.
stopmotion.interval → property that controls the speed of the animation in milliseconds

stopmotion.frames → array that holds the selected images

stopmotion.reverse() => method that reverses the frames 

example code snippet: stopmotion.interval = 500

3. PIXELATE
//The pixelate object exposes the pixels of the video, frame by frame.

pixelate.x & pixelate.y → draws the pixel grid. The lower the number, the more pixels drawn and therefore, the smoother the video appears

4. REPEAT
 // the repeat adds a looping effect to your video.
repeat.start(functionName, interval)

 example code snippet: stopmotion.interval = 500


repeat.stop() will end the looping

example code snippet: 

var i = 40;
effects.vignette.amount = i;
var dimmer = function() {
  effects.vignette.amount = i+1;
  i = i-1;
};

repeat.start(dimmer,50);
