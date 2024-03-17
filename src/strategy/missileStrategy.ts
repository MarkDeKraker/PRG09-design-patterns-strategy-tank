import { Missile } from "../projectiles/missile.js";
import { Tank } from "../tank.js";

export class MissileStrategy implements ITankShootStrategy{
    private tank;

    constructor(tank: Tank){
        this.tank = tank;
    }
    
    // fire() method available because it implements the ITankShootStrategy!
    fire(): void {
        this.tank.game.gameObjects.push(new Missile(this.tank))
    }
}