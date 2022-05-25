import { Publisher, Subjects, TicketUpdatedEvent } from '@abtix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}