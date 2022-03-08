import { Button, Link, Grid } from "@nextui-org/react"
import { useSession, signIn, signOut } from "next-auth/react"
import MemeGenerator from "../component/maker"


export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Sign in as {session.user.email}<br />
        <MemeGenerator />
        <Grid css={{ display: 'flex', alignItems: 'center', }}>
          <Button onClick={() => signOut()} >Sign out</Button>
        </Grid>
        <Link href="/maker" target='_blank' > Editor </Link>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  )
}