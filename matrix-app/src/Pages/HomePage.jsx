import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import Display from './Display'
import backgroundlogo from '../images/Rectangle 9398.png'
import { Box, Image } from "@chakra-ui/react";

const HomePage = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };
  return (
    <div style={{display:"flex"}}>
      <Image  w="100%"  objectFit="cover" src={backgroundlogo} height="200vh"/>
      <SideBar handleButtonClick={handleButtonClick}/>
      <Display clickedButton={clickedButton}/>
      <Box position={"fixed"} bottom={"0"} bg={"red"} zIndex="2" h={"50px"} w={"100%"}></Box>
    </div>
  )
}

export default HomePage
