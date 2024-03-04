import React from "react";
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <aside class="navigation">
            <ul>
                <li>
                    <a>
                        <span class="icon">
                            <ion-icon name="logo-apple"></ion-icon>
                        </span>
                        <span class="title">Restaurante</span>
                    </a>
                
                </li>
                <li>
                    <a>
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <Link to={'/proveedores'} class="title">Proveedores</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <Link to={'/productos'} class="title">Productos</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <Link to={'/proveedores'} class="title">Messages</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <Link to={'/proveedores'} class="title">Help</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <Link to={'/proveedores'} class="title">Settings</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <Link to={'/proveedores'} class="title">Password</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <Link to={'/proveedores'} class="title">Sign Out</Link>
                    </a>
                </li>


            </ul>
        </aside>
    )   
}

export default Navigation;