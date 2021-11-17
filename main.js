img = "";
status = "";
object = [];


function preload() {
    img = loadImage("dog_cat.jpg");
}


function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects"
}

function draw() {
    image(img, 0, 0, 500, 500);

    if(status != null) { 
    


    for(i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "Status:Detected Objects";
    percentage = floor(object[i].confidence * 100);
    fill("red");
    text(object[i].label + " " + percentage + "%",object[i].x,object[i].y);
   
    fill("red");
    stroke("red");
     noFill();
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
  
    }

    }
}



function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
object = results;
}

function water_bottle() {
    window.location.href = water_bottle.html;
}