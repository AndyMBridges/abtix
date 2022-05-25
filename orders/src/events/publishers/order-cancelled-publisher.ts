import { Publisher, OrderCancelledEvent, Subjects } from '@abtix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCanceled;
}