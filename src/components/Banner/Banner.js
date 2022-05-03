import React from 'react';
import {Container, makeStyles, Typography} from "@material-ui/core";
import Carousel from "./carousel";


const useStyles = makeStyles( ()=>({
    banner:{

    },
    bannerContent:{
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around"
    },
    tagline:{
        display:"flex",
        height:"40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}));


const Banner = () => {
    const classes= useStyles();

    return(
    <div className={classes.banner} >
    <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
            <Typography variant={"h2"} style={{
                fontWeight:"bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
            }}>
            CoinME
            </Typography>
            <Typography variant={"subtitle2"} style={{
                color: "whitesmoke",
                textTransform:"capitalize",
                fontFamily:"Montserrat",
                wordSpacing: "2px",
                fontSize: "1.5rem",
            }}>
            Your all in one crpyto tracker website
            </Typography>
        </div>
        <Carousel/>


    </Container>
     </div>
    )
};

export default Banner;