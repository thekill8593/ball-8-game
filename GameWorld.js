const DELTA = 1/100;

class GameWorld {

    constructor() {
        this.whiteBall = new Ball(new Vector2(413, 413));
        this.stick = new Stick(new Vector2(413, 413), this.whiteBall.shoot.bind(this.whiteBall));
    }

    update() {
        this.stick.update();
        this.whiteBall.update(DELTA);
    }

    draw() {
        canvas.drawImage(sprites.background, {x: 0, y: 0});
        this.stick.draw();
        this.whiteBall.draw();
    }
}

