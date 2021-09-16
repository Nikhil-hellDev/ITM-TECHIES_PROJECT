import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography,Grid, Divider,Box,Avatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import createSpacing from '@material-ui/core/styles/createSpacing';

const useStyles = makeStyles((theme) => ({
    root: {
        background:'#5CDB95',
        color:'black',
        position:'relative',
        //  paddingBottom:'100px',
         marginBottom:'-100px',
         height:'100%'
    },
    subRoot:{
        // position:'absolute',
        top:'50%',
        // textAlign:'center',
        width:'80%',
        // background:'green',
        margin:'auto'
    },
    glassMorphism:{
        background:'#5CDB95',
        border:'none'
    },
    footerListHeading:{
        color:'blue',
        fontStyle:'bold',
        fontSize:'1.3rem !important',
        // textDecoration:'underline'
    },
    nestedList:{
        color:'blue',
        fontStyle:'bold',       
    }
  }));

export default function Footer (){
    const classes = useStyles()

    return(
        <div className={classes.root}>
            <div className={classes.subRoot}>

                    <Grid container spacing={3} style={{width:'100%'}}>
                <Grid item xs={12} style={{width:'100%',margin:'auto'}}>
                <CardGroup>

                    <Card className={classes.glassMorphism}>
                        
                        <Grid container style={{width:'100%',textAlign:'left'}}>
                            
                            <Grid item xs={10}>
                                
                                <List dense>
                                <Typography className={classes.footerListHeading}>Get to know us</Typography>
                                <ListItem button >
                                    
                                </ListItem>
                                <ListItem button>
                                    <Typography className={classes.nestedList}>About us</Typography>
                                </ListItem>
                                <ListItem button >
                                    <Typography className={classes.nestedList}>Hospitals</Typography>
                                </ListItem>
                                <ListItem button >
                                    <Typography className={classes.nestedList}>Facilities</Typography>
                                </ListItem>
                              
                                </List>
                                
                            </Grid>
                        </Grid>

                    </Card>


                   


                    <Card className={classes.glassMorphism}>

                    <Grid container style={{width:'100%',textAlign:'left'}}>
                            
                            <Grid item xs={10}>
                                
                                <List dense>
                                <Typography className={classes.footerListHeading}>Social Sites</Typography>
                                <ListItem button >
                                    
                                </ListItem>
                                <ListItem button>
                                    <Typography className={classes.nestedList}>Facebook</Typography>
                                </ListItem>
                                <ListItem button >
                                    <Typography className={classes.nestedList}>Twitter</Typography>
                                </ListItem>
                                <ListItem button >
                                    <Typography className={classes.nestedList}>Instagram</Typography>
                                </ListItem>
                                <ListItem button >
                                    <Typography className={classes.nestedList}>Pinterest</Typography>
                                </ListItem>
                                </List>
                                <List dense>
                                <Typography className={classes.footerListHeading}>Extras</Typography>
                                <ListItem button >
                                    <Typography className={classes.nestedList}>Gitlab</Typography>
                                </ListItem>
                                <ListItem button >
                                    <Typography className={classes.nestedList}>Github</Typography>
                                </ListItem>
                                </List>
                                
                            </Grid>
                        </Grid>
                        
                    </Card>


               


                </CardGroup>
                <br/>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{width:'100%',background:'#293659'}}>
            <Grid item xs={12} style={{textAlign:'center',display:'flex',color:'white',justifyContent:'center'}}>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />&nbsp;
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />&nbsp;
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />&nbsp;
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />&nbsp;
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />&nbsp;
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />&nbsp;

                </Grid>
                <Grid item xs={12} >
                    <Divider style={{background:'dark-grey'}}/>
                </Grid>
                <Grid item xs={12} style={{textAlign:'center',display:'flex',color:'white',justifyContent:'center'}}>
                     <Grid container wrap="nowrap" spacing={2}>
                       
                        <Grid item xs>
                        <Typography>Home &nbsp;&nbsp; <span>|</span>&nbsp;&nbsp; COntact &nbsp;&nbsp; <span>|</span>&nbsp;&nbsp; Lists &nbsp;&nbsp; <span>|</span>
                        </Typography>
                        </Grid>
                        </Grid>

                </Grid>
                </Grid>
           
            </div>
        </div>
    )
}