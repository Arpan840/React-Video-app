import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.webp';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.jpg';
import img6 from '../Assets/7.jpg';
const headingoptions={
  pos:'absolute',
  left:'50%',
  top:'10%',
  transform:'translate(-50%,-50%)',
  texttransform:'uppercase',
  padding:'4',
  size:'xl',
  fontFamily:'Cursiv'
  


}
const bordercurv={
    borderRadius:'400px'
}
const Home = () => {
  
  return (
    <Box >
 <MyCarousel ></MyCarousel>
 <Container maxWidth={'container.xl'} minH={'100vh'} p='16'>
    <Heading textTransform={'uppercase'} w={'-webkit-fit-content'} borderBottom={'2px solid'} px={'2'} m={'auto'} >services</Heading>
    <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']} >
     <Image src={img6} filter={'hue-rotate(-130deg)'} borderRadius={'full'} h={['40','400']}></Image>
     <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>The power of strength and the idea of the lone wolf can be closely related concepts. The lone wolf is a symbol of independence and self-reliance, of someone who is strong enough to navigate the world on their own. It is a romanticized idea, popular in literature and media, of a character who doesn't need anyone else to succeed. Similarly, strength is often associated with the ability to overcome challenges and adversity.   </Text>
     </Stack>
 </Container>
    </Box>
  )
}
const MyCarousel=()=>
(
<Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showArrows={false} showThumbs={false} >
    <Box w={'full'} h={['40vh','100vh']}>
        <Image src={img1} {...bordercurv}></Image>
        <Heading bgColor={'blackAlpha'} color={'white'} {...headingoptions}>Watch The Future</Heading>
    </Box>
    <Box w={'full'} h={['40vh','100vh']}>
        <Image src={img2} {...bordercurv}></Image>
        <Heading bgColor={'blackAlpha'} color={'white'} {...headingoptions}>Darkness Gives Thrill</Heading>
    </Box>
    <Box w={'full'} h={['40vh','100vh']}>
        <Image src={img3} {...bordercurv}></Image>
        <Heading bgColor={'blackAlpha'} color={'white'} {...headingoptions}>More You Suffer More you will get stronger</Heading>
    </Box>
    <Box w={'full'} h={['40vh','100vh']}>
        <Image src={img4} {...bordercurv}></Image>
        <Heading bgColor={'blackAlpha'} color={'black'} {...headingoptions}>Silence is dangerious</Heading>
    </Box>
    <Box w={'full'} h={['40vh','100vh']}>
        <Image src={img5} {...bordercurv}></Image>
        <Heading bgColor={'blackAlpha'} color={'white'} {...headingoptions}>Kill your demons</Heading>
    </Box>
</Carousel>
)
    
      

    


export default Home