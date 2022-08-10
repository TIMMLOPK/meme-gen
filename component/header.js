import { Grid, Text } from "@nextui-org/react";

const Headers = () => {
  return (
    <Grid.Container gap={2} justify="center" css={{ marginBottom: "8px" }}>
      <Grid>
        <Text
          h1
          css={{
            textGradient: "45deg, $blue400 20%, $pink600 80%",
          }}
          weight="bold"
        >
          MEME GENERATOR
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default Headers;
