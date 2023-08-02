import React, { useEffect, useState } from 'react'
import { Box,Input,Button ,p,Image, useMediaQuery} from "@chakra-ui/react";
import './Display.modules.css';
import axios from 'axios';
import ellipsecircle from '../images/Ellipse 87.png'
import icoutline from '../images/ic_outline-info.png'
import material from '../images/material-symbols_token-outline.png'
import dollar from '../images/pepicons-pop_dollar.png'

const Display = ({ clickedButton }) => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  const [pairdata,setpairdata]=useState([])
  const [data,setdata]=useState([])
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    axios.get('https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8')
    .then((res)=>{
      setdata(res.data.pairs.slice(0, 10))})
    .catch((err)=>console.log(err))

    axios.get('https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae')
    .then((res)=>{
      setpairdata(res.data.pairs.slice(0, 10))})
    .catch((err)=>console.log(err))
  },[])
  
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Making an Axios API call whenever the input value changes
    axios
      .get(`https://api.dexscreener.com/latest/dex/search?q=${searchTerm}`)
      .then((response) => {
        setdata(response.data.pairs.slice(0, 10));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <div className='displaycontainer' style={{position: 'absolute',marginLeft:"300px",width:"78%",height:"100%",overflow:"auto"}}>
      <Box display='grid' gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}  justifyItems={isSmallerScreen ? "start" : "center"}  w="100%" mb="55px">
        <Input color={"white"} value={searchTerm} onChange={handleChange} bg="linear-gradient(132deg, rgba(124, 15, 53, 0.20) 0%, rgba(88, 18, 102, 0.20) 100%)" mt="27px" borderRadius="20px" border= "1px solid #FFF" width={isSmallerScreen ? "auto" : "435px"} placeholder="Search"/>
        <Button color="white" mt="24px" mr="44px" width= "156px" borderRadius="20px" background="linear-gradient(131deg, #7C0F35 0%, #581266 100%)">Connect</Button>
      </Box>
      
      
      {(clickedButton==="Button2")?
      <div><h6>Pair Search Results</h6>{
        
        pairdata?.map((el)=><Box w={"100%"} display={"grid"} gap={"25x"} gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}>
          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Basic Info</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Pair created at</p>
            <p>{el.chainId}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Dex ID</p>
            <p>{el.dexId}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Pair Address</p>
            <p>{el.pairAddress.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="50"
          right="0"
          left="85%" 
          height="auto"
          src={icoutline}/>
          
          </Box>
          
          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Basic Token</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Name</p>
            <p>{el.baseToken.name}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Symbol</p>
            <p>{el.baseToken.symbol}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Address</p>
            <p>{el.baseToken.address.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="50"
          right="0"
          left="85%" 
          height="auto"
          src={material}/>
          
          </Box>

          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Quote Token</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Name</p>
            <p>{el.quoteToken.name}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Symbol</p>
            <p>{el.quoteToken.symbol}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Address</p>
            <p>{el.quoteToken.address.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="50"
          right="0"
          left="85%" 
          height="auto"
          src={material}/>
          
          </Box>

          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Price</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Price Native</p>
            <p>{el.priceNative}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Price USD</p>
            <p>{el.priceUsd}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="50"
          right="0"
          left="85%" 
          height="auto"
          src={dollar}/>
          
          </Box>

          
        </Box>)}
        </div>
      :
      <div style={{marginBottom:"80px"}}><h6>Token Search Results</h6>{
        
        data?.map((el)=><Box  w={"100%"} display={"grid"} gap={"25x"} gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}>
          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Basic Info</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Pair created at</p>
            <p>{el.chainId}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Dex ID</p>
            <p>{el.dexId}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Pair Address</p>
            <p>{el.pairAddress.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="50"
          right="0"
          left="85%" 
          height="auto"
          src={icoutline}/>
          
          </Box>
          
          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Basic Token</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Name</p>
            <p>{el.baseToken.name}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Symbol</p>
            <p>{el.baseToken.symbol}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Address</p>
            <p>{el.baseToken.address.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="50"
          right="0"
          left="85%" 
          height="auto"
          src={material}/>
          
          </Box>

          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Quote Token</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Name</p>
            <p>{el.quoteToken.name}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Symbol</p>
            <p>{el.quoteToken.symbol}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Address</p>
            <p>{el.quoteToken.address.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="50"
          right="0"
          left="85%" 
          height="auto"
          src={material}/>
          
          </Box>

          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Price</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Price Native</p>
            <p>{el.priceNative}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Price USD</p>
            <p>{el.priceUsd}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="50"
          right="0"
          left="85%" 
          height="auto"
          src={dollar}/>
          
          </Box>

          
        </Box>)}
        </div>
      }
      
    </div>
  )
}

export default Display
