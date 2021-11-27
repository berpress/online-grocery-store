import { createContext, useReducer } from 'react';
import { reduser } from './reduser';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
    alertNameBuy: '',
}

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reduser, initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromBasket = (itemID) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {itemID: itemID}})
    }

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    value.incQuantity = (itemID) => {
        dispatch({type: 'INCRIMENT_QUANTITY', payload: {itemID: itemID}})
    }

    value.decQuantity = (itemID) => {
        dispatch({type: 'DECRIMENT_QUANTITY', payload: {itemID: itemID}})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    }

    value.SetGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return <ShopContext.Provider value = {value}>
        {children};
    </ShopContext.Provider>
}