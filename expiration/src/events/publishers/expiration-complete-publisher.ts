import { Subjects, Publisher, ExpirationCompleteEvent } from "@abtix/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}