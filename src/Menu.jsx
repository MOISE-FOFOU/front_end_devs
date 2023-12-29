import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu=()=> {
    const style = {
        margin: '20px',
        height: '20px',
        fontSize:'14px',
        listStyleType: 'none',
    };

    const logoStyle = {
        width: '150px',
        height: 'auto',
        marginTop: '-20px',
    };
    const activelinkstyle={backgroundColor:'#652CB3',color:'white'};
const getactiveLink=(isActive)=>{
    return isActive?{...style,...activelinkstyle}:style;
}
    return (
        <div>
            <nav style={{ height: '150px', display: 'flex', justifyContent: 'flex-end' }}>
                <NavLink to='/' style={{ marginLeft: '20px' }}>
                    <img src="images/logo.jpeg" alt="le logo" style={logoStyle} />
                </NavLink>

                <ul style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }}>
                    <NavLink to='/' style={(props)=>getactiveLink(props.isActive)}>
                        <li>ACCEUIL</li>
                    </NavLink>
                    <NavLink to='/Propos' style={(props)=>getactiveLink(props.isActive)}>
                        <li >A PROPOS</li>
                    </NavLink>
                    <NavLink to='/Contact' style={(props)=>getactiveLink(props.isActive)}>
                        <li >CONTACT</li>
                    </NavLink>
                    <NavLink to='/Service' style={(props)=>getactiveLink(props.isActive)}>
                        <li >SERVICES</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
