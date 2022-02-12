import { Link, useHistory, useLocation} from "react-router-dom";

const Product = () => {
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const isSortTypeAsc = queryParams.get('sort') === 'asc';
    const arr = ["elma", "armut", "kel", "mahmut"];
    const sort = () => {
        history.push('/product?sort=asc');
    }
    return (
        <section>
            <h1> PRODUCTS </h1>
            <button onClick={sort}> SORT ASC </button>
            <ul>
                <li><Link to="/product/p1">product1</Link></li>
                <li><Link to="/product/p2">product2</Link></li>
                <li><Link to="/product/p3">product3</Link></li>
            </ul>
            {arr.toString()}
        </section>
    )
}

export default Product;