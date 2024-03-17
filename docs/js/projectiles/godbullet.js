import { Projectile } from "./projectile.js";
export class GodBullet extends Projectile {
    constructor(tank) {
        super("godbullet", tank);
    }
}
