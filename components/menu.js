import Link from "next/link";
import style from "../styles/menu.module.css"
export default function Menu(){
    return(
        <nav className={style.menu}>
            <div>
                <Link href="/">
                    <a className={style.link}>Inicio</a>
                </Link>
                <Link href="/store">
                    <a className={style.link}>Tienda</a>
                </Link>
            </div>
            <div>
                <a className={style.link} href="#">Carrito (0)</a>
            </div>
        </nav>
    )
}