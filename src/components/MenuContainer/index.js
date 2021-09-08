import Product from "../Product";
import './style.css'

const MenuContainer = ({ productList, handleClick }) => {
    return (
        <div className="menuContainer">
            {productList.map((value) => {
                return <Product key={value.id} product={value} handleClick={handleClick} />
            })}
        </div>
    );
}

export default MenuContainer;