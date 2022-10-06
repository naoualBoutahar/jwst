import React from 'react'
import { Typography, Box, Button, List, ListItem, TextField } from '@mui/material'
import Image from 'next/image'
import bg from '../../public/images/bg.jpg'
import gradient from '../../public/images/bg-gradient.jpg'
import astronaute from '../../public/images/astronaute.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';

export default function TypingEffect() {
    const [result,setResult] =React.useState(["primary","primary","primary","primary","primary","primary","primary","primary"]) 
    
    const [finalResult,setFinalResult] =React.useState("primary") 

    const words = [
        { word: 'Plural demostration', code: '1-2-7-4-3' },
        { word: 'In the sky(Plural)', code: '4-1-5-11-4' },
        { word: 'Natural satellite of earth', code: '13-7-7-15' },
        { word: 'The moon has an circular_____ around eart', code: '7-11 -17-12-1' },
        { word: 'Part of our body', code: '8-5-16-3' },
        { word: 'On my ___to discover space', code: '10-5-14' },
        { word: 'Profound (synonym)', code: '18-3-3-6' },
        { word: 'First name of the NASA\'s largest and most powerful space science telescope: demostration', code: '9-5-13-3-4' },
    ];
    const anwers=["those","stars","moon","orbit","face","way","deep","james"]
    
    function checkWord (event,index) {       
        let newArr = [...result]; // copying the old datas array
        if (anwers[index]===event.target.value.toLowerCase()) {
           console.log(" true")
           newArr[index] = "success";

           console.log("result:" +result)
        } else {
            console.log("false")
            newArr[index] = "error";

        }         
          setResult(newArr);
          console.log(result)

    };
    
    function checkSentence (event) {       
        
        if (event.target.value.toLowerCase()==="the shape of jwst primary mirror is honeycomb shaped") {
           console.log(" true")
           setFinalResult("success");

           
        } else {
            console.log("false")
            setFinalResult("error");

        }         
        

    };


    const router = useRouter();
    const next = (e) => {
        e.preventDefault();
        router.push('/informations/info2')
    }
    return (
        <>
            <Box style={{ zIndex: -1, overflow: 'hidden', position: 'fixed', height: '100%', width: '100%' }}>
                <Image
                        alt="bg"

                    src={gradient}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </Box>
            <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center" marginBottom={10}>
                                <Typography color="white" variant='h1'>The sentence</Typography>
                                <Box style={{backgroundColor:finalResult==="success"?"green":"White"}} width={900}>
                                <TextField placeholder='Formulate The sentence using Words and code below' variant="filled" color='secondary' fullWidth  onChange={(e)=>checkSentence(e)}  color={finalResult} focused/>
                                </Box><Typography  color="white"  marginLeft={3}>(1-2-3)  (4-2-5-6-3) (7-8)  (9-10-4-1)  (6-11-12-13-5-11-14) (13-12 11-11-7-11)  (12-4) (2-7-15-3-14-16-7-13-17)   (4-2-5-6-3-18)  </Typography>
                                
                </Box>
            <List >
                {words.map((word, index) => {
                    return (
                        <ListItem
                            key={index}>
                            <Box display="flex">
                                <Typography color="white"  width={400} marginRight={3}>{word.word}</Typography>
                               <Box style={{backgroundColor:result[index]==="success"?"green":"White"}}>
                                <TextField placeholder='answer' variant="filled" color='secondary' onChange={(e)=>checkWord(e,index)}  color={result[index]} focused/>
                                </Box>
                                <Typography  color="white"  marginLeft={3}>({word.code})</Typography>
                            </Box>
                        </ListItem>
                    );
                })}

            </List>

            <Box marginBottom={20} marginRight={5} display="flex" justifyContent="right">
                <Button onClick={next} startIcon={<PlayArrowIcon />} variant="contained" color="secondary" style={{ padding: 15, width: 150 }}>Next</Button>
            </Box>

        </>
    );
}