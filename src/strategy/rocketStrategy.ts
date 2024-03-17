import { Rocket } from "../projectiles/rocket.js";
import { Tank } from "../tank.js";

export class RocketStrategy implements ITankShootStrategy{
    private tank;

    constructor(tank: Tank){
        this.tank = tank;
    }
    
    // fire() method available because it implements the ITankShootStrategy!
    fire(): void {
        this.tank.game.gameObjects.push(new Rocket(this.tank))
    }
}