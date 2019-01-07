import React,{ Component } from 'react';

class Carousel extends Component{

    render(){
        const styling={
            headerStyle:{
                backgroundImage: "url('/images/header.jpg')",
                height: '80vh',
                color: '#fff',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover'
            },
            booking:{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20vw',
                marginBottom: '10vw'
            },
            divStyle:{
                display: 'flex',
                color: '#000',
                height: '200px',
                boxShadow: '0 1px 2px -2px gray'
            },
            divPara:{
                backgroundColor: '#fff',
                width: '150px',
                height: '150px',
                color: '#8B8B8B',
                borderRight: '1px solid #e6e6ea',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            divPara1:{
                backgroundColor: '#fff',
                width: '150px',
                height: '150px',
                color: '#8B8B8B',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            buttonstyle:{
                backgroundColor: '#fff',
                color: '#880085',
                height: '40px',
                border: 0,
                borderRadius: '20px',
                width: '200px'
            },
            textShadow:{
                textShadow: '1px 1px 2px #ccc'
            }
        }

        const {headerStyle, divStyle, buttonstyle,textShadow,divPara, booking, divPara1} = styling;
        return(
            <div>
                <div style={headerStyle}>
                    <div style={booking}>
                        <h1 style={textShadow}>Book Spa sessions online across Nigeria</h1>
                        <p style={textShadow}>Search through 5,067 of the best beauty services and salons in Nigeria</p>
                        <button style={buttonstyle}>Explore Popular Spas</button>
                    </div>
                    <div style={divStyle}>
                        <div style={divPara}>
                            <img src="/images/matt.png" style={{width: '50px'}} />
                            <p>MATT EFFECT</p>
                        </div>
                        <div style={divPara}>
                            <img src="/images/sauna.png" style={{width: '50px'}} />
                            <p >SAUNA READY</p>
                        </div>
                        <div style={divPara}>
                            <img src="/images/relax.png" style={{width: '50px'}} />
                            <p >RELAX READY</p>
                        </div>
                        <div style={divPara1}>
                            <img src="/images/mask.png" style={{width: '50px'}} />
                            <p >NATURAL MASK</p>
                        </div>    
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Carousel;