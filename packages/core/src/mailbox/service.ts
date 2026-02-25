import { Context, Effect } from "effect";

import type { MailboxMessage, MailboxThread } from "./schema";

export class Mailbox extends Context.Tag("liaison/Mailbox")<
  Mailbox,
  {
    listMessagesByLabel: (label: string) => Effect.Effect<MailboxMessage[], never, never>;
    listThreadsByLabel: (label: string) => Effect.Effect<MailboxThread[], never, never>;
  }
>() {}
