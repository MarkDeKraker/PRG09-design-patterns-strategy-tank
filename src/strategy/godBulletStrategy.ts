import { GodBullet } from "../projectiles/godbullet.js";
import { Tank } from "../tank.js";

export class GodBulletStrategy implements ITankShootStrategy{
    private tank;

    constructor(tank: Tank){
        this.tank = tank;
    }

    // fire() method available because it implements the ITankShootStrategy!
    fire(): void {
        this.tank.game.gameObjects.push(new GodBullet(this.tank))
    }
}