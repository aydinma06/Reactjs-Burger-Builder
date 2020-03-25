import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object
        .keys(props.ingredients)
        .map(igKey => {
        return <li key = {igKey}>
             <span style={{textTransform:'capitalize'}}>
                 {igKey}: {props.ingredients[igKey]}</span>
             </li>
        });

    return (<Aux>
       <h3>Your Order</h3>
        <p> A delicious burger with following ingredients </p>
        <ul>
            {ingredientsSummary}
        </ul> 
        <p>Continue to check out ?</p>
        <Button btnType='Danger' clicked = {props.purchaseCanceled}>CANCEL</Button>
        <Button btnType='Success' clicked = {props.purchaseContinued}>CONTINUE</Button>
    </Aux>);
};

export default orderSummary;