Nose_X = 0;
Nose_Y = 0;
Left_Wrist = 0;
Right_Wrist = 0;
Diffrence = 0; 

function setup()
{
    Video = createCapture(VIDEO);
    Video.size(550 , 500);
    Canvas = createCanvas(550 , 500);
    Canvas.position(560 , 120);
    PoseNet = ml5.poseNet(Video , ModelLoaded);
    PoseNet.on('pose' , GotPoses);
}

function ModelLoaded()
{
console.log("PoseNet is initialized");
}

function draw()
{
    background('#499F68');
    document.getElementById("Square_Sides").innerHTML = "Radius of the circle will be: " + Diffrence + "px";
    fill('#79A9D1');
    stroke('#1F405B');
    circle(Nose_X , Nose_Y , Diffrence)
}

function GotPoses(results)
{
if (results.length > 0) {
    console.log(results);
Nose_X = results[0].pose.nose.x;
Nose_Y = results[0].pose.nose.y;
console.log("Nose X = " + Nose_X + "Nose Y = " + Nose_Y);
Left_Wrist = results[0].pose.leftWrist.x;
Right_Wrist = results[0].pose.rightWrist.x;
console.log("Left Wrist X = " + Left_Wrist + "Right Wrist X = " + Right_Wrist);
Diffrence = floor(Left_Wrist - Right_Wrist);
}
}