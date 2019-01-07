import React,{ Component } from 'react';
//#c8a2c8 #fff0f5
class Body extends Component{
    
    render(){
        const styling={
            bodyStyle:{
                display: 'flex',
                flexDirection: 'column'
            },
            containerStyle:{
                width: '90vw',
                display: 'flex',
                margin: '5vw',
                height: '50vw',
                marginTop: '20vh'
            },
            firstinnerDiv:{
                width: '22.5vw',
                display: 'flex',
                flexDirection: 'column',
                marginRight: '3vw',
                justifyContent: 'space-between'
            },
            spa1:{
                backgroundImage: "url('/images/spa1.jpg')",
                width: '22.5vw',
                height: '22.5vw',
                color: '#fff',
                backgroundSize: 'cover',
                fontSize: '10px'
            },
            secondinnerDiv:{
                width: '50vw',
                height: '50vw',
                backgroundImage: "url('/images/spa2.jpg')",
                marginRight: '3vw',
                color: '#fff',
                backgroundSize: 'cover',
                fontSize: '10px',
            },
            thirdinnerDiv:{
                width: '22.5vw',
                display: 'flex',
                flexDirection: 'column',
                marginRight: '3vw',
                justifyContent: 'space-between',
            },
            spa3:{
                backgroundImage: "url('/images/spa3.jpg')",
                width: '22.5vw',
                height: '22.5vw',
                color: '#fff',
                backgroundSize: 'cover',
                fontSize: '10px'

            },
            spa4:{
                backgroundImage: "url('/images/spa4.jpg')",
                width: '22.5vw',
                height: '22.5vw',
                color: '#fff',
                backgroundSize: 'cover',
                fontSize: '10px'
            },
            buttonStyle:{
                backgroundColor: "#880085",
                color: '#fff',
                borderRadius: '5px',
                height: '30px',
                border: 0
            },
            subStyle:{marginTop: '40vw', marginLeft: '10px'},
            subStyle2:{marginTop: '15vw', marginLeft: '10px'}

        }

        const { containerStyle, firstinnerDiv, spa1, secondinnerDiv, thirdinnerDiv, spa3, spa4, buttonStyle,bodyStyle, subStyle,subStyle2}=styling
        return(
            <div style={bodyStyle}>
                <div style={containerStyle}>
                    <div style={firstinnerDiv}>
                        <div style={{paddingBottom: '10px'}}>
                            <h3 style={{color: '#880085'}}>Hair and Nails</h3>
                            <p style={{textAlign: 'justify', color: '#8B8B8B'}}>The best spa collections who offer the best hair and nail services in lagos. Some more descriptive text goes here.</p>
                            <button style={buttonStyle}>See more</button>
                        </div>
                        <div style={spa1}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                    </div>
                    <div style={secondinnerDiv}>
                        <div style={subStyle}>
                            <p>from N5,000</p>
                            <h3>George towns place</h3>
                            <p>Sabo, Yaba</p>
                        </div>
                    </div>
                    <div style={thirdinnerDiv}>
                        <div style={spa3}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                        <div style={spa4}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div style={containerStyle}>
                    <div style={thirdinnerDiv}>
                        <div style={spa3}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                        <div style={spa4}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                    </div>
                    <div style={secondinnerDiv}>
                        <div style={subStyle}>
                            <p>from N5,000</p>
                            <p>George towns place</p>
                            <p>Sabo, Yaba</p>
                        </div>
                    </div>
                    <div style={firstinnerDiv}>
                        <div style={{paddingBottom: '10px'}}>
                            <h3 style={{color: '#880085'}}>Relaxing Massage</h3>
                            <p style={{textAlign: 'justify', color: '#8B8B8B'}}>The best spa collections who offer the best hair and nail services in lagos. Some more descriptive text goes here.</p>
                            <button style={buttonStyle}>See more</button>
                        </div>
                        <div style={spa1}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={containerStyle}>
                    <div style={firstinnerDiv}>
                        <div style={{paddingBottom: '10px'}}>
                            <h3 style={{ color: '#880085'}}>Hair and Nails</h3>
                            <p style={{textAlign: 'justify', color: '#8B8B8B'}}>The best spa collections who offer the best hair and nail services in lagos. Some more descriptive text goes here.</p>
                            <button style={buttonStyle}>See more</button>
                        </div>
                        <div style={spa1}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                    </div>
                    <div style={secondinnerDiv}>
                        <div style={subStyle}>
                            <p>from N5,000</p>
                            <p>George towns place</p>
                            <p>Sabo, Yaba</p>
                        </div>
                    </div>
                    <div style={thirdinnerDiv}>
                        <div style={spa3}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                        <div style={spa4}>
                            <div style={subStyle2}>
                                <p>from N5,000</p>
                                <h3>George towns place</h3>
                                <p>Sabo, Yaba</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Body;