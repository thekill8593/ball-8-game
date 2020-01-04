const BALL_ORIGIN = new Vector2(25, 25);

class Ball {
    constructor(position) {
        this.position = position;
        this.velocity = new Vector2();
    }

    update(delta) {
        this.position.addTo(this.velocity.mult(delta));
        this.velocity = this.velocity.mult(0.98);
    }

    draw() {
        canvas.drawImage(sprites.whiteBall, this.position, BALL_ORIGIN);
    }

    shoot(power, rotation) {
        this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sin(rotation));
    }
}