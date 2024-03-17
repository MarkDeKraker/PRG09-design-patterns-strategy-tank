import { GodBulletStrategy } from "../strategy/godBulletStrategy.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class GodBulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-godbullet", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.switchStrategy(new GodBulletStrategy(target));
        }
    }
}
