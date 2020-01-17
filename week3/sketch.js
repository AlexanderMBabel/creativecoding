function setup() {
createCanvas(windowWidth, windowHeight)
}
function draw() {
    background(200)
    
    beginShape(TRIANGLE_FAN)
    var x= 100
    var y=300
    while(x<width){
        while(y< height){
            vertex(x, y);
            vertex(x, 15);
            vertex(92, 50);
            vertex(57.5, y);
            vertex(22, 50);
            vertex(57.5, 15);
            y+=20
        }
        x+=20
    }
    
    // for(var i = 0;i< 100;i++){
    //     y= random (200, 400)
    //     ellipse(i*10, y, random(5,20))
    //     fill(random(255),random(255),random(255))
    // }
    endShape()

}