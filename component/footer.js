import { Grid, Dropdown, Text, useTheme, Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useMemo } from "react";
import { signOut, useSession } from "next-auth/react";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Footer() {
  const [selected, setSelected] = useState(new Set(["text"]));
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const { data: session } = useSession();
  useMemo(() => Array.from(selected).forEach(setTheme));
  const year = new Date().getFullYear();
  return (
    <Grid.Container
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Grid>
        <Text>© All rights reserved {year}</Text>
      </Grid>
      <Grid.Container
        gap={1}
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid>
          <Dropdown>
            <Dropdown.Button light>
              {isDark ? <MdDarkMode /> : <MdLightMode />}
            </Dropdown.Button>
            <Dropdown.Menu
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Dropdown.Item icon={<MdLightMode />} key="light">
                Light
              </Dropdown.Item>
              <Dropdown.Item icon={<MdDarkMode />} key="dark">
                Dark
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
        <Grid>
          <Button
            onClick={() => signOut()}
            light
            size="sm"
            icon={<RiLogoutCircleRLine />}
            css={{ display: `${session ? "flex" : "none"}` }}
          >
            Sign out
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
}
