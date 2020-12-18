import React from 'react';
 import data from './data';

function App() {
  return (

    
<div className="grid-container">
	<header className="row">
		<div>
		<a href="/" className="brand">amazon</a>
		</div>
		<div>
			<a href="/cart">Cart</a>
			<a href="/signin">Sign In</a>
		</div>
	</header>
	<main>
		<div className="row center">
      {
        data.product.map(product=>(

			<div key={product._id} className="card">
				<a href={`/products/${product._id}`}>
					<img className="medium" src={product.image} alt={product.name} />
				</a>
				<div className="card-body">
					<a  href={`/products/${product._id}`}>
						<h2>{product.name}</h2>
					</a>
					<div className="rating">
						<span><i className="fa fa-star"></i></span>
						<span><i className="fa fa-star"></i></span>
						<span><i className="fa fa-star"></i></span>
						<span><i className="fa fa-star"></i></span>
						<span><i className="fa fa-star-o"></i></span>
					</div>
					<div className="price">
						R{product.price}
					</div>
				</div>
			</div>
      
        ))
      }
      
		</div>
		<ul>
			<li>Product 1</li>
			<li>Product 2</li>
			<li>Product 3</li>
			<li>Product 4</li>
		</ul>
	</main>
	<footer>
		All right reserved
	</footer>
</div>

  );
}

export default App;
