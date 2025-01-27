import { Packets } from '@kaetram/common/network';

import Packet from '../packet';

import type { AnimationPacket } from '@kaetram/common/types/messages/outgoing';

export default class Animation extends Packet {
    public constructor(data: AnimationPacket) {
        super(Packets.Animation, undefined, data);
    }
}
