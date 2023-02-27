import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Uplode = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={'16'} >
        <VStack color={'purple.600'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'100'}></AiOutlineCloudUpload>
            <form>
               <HStack marginTop={'10'}>
               <Input type={'file'} cursor={'pointer'} border={'none'} marginTop={'3'} ></Input>
                <Button type='submit' colorScheme={'purple'} >Uplode</Button>
               </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Uplode