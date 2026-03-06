import { auth } from "@/lib/auth";

export type AuthenticatedState = {
  Variables: {
    user: typeof auth.$Infer.Session.user;
    session: typeof auth.$Infer.Session.session;
  };
};
