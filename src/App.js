import './App.css';
import { useEffect, useState } from 'react';
import MenuContainer from './components/MenuContainer';

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (productFiltered) => {
    return <MenuContainer productList={productFiltered} handleClick={handleClick} />
  }

  const filterProducts = (productName) => {

    if (productName === "") {
      return setFilteredProducts(products);
    } else {
      const productToFilter = products.find(product => product.name === productName)
      return setFilteredProducts([productToFilter]);
    }
  }

  const handleClick = (productId) => {
    const productToSale = products.find(product => product.id === productId);

    const alreadyHave = currentSale.includes(productToSale)

    if (alreadyHave === false) {
      setCurrentSale([...currentSale, productToSale]);
      setCartTotal(cartTotal + productToSale.price);
    } else {
      alert("Já existe esse produto no carrinho!")
    }
  }

  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kenzie Burguer</h1>
        <h2>Cardápio</h2>
        <div className="searchBar">
          <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
          <button onClick={() => { filterProducts(searchInput) }}>Pesquisar</button>
        </div>
        {showProducts(filteredProducts)}
        <div className="totalSale">
          <h2>Total da venda: {cartTotal.toFixed(2)}</h2>
          <h2>Carrinho:</h2>
        </div>

        {showProducts(currentSale)}
      </header>
    </div>
  );
}

export default App;
