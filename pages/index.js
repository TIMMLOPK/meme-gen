import { Button, Link, Grid, Text, User } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import MemeGenerator from "../component/maker";
import dynamic from "next/dynamic";

const Msg = dynamic(() => import("../component/msg"), { ssr: false });

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <User
          src={session.user.image}
          name={session.user.name}
          description={session.user.email}
          bordered
          color="success"
          size="lg"
        />
        <br />
        <MemeGenerator />
        <Grid css={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={() => signOut()}
            css={{ margin: "auto" }}
            ghost
            color="error"
          >
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
      <Text as="b">Not signed in</Text> <br />
      <Msg />
      <Button onClick={() => signIn()} css={{ margin: "auto" }}>
        Sign in
      </Button>
    </>
  );
}
