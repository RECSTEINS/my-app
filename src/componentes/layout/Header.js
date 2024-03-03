import React from 'react';
/*
function Header(){
    return (
        <header class="barra">
            <div class="contenedor">
                <h1>CRM - Administrador de Alumnos</h1>
            </div>
        </header>
    )
}
*/

function Header(){
    return(
        <header class="main">
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div class="search-bar search">
                    <label>
                        <input type="text" placeholder="Search here"/>
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </div>

                <div class="user">
                    <img src="img/usuario.png" alt=""/>
                </div>
            </div>
        </header>   
    )
}


export default Header;