import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  VStack,
  Avatar,
  Text
 
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      
      <Box textAlign="center">
        <Heading m={'5'}>Create an Account</Heading>
      </Box>
      <VStack spacing={'8'}><Heading>Gaming<span style={{color:'red'}}>HuB</span></Heading>
      <Avatar boxSize={'32'}></Avatar>
      </VStack>
      <Box my={8} textAlign="left">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" >
              Sign Up
            </Button>
          </Stack>
         <VStack ><Text m={'5'}>Already Signed up?  </Text>
          <Button type="submit" colorScheme="purple" w={'96'} >
            <Link to='/login'>Login Now</Link>
            </Button></VStack>
        </form>
      </Box>
    </Box>
  );
}

export default SignUp;
