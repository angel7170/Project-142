game_status = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("console");

	instializeInSetup(mario);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
	console.log("Model is Loaded!");
}

function draw() {
	if(game_status == "start")
	game()
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
  }
}

function startGame()
{
	game_status = "start";
	document.getElementById("status").innerHTML = "Game Is Loaded";
}






