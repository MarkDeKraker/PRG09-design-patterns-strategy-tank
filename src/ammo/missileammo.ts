import { GameObject }       from "../gameobject.js";
import { MissileStrategy } from "../strategy/missileStrategy.js";
import { Tank } from "../tank.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";

export class MissileAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-missile", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank){
            target.switchStrategy(new MissileStrategy(target))
        }
    }
}