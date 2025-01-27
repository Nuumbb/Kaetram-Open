import { Modules } from '@kaetram/common/network';

import Equipment from '../equipment';

import type { Enchantments } from '@kaetram/common/types/item';
import type Item from '../../../../objects/item';

export default class Ring extends Equipment {
    public constructor(key = '', count = -1, enchantments: Enchantments = {}) {
        super(Modules.Equipment.Ring, key, count, enchantments);
    }

    /**
     * Override function that adds the equipment's power level.
     */

    public override update(item: Item): void {
        super.update(item);
    }
}
