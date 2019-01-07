import React,{ Component } from 'react';

class Header extends Component{
    
    render(){
        const styling={
            topHeader:{
                background: 'rgba(200,162,200,1)',
                color: '#fff',
                fontSize: '10px',
                margin: 0,
                padding: 0,
                border: 0,
                outline: 0,
                verticalAlign: "baseline",
            },
           search:{
               display: 'flex',
               width: '90vw',
               justifyContent: 'space-between',
               marginLeft: '5vw',
               marginRight: '5vw',
               marginTop: 0,
               marginBottom: 0,
               border: 0,
               padding: 0,
               
           },
           menuStyle:{
                width: '90vw',
                fontSize: '10px',
                color: '#880085',
                marginLeft: '5vw',
                marginRight: '5vw',
                display: 'flex',
                justifyContent: 'space-between',
           }
        }

        const { topHeader, search, menuStyle } = styling;

        return(
            <div>
                <div style={topHeader}>
                    <p style={{marginTop: 0, marginLeft: '5vw'}}>Need Help with your booking? call 0808888288 or 014700000</p>
                </div>
                <div style={search}>
                    <h2 style={{color: 'rgba(200,162,200,1)'}}>SPAS.NG</h2>
                    <div>
                        <input placeholder="Search for a Sercive, Spa, or Location" className="search-box"/>
                    </div>
                </div>
                <div style={{background: '#f4f4f8'}}>
                    <div style={menuStyle} className="menubar">
                        <a href="/">HOME </a>
                        <a href="#">HAIR CARE </a>
                        <a href="#">MASSAGE </a>
                        <a href="#">SKIN CARE </a>
                        <a href="#">SALON </a>
                        <a href="#">BEAUTY SERVICES </a>
                        <a href="#">GYM & FITNESS </a>
                        <a href="#">MAKE UP </a>
                        <a href="#">MANICURE </a>
                        <a href="#">PEDICURE </a>
                        <a href="#">EXFOLIATION</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header