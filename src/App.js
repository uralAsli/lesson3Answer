import logo from './logo.svg';
import {Route,Switch, Redirect} from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Product from './pages/Product';
import MainHeader from './component/MainHeader';
import ProductDetail from './component/ProductDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <MainHeader/>
      <main>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome"/>
      </Route>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/product" exact>
        <Product/>
      </Route>
      <Route path="/product/:productId">
        <ProductDetail/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
