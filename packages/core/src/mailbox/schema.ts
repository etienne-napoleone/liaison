import { Schema as S } from "effect";

export const MailboxMessageHeaderSchema = S.Struct({
  subject: S.String,
  sender: S.String,
  to: S.Array(S.String),
  cc: S.Array(S.String),
  inReplyTo: S.optional(S.String),
});

export type MailboxMessageHeader = typeof MailboxMessageHeaderSchema.Type;

export const MailboxMessageSchema = S.Struct({
  id: S.String,
  header: MailboxMessageHeaderSchema,
  labels: S.Array(S.String),
  body: S.String,
});

export type MailboxMessage = typeof MailboxMessageSchema.Type;

export const MailboxThreadSchema = S.Struct({
  id: S.String,
  messages: S.Array(MailboxMessageSchema),
});

export type MailboxThread = typeof MailboxThreadSchema.Type;
