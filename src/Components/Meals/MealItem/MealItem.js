import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
    const ctxCart = useContext(CartContext);

    const itemPrice = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        ctxCart.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{itemPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
            </div>
        </li>
    );
};

export default MealItem;