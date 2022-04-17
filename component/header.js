import * as React from "react";
import { Text, Grid } from "@nextui-org/react";

const Headers = () => {
  return (
    <Grid.Container
      gap={1}
      justify="center"
      css={{ marginBottom: "10px", marginTop: "20px" }}
    >
      <Text
        h1
        css={{
          textGradient: "45deg, $blue400 20%, $pink600 80%",
        }}
        weight="bold"
      >
        MEME GENERATOR
      </Text>
    </Grid.Container>
  );
};

export default Headers;
