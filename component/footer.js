import { Grid, Switch, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Footer() {
  let year = new Date().getFullYear();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (

    <Grid.Container css={{ display: 'block', left: '0', bottom: '0', width: '100%', textAlign: 'center', marginTop: '5px' }}>
      <Text>Timmy © All rights reserved {year}</Text>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        shadow
        iconOff={<MdLightMode />}
        iconOn={<MdDarkMode />}
      />
    </Grid.Container>

  );
}
