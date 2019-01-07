import React,{ Component } from 'react';

class Footer extends Component{

    render(){
        const styling={
            containerStyle:{
                marginTop: '10vw'
            },
            headerStyle:{
                backgroundImage: "url('/images/email.jpg')",
                height: '60vh',
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
            inputstyle:{
                backgroundColor: '#fff',
                color: '#880085',
                height: '38px',
                borderRadius: '15px 0 0 15px',
                width: '400px',
                border: 0
            },
            buttonStyle:{
                width: '100px',
                height: '40px',
                backgroundColor: '#880085',
                color: '#fff',
                border: 0,
                borderRadius: '0 15px 15px 0'
            },
            textShadow:{
                textShadow: '1px 1px 2px #ccc'
            },
            footerStyle:{
                display: 'flex',
                fontSize:'10px',
                marginLeft: '5vw',
                color: '#8B8B8B'
            },
            footerDiv:{
                width: '20vw', margin: '10px'
            }
        }

        const { containerStyle, headerStyle, inputstyle,textShadow, booking, buttonStyle, footerStyle, footerDiv} = styling;
        return(
            <div style={containerStyle}>
                <div style={headerStyle}>
                    <div style={booking}>
                        <h1 style={textShadow}>Get the latst Spa deals first</h1>
                        <p style={textShadow}>we curate the best prices weekly and send them to our subscribers. Enter your email below and never miss out</p>
                        <div style={{display: 'flex'}}>
                            <input style={inputstyle} placeholder="Enter email address"/>
                            <button style={buttonStyle}>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div style={footerStyle}>
                    <div style={{width: '30vw', margin: '10px'}}>
                        <h2 style={{color: 'rgba(200,162,200,1)'}}>SPAS.NG</h2>
                        <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Cupiditate velit exercitationem mollitia error omnis quae 
                            aliquam deleniti, obcaecati, laudantium doloribus aut 
                            asperiores maxime sint laboriosam, fugiat cum nemo accusantium. Minima!
                        </p>
                        <p>2017&#169; Spas.ng. All rights reserved.</p>
                    </div>
                    <div style={footerDiv}>
                        <p><b>Quick Navigation</b></p>
                        <p>About Us</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                        <p>How it Works</p>
                        <p>About</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div style={footerDiv}>
                        <p><b>Other Links</b></p>
                        <p>Terms and Conditions</p>
                        <p>Return, Refund & D&C Policy</p>
                        <p>Login</p>
                        <p>Register</p>
                        <p>Blog</p>
                    </div>
                    <div style={footerDiv}>
                        <p><b>Social Media</b></p>
                        <p>Facebook</p>
                        <p>Twiter</p>
                        <p>Instagram</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;