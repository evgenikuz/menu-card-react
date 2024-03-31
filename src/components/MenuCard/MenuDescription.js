import PriceContainer from "./menuDescription/Price-container"
import Name from "./menuDescription/Name"
import Raiting from "./menuDescription/Raiting"
import ToCartButton from "./menuDescription/ToCartButton"
import '../../styles/menu-description.css'

function MenuDescription({name, regularPrice, specialPrice}) {
    return (
        <div className="menu-description">
            <PriceContainer regularPrice={regularPrice} specialPrice={specialPrice}/>
            <Name name={name} />
            <Raiting />
            <ToCartButton />
        </div>
    )
}

export default MenuDescription