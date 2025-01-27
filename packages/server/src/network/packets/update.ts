import { Packets } from '@kaetram/common/network';

import Packet from '../packet';

import type { EntityDisplayInfo } from '@kaetram/common/types/entity';

export default class Update extends Packet {
    public constructor(data?: EntityDisplayInfo[]) {
        super(Packets.Update, undefined, data);
    }
}
