import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react';
import  { useNavigate } from 'react-router-dom';
// import agri from "./Image/agri.jpeg"
const Login = () => {
let[user,setUser]=useState();
let [pass,setPass]=useState();
let navigate=useNavigate()
let toast=useToast()

const isError =user === "";

const hardUser="Radha";
const hardPass="Radha@797";


  let handleSubmit=(e)=>{
e.preventDefault();
if(hardUser === user && hardPass === pass){
  console.log("hello");
 
    toast({
      title:"login",
      description:"yor are logged in successfully",
      status:"success",
      duration:5000,
      isClosable:true
    })
  navigate("/portfolio")
}else{
  toast({
    title:"login",
    description:"login failed",
    status:"error",
    duration:5000,
    isClosable:true
  })
  
}

  }
  return (
    <Flex   align="center" justify="center"  h="97vh" bgGradient={['linear(to-tr, teal.600, yellow.400)','linear(to-t, blue.400, red.500)', 'linear(to-b, orange.600, purple.800)', ]} backdropFilter="blur(20px)" >
      <FormControl isRequired  align="center"  justify="center" isInvalid={isError}  >
      <Stack w="35vw" >
      <FormLabel>Email</FormLabel>
      <Input placeholder='Enter your email' name="email" type='text' onChange={(e)=>setUser(e.target.value)} required />{!isError ? (<FormHelperText>enter your email</FormHelperText>) : (<FormErrorMessage>Email is required</FormErrorMessage>)}
      <FormLabel>Password</FormLabel>
      <Input placeholder='Enter your Password' type="password" name="password"  onChange={(e)=>setPass(e.target.value)} />
      
      <Button type="submit" onClick={handleSubmit} colorScheme="blue" variant="outline"> submit</Button>
      </Stack>
    </FormControl>
    </Flex>
  )
}

export default Login
