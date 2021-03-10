class Sand {
    constructor(x, y) {
        var options = {
            'density':1,
            'friction':4,
            'restitution':0.5
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);

        strokeWeight(2);
        stroke("white");
        fill("yellow");
        ellipse(0, 0, this.radius*2);
        pop();
    }
}