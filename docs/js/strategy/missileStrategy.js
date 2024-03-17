import { Missile } from "../projectiles/missile.js";
export class MissileStrategy {
    constructor(tank) {
        this.tank = tank;
    }
    fire() {
        this.tank.game.gameObjects.push(new Missile(this.tank));
    }
}
