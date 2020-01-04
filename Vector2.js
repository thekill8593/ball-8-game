class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    copy () {
        return new Vector2(this.x, this.y);
    }

    addTo(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    mult(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }
}