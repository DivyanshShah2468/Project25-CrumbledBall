class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            density:1			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.image=loadImage("paper.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}