img = "";
status = "";
objects = [];
status = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function modelLoaded() {
    console.log("Model has been Intialized");
    status = true;
    
}

function gotResult(error,results) {
if(error) {
    console.log(error);
}
console.log(results);
objects = results;
}
function draw() {
    image(video, 0 ,0 , 380, 380);

    if(status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for( i = 0; i < objects.length; i= i+1){
            document.getElementById("status").innerHTML = "Status : Detecting Object";
           document.getElementById("number_objects").innerHTML = " Number of objects detected are =" + objects.length; 
            percent= floor(objects[i].confidence * 100);
            fill(r,g,b);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x , objects[i].y , objects[i].width, objects[i].height);
        
    }
    }
}   

