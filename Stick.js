const STICK_ORIGIN = new Vector2(970, 11);
const STICK_SHOOT_ORIGIN = new Vector2(950, 11);

class Stick {
    constructor(position, onShoot) {
        this.position = position;        
        this.rotation = 0;
        this.origin = STICK_ORIGIN.copy();
        this.power = 0;
        this.onShoot = onShoot;
    }

    update () {

        if (mouse.left.down) {
            this.increasePower();
        } else if(this.power > 0) {
            this.shoot();
        }

        this.updateRotation();
    }

    draw() {
        canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
    }

    updateRotation() {
        let opposite = mouse.position.y - this.position.y;
        let adjacent = mouse.position.x - this.position.x;

        this.rotation = Math.atan2(opposite, adjacent);
    }

    increasePower() {
        this.power += 100;
        this.origin.x += 5;
    }

    shoot() {
        this.onShoot(this.power, this.rotation);
        this.power = 0;
        this.origin = STICK_SHOOT_ORIGIN.copy();
    }
    
}