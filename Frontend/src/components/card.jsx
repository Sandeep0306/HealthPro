import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function lawyerCard({img,name,type}) {
const navigate = useNavigate();


  return (
    <div className='m-10'>
      <Card sx={{ maxWidth: 350,paddingBottom:2 }}>
      <CardMedia
        component="img"
        alt="Diseases"
        height="120"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" style={{marginLeft:"20px"}}><Link to={type} style={{color:'white'}}>Check </Link></Button>
      </CardActions>
    </Card>
        
    </div>
    
  );
}


