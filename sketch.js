function setup(){
	createCanvas(800,600); // make an HTML canvas element width x height pixels
    	frameRate(1);
    	print(minute());// first case
}
 
function draw() {
	background(255,255,255);
	textSize(32);
	noStroke();
    
	fill(255,0,0);
    	text(hour(), 10, 30);
    	let x1 = map(hour(), 0, 24, 300, 600);
	ellipse(400, 300, x1, x1);// hour circle with r1 ranging from 300 to 600
    
    	fill(255,0,0,50);
    	ellipse(400, 300, 600, 600);//max range of hour circle
    
    	let op2 = map(minute(), 0, 60, 255, 220);
	fill(255,137,0,op2);// slightly more transparent as increasing
	text(minute(), 10, 60);
    	let x2 = map(minute(), 0, 60, 200, x1);
    	ellipse(400, 300, x2, x2);// minute circle with r2 ranging from 200 to radius of current hour circle
    
    	let op3 = map(second(), 0, 60, 255, 70);
	fill(255,235,157, op3);// more transparent as increasing
	text(second(), 10, 90);
    	let x3 = map(second(), 0, 60, 10, x2);
    	ellipse(400, 300, x3, x3); // second circle with r3 ranging from 10 to radius of current minute circle
  
    	if(second() == 0){
      		print(minute());//print every minute as increment
    	}
} 
