import { RocketStrategy } from "../strategy/rocketStrategy.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class RocketAmmo extends Ammunition {
    constructor(position) {
        super("ammo-rocket", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.switchStrategy(new RocketStrategy(target));
        }
    }
}
