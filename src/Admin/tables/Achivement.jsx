// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})



const Achivement = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
  
       <Card sx={{ position: 'relative' }}>
      <CardContent>
      <Typography variant='h4' sx={{ letterSpacing: '0.35px',  color: 'primary.main'  }}>
          Shop Fashion
        </Typography>
        <Typography variant='body2' >Congratulations🎉</Typography>
        
        <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
          360.9k
        </Typography>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='https://pngimg.com/uploads/award/award_PNG62.png'  style={{ height: '130px', width: '100px' }} />
      </CardContent>
    </Card>
   
   
  )
}

export default Achivement;
