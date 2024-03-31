import '../../../../styles/special-price.css'
import '../../../../styles/price-title.css'

function SpecialPrice({specialPrice}) {
    return (
        <div className="special">
            <p className="special-price">{specialPrice} ₽</p>
            <p className="price-title">С картой</p>
        </div>
    )
}

export default SpecialPrice