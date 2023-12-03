import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, IconButton, Image, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from  "@chakra-ui/react"
import { axiosInstance } from './helper/AxiosInstance';
import bindhu from "./Image/bindhu.jpeg"
import {CiPhone, CiLinkedin,CiHome } from "react-icons/ci"
import { MdOutlineMail} from "react-icons/md"
import { SiGithub} from "react-icons/si"

const Portfolio = () => {

let [state,setState]=useState([]);

  useEffect(()=>{
  async function data(){
 let {data}=await axiosInstance.get("/");
 console.log(data);
 console.log(data.Contact);
 setState(data)
 }
 data();
 
  },[])
  return (
    <Box mt="30px" ml="30px" mr="30px" >
    <Box  m="2" border="2px solid" borderColor="green"  fontSize="25" fontWeight="bold" bgGradient="linear(to-r,#7928CA,#FF0080)">  <marquee behavior="alternate" direction="left"  ><i>Welcome</i></marquee></Box>
     <Box m="2" align="end" > <Button  variant="outline" colorScheme='blue' >Logout</Button></Box>
     <Box >{state.map((e)=>{
      return(
        <Box>
              <Flex  justify="space-between">
                  <Box>
                    <Text color="purple" fontWeight="Bold" fontSize="35px" >{e.name}</Text>
                    <IconButton icon={<CiHome/>} isRound></IconButton>{e.Contact.address}
                  </Box>
                  <Box>
                    <Image src={bindhu} w="24" h="24" borderRadius="full"></Image>
                  </Box>
              </Flex> 
              <Box  m="2" >
                    <h5>Description:</h5>
                    <Text ml="8">
                      {e.aboutMe.description}
                    </Text>
               </Box>
               <Box m="2" >
               <h4>Project  : <Link href={e.aboutMe.href} color="blue">{e.aboutMe.Project}</Link> </h4>
               <Text ml="8">{e.aboutMe.ProjectDes}</Text>
               </Box>
               <Tabs  >
                 <TabList>
                  <Tab>Skill</Tab>
                  <Tab>Hobbies</Tab>
                  <Tab>Languages </Tab>
                 </TabList>
                 <TabPanels>
                  <TabPanel>
                    <p>Core Java, SQL, React.js, Web Technology</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Gardening, Listening Music, Agriculture</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Kannada, English, Telugu</p>
                  </TabPanel>
                 </TabPanels>
               </Tabs>
              <Box m="2"  bg="navy">
                    <h5>Contact me:</h5>
                    <Flex justify="space-around">
                    <Link ><CiPhone/>{e.Contact.number}</Link>
                    <Link   href={e.Contact.Github}> <SiGithub />Github</Link> 
                    <Link href={e.Contact.linkedin}><CiLinkedin />Linkedin</Link>
                    <Link href={`mailto:${e.Contact.email}`}><MdOutlineMail /> email</Link>
                    </Flex>
              </Box>
              
       </Box>
  )
  })}
      
     </Box>
    </Box>
  )
}

export default Portfolio