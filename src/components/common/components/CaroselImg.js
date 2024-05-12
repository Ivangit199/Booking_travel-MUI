import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    caroselImg: {
        borderRadius: '20px !important',
        marginLeft: '10px !important',
        fontSize: '20px !important',
        color: 'black !important',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'rgb(2,148,233)', // Change color on hover
        },
    },
});

const CaroselImg = ({ children }) => {
    const classes = useStyles();

    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block" src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_1_.png" alt="First slide" style={{ width: '800px', height: 'auto', borderRadius: 20 }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block" src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_1_.png" alt="Second slide" style={{ width: '800px', height: 'auto', borderRadius: 20 }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block" src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_1_.png" alt="Third slide" style={{ width: '800px', height: 'auto', borderRadius: 20 }} />
                    </div>
                </div>


                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )

}

export default CaroselImg
