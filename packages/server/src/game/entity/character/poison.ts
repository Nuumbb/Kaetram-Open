import { Modules } from '@kaetram/common/network';

export default class Poison {
    public name = Modules.PoisonInfo[this.type].name;
    public damage = Modules.PoisonInfo[this.type].damage;
    public duration = Modules.PoisonInfo[this.type].duration * 1000; // Convert to milliseconds
    public rate = Modules.PoisonInfo[this.type].rate * 1000; // Convert to milliseconds

    /**
     * Initializes an object of poison that can be stored in a character.
     * @param type The type of poison entity is suffering from.
     * @param start Epoch time of when the poison started.
     */

    public constructor(public type: Modules.PoisonTypes, public start = Date.now()) {}

    /**
     * Checks if the poison status has expired. A poison with the duration of
     * -1 will never expire until it is cured.
     * @returns If the time difference between when poison started and now is
     * greater than the duration of the poison.
     */

    public expired(): boolean {
        if (this.duration < 0) return false;

        return Date.now() - this.start >= this.duration;
    }
}