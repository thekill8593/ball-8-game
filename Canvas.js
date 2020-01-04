class Canvas2D {
    constructor() {
        this.canvas = document.getElementById('screen');
        this.context = this.canvas.getContext('2d');
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawImage(image, position, origin, rotation = 0) {
        if (!position) {
            position = new Vector2();
        }

        if (!origin) {
            origin = new Vector2();
        }

        this.context.save();        
        this.context.translate(position.x, position.y);
        this.context.rotate(rotation);
        this.context.drawImage(image, -origin.x, -origin.y);
        this.context.restore();
    }

}

let canvas = new Canvas2D();