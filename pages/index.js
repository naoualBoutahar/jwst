import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Typography, Button } from '@mui/material';
import bg from '../public/images/bg.jpg'
import { height } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';


const theme = createTheme({
  typography: {
    allVariants: {
      fontWeight: "bold",
      color: "white",
      textShadow: "1px 1px rgba(0, 0, 0, 0.5)"
    },
  },
});


export default function Home() {
  const router = useRouter();
  const storyTelling = (e) => {
    e.preventDefault();
    router.push('/story')
  }
  return (
    <ThemeProvider theme={theme}>

      <Box style={{ zIndex: -1, overflow: 'hidden', position: 'fixed', height: '100%', width: '100%' }}>
        <Image
          src={bg}
          layout="fill"
          objectFit="cover"
          quality={100}

        />

      </Box>
      <Box
        flexDirection="column"
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingTop={20}
      >
        <Typography variant="h1"    >JWST WORLD</Typography>
        <Typography variant="h2" style={{ color: "rgb(179, 37, 210)" }} marginBottom={6}> Discovering Space with James</Typography>
        <Button onClick={storyTelling} variant="contained" color="secondary" style={{ padding: 15, width: 150 }}>Start</Button>

      </Box>
    </ThemeProvider>
  )
}
