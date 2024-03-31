import '../../../../styles/regular-price.css'
import '../../../../styles/price-title.css'

function RegularPrice({regularPrice}) {
    return (
        <div className="regular">
            <p className="regular-price">{regularPrice} ₽</p>
            <p className="price-title">Обычная</p>
        </div>
    )
}

export default RegularPrice