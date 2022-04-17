import { Button, Link, Grid, Text, User, Spacer } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import MemeGenerator from "../component/maker";
import dynamic from "next/dynamic";
import { RiLogoutCircleRLine } from "react-icons/ri"

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
            color="error"
            rounded
            ghost
            icon={<RiLogoutCircleRLine />}
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
      <Text b>Not signed in</Text>
      <Spacer />
      <Msg />
      <Button onClick={() => signIn()} css={{ margin: "auto", display: 'flex' }}>
        Sign in
      </Button>
    </>
  );
}
