import React from 'react';

import { Anchor, Box, Header, Image, Nav } from 'grommet';
 

const items = [
    { label: 'NEW GAME', href: '/play' },
    { label: 'SCORE TABLE', href: '/highscore' },
    { label: 'POKEDEX', href: '/pokedex' },
    { label: 'EDUCATIONAL', href: '/addiction-warning' }
];

const OnHeaderNav = () => (
  <React.StrictMode>
    
    <Box background="#da0000" align="center" pad={{ "top": "20px" ,"bottom": "20px" }} >
    <Anchor href={'/'}>
      <Box height="small" width="xxlarge">
        <Image
          fit="contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
        />
        {/* <Image
          fit="contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
        />  */}
      </Box>
      </Anchor>
    </Box>
   
   
    <Header background="black"  pad="5px" justify="center" >
      
      <Nav  direction="row" gap="xlarge" pad={{"bottom": "10px" }}>
        {items.map(item => (
          <Anchor color="white"   href={item.href} label={item.label} key={item.label} />
        ))}
      </Nav>
      
    </Header>
    </React.StrictMode>
);
 
export default OnHeaderNav;