import { IndeterminateCheckBoxRounded } from '@mui/icons-material';
import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Leaf = ({ to, label }, idx) => {
    return (
        <Link className='my-auto nav-link' key={`leaf-${idx}`} to={to} >{label}</Link>
    )
}


const Branch = ({ label, children }, idx) => {
    return (
        <NavDropdown title={label} id={`basic-nav-dropdown-${idx}`} key={`basic-nav-dropdown-${idx}`} className={children.length > 5 && 'cutsom-nav-item'}>
            {
                children.map((x, index) =>
                    <NavDropdown.Item className='dropdown-link-item' key={index}>
                        <Link to={x.to} className='dropdown-link-item'>{x.label}</Link>
                    </NavDropdown.Item>
                )
            }
        </NavDropdown >
    )
}

export const NavBarList = ({ nodes }) => {
    return (
        <div className="flex justify-center">
            {nodes.map(x =>
                x.children && x.children.length
                    ?
                    <Branch label={x.label} children={x.children} /> :
                    <Leaf label={x.label} to={x.to} />
            )}
        </div>
    )
}
