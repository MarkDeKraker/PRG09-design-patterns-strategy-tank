import { Bullet } from "../projectiles/bullet.js";
import { Tank } from "../tank.js";

export class BulletStrategy implements ITankShootStrategy{
    private tank;

    constructor(tank: Tank){
        this.tank = tank;
    }

    fire(): void {
        this.tank.game.gameObjects.push(new Bullet(this.tank))
    }
}