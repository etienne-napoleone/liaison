import { Effect, Layer } from "effect";

import { Mailbox } from "./service";

export const MailboxGmail = Layer.effect(
  Mailbox,
  Effect.gen(function* () {
    return {
      listMessagesByLabel: (label: string) => {
        return Effect.succeed([]);
      },

      listThreadsByLabel: (label: string) => {
        return Effect.succeed([]);
      },
    };
  }),
);
