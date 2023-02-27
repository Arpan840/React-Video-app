import { Box, Button, Heading, HStack, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
   <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
    <Stack direction={['column','row']}>
      <VStack alignItems={'stretch'} w={'full'} px={'4'}>
        <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
          SignUp For Thrill  
        </Heading>
        <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'}/>
            <Button padding={'0 '} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend size={'20'}/>
            </Button>
        </HStack>
        </VStack> 
        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
            <Heading  textTransform={'uppercase'} textAlign={'center'}>Gaming<span style={{color:'red'}}>HuB </span></Heading>
            <Text>All rights received</Text>
           
        </VStack>
        <VStack w={'full'} >
            <Heading size={'md'} textTransform={'capitalize'}>Social Media</Heading>
            <Button variant={'link'} colorScheme={'white'} >
                <a href='https://www.linkedin.com/in/arpan-das-51417a205/'  ><AiFillLinkedin/></a>
            </Button>
            <Button variant={'link'} colorScheme={'white'} >
                <a href='https://github.com/Arpan840'  ><AiFillGithub/></a>
            </Button>
        </VStack>
        </Stack></Box>
        
  
  )
}

export default Footer