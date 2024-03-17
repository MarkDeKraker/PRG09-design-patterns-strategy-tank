import { Rocket } from "../projectiles/rocket.js";
export class RocketStrategy {
    constructor(tank) {
        this.tank = tank;
    }
    fire() {
        this.tank.game.gameObjects.push(new Rocket(this.tank));
    }
}
