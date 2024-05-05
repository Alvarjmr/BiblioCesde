import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { Outlet, Link } from "react-router-dom";
import "./Menu.css";
function Menu() {
 

  return (
    


    <div className="root">

      <nav>  
            
      
        <header className="header">
          <div className="logo"></div>
        </header>
        <div className="fondo"></div>
        <body className='b1'>
        <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={100} height={100} />
      <Skeleton variant="rectangular" width={300} height={60} />
      <Skeleton variant="rounded" width={300} height={60} />
    </Stack>
        </body>
        <div className="aside"></div>

        <div className="navegacion">
          <ul>
            <li ><Link to="/" className="inicio">Inicio</Link></li>
            <li ><Link to="/infantil" className="infantil">Infantil</Link></li>
            <li ><Link to="/ficcion" className="ficcion">Ficcíon</Link></li>
            <li ><Link to="/ciencia" className="ciencia">Ciencia y Tecnologia</Link></li>
            <li ><Link to="/desarrollo" className="desarrollo">Desarrollo Personal</Link></li>
            <li ><Link to="/autores" className="autores">Autores</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
    
  );
}


export default Menu ;