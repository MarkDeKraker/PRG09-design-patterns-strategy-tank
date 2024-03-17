import { Bullet } from "../projectiles/bullet.js";
export class BulletStrategy {
    constructor(tank) {
        this.tank = tank;
    }
    fire() {
        this.tank.game.gameObjects.push(new Bullet(this.tank));
    }
}
