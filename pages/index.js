import { Button, User, Spacer } from "@nextui-org/react";
import { useSession, signIn } from "next-auth/react";
import MemeGenerator from "../component/generator";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <User
            src={session.user.image}
            name={session.user.name}
            description={session.user.email}
            bordered
            color="success"
            size="lg"
          />
        </div>
        <Spacer />
        <MemeGenerator />
      </>
    );
  }
  return (
    <>
      <Button
        onClick={() => signIn()}
        css={{ margin: "auto", display: "flex" }}
      >
        Sign in
      </Button>
    </>
  );
}
