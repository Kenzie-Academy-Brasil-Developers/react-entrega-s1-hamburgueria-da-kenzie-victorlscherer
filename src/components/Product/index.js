import './style.css'

const Product = ({ product, handleClick }) => {
    return (
        <div className="productCard">
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <h3>{product.category}</h3>
            <button onClick={() => { handleClick(product.id) }}>Comprar</button>
        </div >
    );
}

export default Product;