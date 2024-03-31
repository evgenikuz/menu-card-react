import Discount from './MenuPic/Discount'
import FavoriteButton from './MenuPic/FavoriteButton'
import '../../styles/menu-pic.css'

function MenuPic({src, alt, discount}) {
    return (
        <div className="menu-pic">
                <img src={src} alt={alt} />
                <Discount discount={discount}/>
                <FavoriteButton />
            </div>
    )
}

export default MenuPic