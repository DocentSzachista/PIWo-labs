import { removeFromBasket } from "../basket/actions";
const Basket = (props) =>{
    const {basket, dispatch} = props;
    console.log(basket);
    const basketHTML = basket.map((iterator, id) =>{
        return <li className="list-group-item">
                {iterator.description} {iterator.tags} <button className="btn btn-danger" onClick={() =>{dispatch(removeFromBasket(iterator))}}>X</button>
        </li>
    });
    return (
        <ul className="list-group">
           {basketHTML}
        </ul>
    );
};
export default Basket;