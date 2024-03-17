import { GodBullet } from "../projectiles/godbullet.js";
export class GodBulletStrategy {
    constructor(tank) {
        this.tank = tank;
    }
    fire() {
        this.tank.game.gameObjects.push(new GodBullet(this.tank));
    }
}
