import * as React from 'react';
import { Text, Grid } from '@nextui-org/react';


const Headers = () => {
  return (
    <Grid.Container gap={1} justify="center" >
      <Grid xs={3} >
        <Text>Meme Maker</Text>
      </Grid>
    </Grid.Container>
  );
};

export default Headers;