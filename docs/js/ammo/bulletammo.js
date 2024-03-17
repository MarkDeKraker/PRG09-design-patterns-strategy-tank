import { BulletStrategy } from "../strategy/bulletStrategy.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class BulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-bullet", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.switchStrategy(new BulletStrategy(target));
        }
    }
}
