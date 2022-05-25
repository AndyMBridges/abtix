import { Message } from 'node-nats-streaming';
import { TicketCreatedEvent } from './ticket-created-event';
import { Subjects } from './subjects';
import { Listener } from './base-listener';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
    queueGroupName = 'payments-service';
  
    onMessage(data: TicketCreatedEvent['data'], msg: Message) {
      console.log('Event data ', data);
  
      msg.ack();
    }
  }