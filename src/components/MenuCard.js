import MenuDescription from "./MenuCard/MenuDescription"
import MenuPic from "./MenuCard/MenuPic"
import '../styles/menu-card.css'

function MenuCard({src, alt, name, regularPrice, specialPrice, discount}) {
    return (
        <div className="menu-card">
            <MenuPic src={src} alt={alt} discount={discount}/>
            <MenuDescription name={name} regularPrice={regularPrice} specialPrice={specialPrice}/>
        </div>
    )
}

export default MenuCard