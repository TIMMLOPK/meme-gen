import * as React from 'react';
import { Text, Grid } from '@nextui-org/react';


const Headers = () => {
  return (
    <Grid.Container gap={1} justify="center" css={{ paddingBottom:'50px' }}>

      <Text as='b'>Meme Generator</Text>

    </Grid.Container>
  );
};

export default Headers;