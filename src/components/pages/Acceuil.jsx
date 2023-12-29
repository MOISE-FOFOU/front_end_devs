import React from 'react';
import Menu from '../../Menu';
import { NavLink } from 'react-router-dom';

const Acceuil=()=> {
    
    return (
        <>
        <div>
            <Menu/>
            <div style={{ display:'flex',justifyContent:'center', backgroundColor:'gray',marginTop:'60px'}}>
                    <div style={{flexDirection:'column',justifyContent:'center'}}>
                            <div style={{display:'flex',flexDirection:'row',marginTop:'20px'}}>
                                <p style={{fontSize:"64px",color:'yellow'}}>Genius</p><p style={{color:'red',fontSize:'64px',marginLeft:'5px'}}>Technologies</p>
                                <img style={{width:'160px',height:'auto'}}src="/images/ampoule.png" alt="ampoule genius" />
                            </div>
                            <div style={{display:'flex',flexDirection:'row',marginTop:'50px'}}> 
                                <p style={{fontSize:"64px",marginLeft:'165px'}}>Welcome...</p>
                            </div>
                                 <NavLink style={{display:'flex',marginBottom:'50px', textDecoration:'none',justifyContent:'center'}}to='/Propos'><button style={{ borderRadius: '10px',backgroundColor:'#652CB3',color:'white',fontSize:'24px',height:'40px'}}>SEE MORE</button></NavLink>

                            

                    </div>
            </div>
        </div>
        </>
    );
}

export default Acceuil;