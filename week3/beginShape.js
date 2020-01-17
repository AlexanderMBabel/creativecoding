function setup(){
    createCanvas(500, 500)
    frameRate(10)

}
function draw() {
    background(255)
    fill(10,255,100)
    beginShape()
        for(var i=0; i<24;i++){
            vertex(i* random(50), random(height))
        }
    endShape(CLOSE)
}