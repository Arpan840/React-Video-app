import { Button, Container, Heading,  Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form >
        <VStack spacing={'8'} >
            <Heading textTransform={'uppercase'} colorScheme={'red'} >
                Welcome to the zone
            </Heading>
            <Input type={'email'} placeholder={'Email'}  w={['full','96']} colorScheme={'purple'} required/>
            <Input type={'password'} required placeholder={'Enter Password'}  w={['full','96']}colorScheme={'purple'} marginTop={'10'}/>
            
            <Button type='submit' colorScheme={'purple'} mr={'8'} w={'96'}>Login</Button>
            <Button variant={'Link'}><Link to={'/forgetpassword'}>Forget Password</Link></Button>
        
        <Text textAlign={'end'}>New User? </Text>
        <Button mr={'10'}  w={['full','96']}colorScheme={'purple'} border={'solid purple 3px'}>
            <Link to={'/signup'}  >SignUp</Link>
        </Button>
        
        </VStack>
        
    </form>
   </Container>
   
  )
}

export default Login