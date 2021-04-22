import React , { useContext } from 'react';
import {
    grommet,
    Box,
    Card,
    Heading,
    CardBody,
    CardHeader,
    Grid,
    Grommet,
    Text,
    Image,
    Stack,
    ResponsiveContext,
  } from 'grommet';


  const theme = {
    global: {
      font: {
        family: `-apple-system,
           BlinkMacSystemFont, 
           "Segoe UI", 
           Roboto`,
      },
    },
    heading: { font: { family: 'Comic Sans MS' } },
    
  };
  
   

const Pokedex = ({pokedex}) => {
    
    const size = useContext(ResponsiveContext);

    return (
        <React.Fragment>
        <div className="pokedex">
            <Grommet theme={grommet}>
                <Grid className="GRIDI" columns={size !== 'small' ? 'small' : '100%'} gap="large">
                
                    {pokedex.slice(0, 25).map(pokemon => (
                    <Card width="small" key={pokemon.id}>
                    
                        <Stack anchor="bottom-left">
                            <CardBody height="small">
                            <Image
                                fit="fit"
                                src={pokemon.sprites.other.dream_world.front_default}
                                a11yTitle="scuba diving"
                            />
                            </CardBody>
                            <CardHeader
                                pad={{ horizontal: 'small', vertical: 'xxsmall' }}
                                background="#000000A0"
                                width="medium"
                                justify="start"
                            >
                            
                            <Box>
                                <Heading level="3" margin="none">
                                {pokemon.id} {pokemon.name}
                                </Heading>
                            </Box>
                            </CardHeader>
                        </Stack>
                    </Card>
                ))}
                </Grid>
            </Grommet>
        </div>
          
    </React.Fragment>
    )
}
export default Pokedex