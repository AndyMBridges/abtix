import { Subjects, Publisher, PaymentCreatedEvent } from "@abtix/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}