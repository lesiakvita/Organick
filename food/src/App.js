import React from "react";

import "./App.css";
import Header from "./components/Header";
import Offer from "./components/Offer";
import About from "./components/About";
import ProductGrid from "./components/ProductGrid";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          name: "Calabrese Broccoli",
          price: 13.0,
          oldPrice: 20.0,
          rating: 5,
          category: "Vegetable",
          image: require("./img/shop/broccoli.png"),
        },
        {
          id: 2,
          name: "Fresh Banana",
          price: 14.0,
          oldPrice: 20.0,
          rating: 5,
          category: "Fresh",
          image: require("./img/shop/banana.png"),
        },
        {
          id: 3,
          category: "Nuts",
          name: "White Nuts",
          price: 15.0,
          oldPrice: 20.0,
          rating: 4,
          image: require("./img/shop/pistashio.png"),
        },
        {
          id: 4,
          category: "Vegetable",
          name: "Vegan Red Tomato",
          price: 17.0,
          oldPrice: 20.0,
          rating: 5,
          image: require("./img/shop/tomato.png"),
        },
        {
          id: 5,
          category: "Health",
          name: "Mung Bean",
          price: 11.0,
          oldPrice: 20.0,
          rating: 5,
          image: require("./img/shop/beans.png"),
        },
        {
          id: 6,
          category: "Nuts",
          name: "Brown Hazelnut",
          price: 12.0,
          oldPrice: 20.0,
          rating: 4.5,
          image: require("./img/shop/hazelnut.png"),
        },
        {
          id: 7,
          category: "Fresh",
          name: "Eggs",
          price: 17.0,
          oldPrice: 20.0,
          rating: 5,
          image: require("./img/shop/eggs.png"),
        },
        {
          id: 8,
          category: "Fresh",
          name: "Zelco Suji Elaichi Rusk",
          price: 15.0,
          oldPrice: 20.0,
          rating: 4,
          image: require("./img/shop/zelco.png"),
        },
        {
          id: 9,
          category: "Vegetable",
          name: "Zukini",
          price: 15.0,
          oldPrice: 20.0,
          rating: 5,
          image: require("./img/shop/zukini.png"),
        },
        {
          id: 10,
          category: "Nuts",
          name: "Cashew Nuts",
          price: 12.0,
          oldPrice: 20.0,
          rating: 4,
          image: require("./img/shop/cashew.png"),
        },
        {
          id: 11,
          category: "Vegetable",
          name: "Fresh Corn",
          price: 17.0,
          oldPrice: 20.0,
          rating: 4,
          image: require("./img/shop/corn.png"),
        },
        {
          id: 12,
          category: "Nuts",
          name: "Organic Almonds",
          price: 15.0,
          oldPrice: 20.0,
          rating: 4,
          image: require("./img/shop/almonds.png"),
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.product });
    } else {
      this.setState({
        currentItems: this.state.items.filter(
          (el) => el.category.toLowerCase() === category.toLowerCase()
        ),
      });
    }
  }

  addToOrder(product) {
    this.setState({ orders: [...this.state.orders, product] });
  }

  render() {
    return (
      <div>
        <Header />
        <Offer />
        <About />
        <Categories chooseCategory={this.chooseCategory} />
        <ProductGrid items={this.state.currentItems} onAdd={this.addToOrder} />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Offer from "./components/Offer";
// import About from "./components/About";
// import ProductGrid from "./components/ProductGrid";
// import Testimonials from "./components/Testimonials";
// import Newsletter from "./components/Newsletter";
// import Footer from "./components/Footer";
// import Categories from "./components/Categories";
// import ProductDetail from "./components/ProductDetail"; // Новый компонент для страницы продукта

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orders: [],
//       currentItems: [],
//       items: [
//         {
//           id: 1,
//           category: "Vegetable",
//           name: "Calabrese Broccoli",
//           price: 13.0,
//           oldPrice: 20.0,
//           rating: 5,
//           image: require("./img/shop/broccoli.png"),
//         },
//         {
//           id: 2,
//           category: "Fresh",
//           name: "Fresh Banana Fruites",
//           price: 14.0,
//           oldPrice: 20.0,
//           rating: 4.5,
//           image: require("./img/shop/banana.png"),
//         },
//         {
//           id: 3,
//           category: "Nuts",
//           name: "White Nuts",
//           price: 15.0,
//           oldPrice: 20.0,
//           rating: 4,
//           image: require("./img/shop/pistashio.png"),
//         },
//         {
//           id: 4,
//           category: "Vegetable",
//           name: "Vegan Red Tomato",
//           price: 17.0,
//           oldPrice: 20.0,
//           rating: 5,
//           image: require("./img/shop/tomato.png"),
//         },
//         {
//           id: 5,
//           category: "Health",
//           name: "Mung Bean",
//           price: 11.0,
//           oldPrice: 20.0,
//           rating: 5,
//           image: require("./img/shop/beans.png"),
//         },
//         {
//           id: 6,
//           category: "Nuts",
//           name: "Brown Hazelnut",
//           price: 12.0,
//           oldPrice: 20.0,
//           rating: 4.5,
//           image: require("./img/shop/hazelnut.png"),
//         },
//         {
//           id: 7,
//           category: "Fresh",
//           name: "Eggs",
//           price: 17.0,
//           oldPrice: 20.0,
//           rating: 5,
//           image: require("./img/shop/eggs.png"),
//         },
//         {
//           id: 8,
//           category: "Fresh",
//           name: "Zelco Suji Elaichi Rusk",
//           price: 15.0,
//           oldPrice: 20.0,
//           rating: 4,
//           image: require("./img/shop/zelco.png"),
//         },

//         {
//           id: 9,
//           category: "Vegetable",
//           name: "Zukini",
//           price: 15.0,
//           oldPrice: 20.0,
//           rating: 5,
//           image: require("./img/shop/zukini.png"),
//         },

//         {
//           id: 10,
//           category: "Nuts",
//           name: "Cashew Nuts",
//           price: 12.0,
//           oldPrice: 20.0,
//           rating: 4,
//           image: require("./img/shop/cashew.png"),
//         },
//         {
//           id: 11,
//           category: "Vegetable",
//           name: "Fresh Corn",
//           price: 17.0,
//           oldPrice: 20.0,
//           rating: 4,
//           image: require("./img/shop/corn.png"),
//         },
//         {
//           id: 12,
//           category: "Nuts",
//           name: "Organic Almonds",
//           price: 15.0,
//           oldPrice: 20.0,
//           rating: 4,
//           image: require("./img/shop/almonds.png"),
//         },
//       ],
//     };
//     this.state.currentItems = this.state.items;
//     this.addToOrder = this.addToOrder.bind(this);
//     this.chooseCategory = this.chooseCategory.bind(this);
//   }

//   chooseCategory(category) {
//     if (category === "all") {
//       this.setState({ currentItems: this.state.items });
//     } else {
//       this.setState({
//         currentItems: this.state.items.filter(
//           (el) => el.category.toLowerCase() === category.toLowerCase()
//         ),
//       });
//     }
//   }

//   addToOrder(product) {
//     this.setState({ orders: [...this.state.orders, product] });
//   }

//   render() {
//     return (
//       <Router>
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Offer />
//                 <About />
//                 <Categories chooseCategory={this.chooseCategory} />
//                 <ProductGrid
//                   items={this.state.currentItems}
//                   onAdd={this.addToOrder}
//                 />
//                 <Testimonials />
//                 <Newsletter />
//               </>
//             }
//           />
//           <Route
//             path="/product/:id"
//             element={<ProductDetail items={this.state.items} />}
//           />
//         </Routes>
//         <Footer />
//       </Router>
//     );
//   }
// }

// export default App;
