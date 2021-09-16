import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import {Carousel} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import { Jumbotron} from 'reactstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from './footer';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box
    id="home"
        fontSize={28}
        fontWeight="bold"
        className="text-center mt-5 text-black"
      >
        Welcome to the Home page
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="big.jpg"
      height={500}
      width={500}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="big.jpg"
      height={500}
      width={500}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="big.jpg"
      height={500}
      width={500}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Box>
<Box id="about"  
fontSize={28}
        fontWeight="bold"
        className="text-center mt-5 text-black">
  About us
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      </Box>


<Box id="hospitals" margin={20} fontSize={28}
        fontWeight="bold"
        className="text-center mt-5 text-black">
Hospitals Card
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="zebra.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
Hello          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
 Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
</Box>
<Box margin={20} id="facilities" fontSize={28}
        fontWeight="bold"
        className="text-center mt-5 text-black">
Facilities Card
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="zebra.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
Hello          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
 Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
</Box>

<Footer/>
    </Fragment>
  );
};
export default Home;
