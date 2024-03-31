import RegularPrice from './priceContainer/Regular-price'
import SpecialPrice from './priceContainer/Special-price'
import '../../../styles/price-container.css'

function PriceContainer({regularPrice, specialPrice}) {
    return (
        <div className="price-container">
            <SpecialPrice specialPrice={specialPrice}/>
            <RegularPrice regularPrice={regularPrice} />
        </div>
    )
}

export default PriceContainer