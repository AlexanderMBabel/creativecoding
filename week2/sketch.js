function setup(){
    createCanvas(500, 500)
}

function draw(){
    const height = windowHeight/20
    if(mouseX < 200 && mouseY < 300){
        arc(mouseX, mouseY, 200, 10, 0, radians(230), PIE)
    }
    rect(100, 100, 40, height)
    rect(10,10,50,height +200)

}