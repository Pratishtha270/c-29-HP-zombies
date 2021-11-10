class Stone {
    constructor(x, y,w,h) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
      };
      this.body = Bodies.rectangle(x, y,w,h, options);
      World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        ellipse(0,0,50,50);
        translate(pos.x, pos.y);
        rotate(angle);
        pop();
}
}