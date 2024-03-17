import { GameObject }       from "../gameobject.js";
import { GodBulletStrategy } from "../strategy/godBulletStrategy.js";
import { Tank } from "../tank.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";

export class GodBulletAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-godbullet", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank){
            target.switchStrategy(new GodBulletStrategy(target))
        }
    }
}