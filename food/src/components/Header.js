import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import { FaShoppingBasket } from "react-icons/fa";
import Broccoli from "../img/shop/broccoli.png";

const products = [
  {
    id: 1,
    name: "Calabrese Broccoli",
    price: 13.0,
    oldPrice: 20.0,
    rating: 5,
    category: "Vegetable",
    image: Broccoli,
  },
  {
    id: 2,
    name: "Fresh Banana",
    price: 14.0,
    oldPrice: 20.0,
    rating: 5,
    category: "Fresh",
    image: require("../img/shop/banana.png"),
  },
  {
    id: 3,
    category: "Nuts",
    name: "White Nuts",
    price: 15.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/pistashio.png"),
  },
  {
    id: 4,
    category: "Vegetable",
    name: "Vegan Red Tomato",
    price: 17.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/tomato.png"),
  },
  {
    id: 5,
    category: "Health",
    name: "Mung Bean",
    price: 11.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/beans.png"),
  },
  {
    id: 6,
    category: "Nuts",
    name: "Brown Hazelnut",
    price: 12.0,
    oldPrice: 20.0,
    rating: 4.5,
    image: require("../img/shop/hazelnut.png"),
  },
  {
    id: 7,
    category: "Fresh",
    name: "Eggs",
    price: 17.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/eggs.png"),
  },
  {
    id: 8,
    category: "Fresh",
    name: "Zelco Suji Elaichi Rusk",
    price: 15.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/zelco.png"),
  },
  {
    id: 9,
    category: "Vegetable",
    name: "Zukini",
    price: 15.0,
    oldPrice: 20.0,
    rating: 5,
    image: require("../img/shop/zukini.png"),
  },
  {
    id: 10,
    category: "Nuts",
    name: "Cashew Nuts",
    price: 12.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/cashew.png"),
  },
  {
    id: 11,
    category: "Vegetable",
    name: "Fresh Corn",
    price: 17.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/corn.png"),
  },
  {
    id: 12,
    category: "Nuts",
    name: "Organic Almonds",
    price: 15.0,
    oldPrice: 20.0,
    rating: 4,
    image: require("../img/shop/almonds.png"),
  },
];

const backgroundImages = [
  require("../img/bgimg.png"),
  require("../img/chicken_bg.jpeg"),
  require("../img/healthy_breakfat_bg.jpeg"),
  require("../img/grilled_bg.jpeg"),
  require("../img/pumpkin_bg.jpeg"),
];

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Organick" />
          <h3 className="header__span">Organick</h3>
        </div>
        <ul className="nav">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#promotions">Offer</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <div className="header__actions">
          <input
            type="text"
            placeholder="Search"
            className="header__search"
            value={searchTerm}
            onChange={handleSearch}
          />

          <FaShoppingBasket
            onClick={() => setCartOpen(!cartOpen)}
            className={`header__cart-button ${cartOpen && "active"}`}
          />
          {cartOpen && <div className="header__shop-cart"></div>}
        </div>
      </div>
      {searchTerm && (
        <div className="search-results__container">
          <div className="search-results">
            <div className="search-results__grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card__image"
                    />
                    <div className="product-card__info">
                      <h4 className="product-card__name">{product.name}</h4>
                      <p className="product-card__category">
                        {product.category}
                      </p>
                      <p className="product-card__price">
                        <span className="old-price">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                        <span className="new-price">
                          ${product.price.toFixed(2)}
                        </span>
                      </p>
                      <p className="product-card__rating">
                        Rating: {product.rating}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found</p>
              )}
            </div>
          </div>
        </div>
      )}
      <div
        className="presentation"
        style={{
          backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="presentation__content">
          <h2 className="presentation__subtitle">100% Natural Food</h2>
          <h1 className="presentation__title">
            Choose the best healthier way of life
          </h1>
          <button className="presentation__button">Explore Now</button>
        </div>
      </div>
    </header>
  );
}
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../img/logo.png";
// import { FaShoppingBasket } from "react-icons/fa";
// import Broccoli from "../img/shop/broccoli.png";

// const products = [
//   {
//     id: 1,
//     name: "Calabrese Broccoli",
//     price: 13.0,
//     oldPrice: 20.0,
//     rating: 5,
//     category: "Vegetable",
//     image: Broccoli,
//   },
//   {
//     id: 2,
//     name: "Fresh Banana",
//     price: 14.0,
//     oldPrice: 20.0,
//     rating: 5,
//     category: "Fresh",
//     image: require("../img/shop/banana.png"),
//   },
//   {
//     id: 3,
//     category: "Nuts",
//     name: "White Nuts",
//     price: 15.0,
//     oldPrice: 20.0,
//     rating: 4,
//     image: require("../img/shop/pistashio.png"),
//   },
//   {
//     id: 4,
//     category: "Vegetable",
//     name: "Vegan Red Tomato",
//     price: 17.0,
//     oldPrice: 20.0,
//     rating: 5,
//     image: require("../img/shop/tomato.png"),
//   },
//   {
//     id: 5,
//     category: "Health",
//     name: "Mung Bean",
//     price: 11.0,
//     oldPrice: 20.0,
//     rating: 5,
//     image: require("../img/shop/beans.png"),
//   },
//   {
//     id: 6,
//     category: "Nuts",
//     name: "Brown Hazelnut",
//     price: 12.0,
//     oldPrice: 20.0,
//     rating: 4.5,
//     image: require("../img/shop/hazelnut.png"),
//   },
//   {
//     id: 7,
//     category: "Fresh",
//     name: "Eggs",
//     price: 17.0,
//     oldPrice: 20.0,
//     rating: 5,
//     image: require("../img/shop/eggs.png"),
//   },
//   {
//     id: 8,
//     category: "Fresh",
//     name: "Zelco Suji Elaichi Rusk",
//     price: 15.0,
//     oldPrice: 20.0,
//     rating: 4,
//     image: require("../img/shop/zelco.png"),
//   },
//   {
//     id: 9,
//     category: "Vegetable",
//     name: "Zukini",
//     price: 15.0,
//     oldPrice: 20.0,
//     rating: 5,
//     image: require("../img/shop/zukini.png"),
//   },
//   {
//     id: 10,
//     category: "Nuts",
//     name: "Cashew Nuts",
//     price: 12.0,
//     oldPrice: 20.0,
//     rating: 4,
//     image: require("../img/shop/cashew.png"),
//   },
//   {
//     id: 11,
//     category: "Vegetable",
//     name: "Fresh Corn",
//     price: 17.0,
//     oldPrice: 20.0,
//     rating: 4,
//     image: require("../img/shop/corn.png"),
//   },
//   {
//     id: 12,
//     category: "Nuts",
//     name: "Organic Almonds",
//     price: 15.0,
//     oldPrice: 20.0,
//     rating: 4,
//     image: require("../img/shop/almonds.png"),
//   },
// ];

// const backgroundImages = [
//   require("../img/bgimg.png"),
//   require("../img/chicken_bg.jpeg"),
//   require("../img/healthy_breakfat_bg.jpeg"),
//   require("../img/grilled_bg.jpeg"),
//   require("../img/pumpkin_bg.jpeg"),
// ];

// export default function Header() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [backgroundIndex, setBackgroundIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex(
//         (prevIndex) => (prevIndex + 1) % backgroundImages.length
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(value)
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <header className="header" id="header">
//       <div className="header__container">
//         <div className="header__logo">
//           <img src={logo} alt="Organick" />
//           <h3 className="header__span">Organick</h3>
//         </div>
//         <ul className="nav">
//           <li>
//             <a href="#header">Home</a>
//           </li>
//           <li>
//             <a href="#promotions">Offer</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#shop">Shop</a>
//           </li>
//           <li>
//             <a href="#testimonial">Testimonials</a>
//           </li>
//           <li>
//             <a href="#contacts">Contacts</a>
//           </li>
//         </ul>
//         <div className="header__actions">
//           <input
//             type="text"
//             placeholder="Search"
//             className="header__search"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <button className="header__search-button">
//             <i className="fa fa-search"></i>
//           </button>
//           <FaShoppingBasket
//             onClick={() => setCartOpen(!cartOpen)}
//             className={`header__cart-button ${cartOpen && "active"}`}
//           />
//           {cartOpen && <div className="header__shop-cart"></div>}
//         </div>
//       </div>
//       {searchTerm && (
//         <div className="search-results__container">
//           <div className="search-results">
//             <div className="search-results__grid">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product) => (
//                   <div key={product.id} className="product-card">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="product-card__image"
//                     />
//                     <div className="product-card__info">
//                       <h4 className="product-card__name">{product.name}</h4>
//                       <p className="product-card__category">
//                         {product.category}
//                       </p>
//                       <p className="product-card__price">
//                         <span className="old-price">
//                           ${product.oldPrice.toFixed(2)}
//                         </span>
//                         <span className="new-price">
//                           ${product.price.toFixed(2)}
//                         </span>
//                       </p>
//                       <p className="product-card__rating">
//                         Rating: {product.rating}
//                       </p>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p>No products found</p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//       <div
//         className="presentation"
//         style={{
//           backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
//           transition: "background-image 1s ease-in-out",
//         }}
//       >
//         <div className="presentation__content">
//           <h2 className="presentation__subtitle">100% Natural Food</h2>
//           <h1 className="presentation__title">
//             Choose the best healthier way of life
//           </h1>
//           <Link to="/quality-standard">
//             <button className="presentation__button">Explore Now</button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
