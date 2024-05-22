import Image from 'next/image';
import logoImage from "@/assets/logo.png";

//Component
import MainHeaderBackground from './main-header-backgorund';
import NavLink from './nav-link';

//CSS
import style from './main-header.module.css';

export default function MainHeader () {
    return(
    <>
        <MainHeaderBackground/>
        <header className={style.header}>
        <NavLink href="/" cssClass={style.logo}>
            <Image src={logoImage} alt="Logo image" priority/>
            Next Level
        </NavLink>
        <nav className={style.nav}>
        <ul>
            <li><NavLink href='/meals'>Meals</NavLink></li>
            <li><NavLink href='/community'>Comunnity</NavLink></li>
        </ul>
        </nav>
        </header>
    </>
    )
}