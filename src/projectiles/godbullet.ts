import { Tank }         from "../tank.js";
import { Projectile }   from "./projectile.js";


export class GodBullet extends Projectile {
    constructor(tank : Tank) {
        super("godbullet", tank)
    }
}