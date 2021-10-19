function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw() {
    image(video,0,0,300,300);
   
    rect(20,5,260,15);
    rect(20,280,260,15);
    rect(5,5,15,260);
    rect(280,20,15,260);
    circle(15,15,40);
    circle(285,15,40);
    circle(15,285,40);
    circle(285,285,40);
}