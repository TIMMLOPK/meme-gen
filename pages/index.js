import { Button, Link, Grid } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import MemeGenerator from "../component/maker";
import dynamic from "next/dynamic";

const Msg = dynamic(() => import("../component/msg"), { ssr: false });

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Sign in as {session.user.email}
        <br />
        <MemeGenerator />
        <Grid css={{ display: "flex", alignItems: "center" }}>
          <Button onClick={() => signOut()} css={{ margin: "auto" }}>
            Sign out
          </Button>
        </Grid>
        <Link href="/maker" target="_blank" block>
          {" "}
          Editor{" "}
        </Link>
      </>
    );
  }
  return (
    <>
      <b>Not signed in</b> <br />
      <Msg />
      <Button onClick={() => signIn()} css={{ margin: "auto" }}>
        Sign in
      </Button>
    </>
  );
}
