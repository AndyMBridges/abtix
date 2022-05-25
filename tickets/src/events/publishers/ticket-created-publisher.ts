import { Publisher, Subjects, TicketCreatedEvent } from '@abtix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}