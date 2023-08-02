import { Image ,Text,Box} from '@chakra-ui/react'
import React from 'react'
import logo from '../images/Vector.png'
import tokenaddress from '../images/ic_baseline-token.png'
import pairlogo from '../images/fluent_pair-24-filled.png'
import facebooklogo from '../images/facebook (4) 1.png'
import linkdnlogo from '../images/linkedin (1) 1.png'
import twitterlogo from '../images/twitter (1) 1.png'
import './SideBar.modules.css'
const SideBar = ({ handleButtonClick }) => {
    const handleClick = (buttonName) => {
        handleButtonClick(buttonName);
      };
  return (
    <div className='sidebarcontainer' style={{height: "100%",width:"auto",paddingRight:"20px"}}>
        <Box >
            <Box height='30%'>
        <Box display="flex" gap='20px' mt='29px'>
        <Image className={"box"} src={logo}/>
        <Text className={"logoheading"}>NFTify</Text>
        </Box>
        <Box onClick={() => handleClick('Button1')} className="selectoption" display="flex" gap='20px' height= "65px"  pl='35px' pt='15px'>
            <Image width='24px' height="24px" src={tokenaddress}/>
        <Text className="tokentext">Token Address</Text>
        </Box>
        <Box onClick={() => handleClick('Button2')} className="selectoption" display="flex" gap='20px' height= "65px"  pl='35px' pt='15px'>
            <Image width='24px' height="24px" src={pairlogo}/>
        <Text className="tokentext">Pair Address</Text>
        </Box>
        </Box> 
        <Box display="flex" gap="20px" ml='34px' mt="120%"  pb="80px">
            <Image src={facebooklogo}/>
            <Image src={linkdnlogo}/>
            <Image src={twitterlogo}/>
        </Box>
        </Box>
    
    </div>
  )
}

export default SideBar
