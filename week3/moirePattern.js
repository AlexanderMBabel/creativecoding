let theta = 0.0
const ellipseWidthMultiplier = 10
const ellipseHeightMultiplier = 20
const  rotationSpeed = 0.001;

function setup(){
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)
    frameRate(60)
}
function draw() {
    background(255)
    noFill()
    //stationary ellipse
    
    translate(width/2,height/2)
    push()
    for(var i =0; i< 25; i++){
        rect(0,0,i*ellipseWidthMultiplier, i*ellipseHeightMultiplier)
    }
    pop()
    //rotating ellipse 
    push()
    rotate(theta)
    for(var i=0;i<25;i++){
        rect(0,0,i*ellipseWidthMultiplier, i*ellipseHeightMultiplier)
        theta += rotationSpeed
        strokeWeight(random(1,2))

    }
    pop()
    
}