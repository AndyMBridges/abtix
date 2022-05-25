import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketCreatedEvent } from '@abtix/common';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = queueGroupName; // Ensure we only send message to one service in the group / no duplicates

  async onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    const { id, title, price } = data;
    const ticket = Ticket.build({
      id,
      title,
      price
    })
    await ticket.save()

    msg.ack();
  }

}
