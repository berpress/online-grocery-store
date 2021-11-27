export function reduser(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {state, goods: payload};
        case 'CLOSE_ALERT':
            return {...state, alertName: ''}
        case 'REMOVE_FROM_BASKET':
            return {...state, order: state.order.filter((el) => el.itemID !== payload.itemID)}
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.itemID === payload.itemID
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                console.log(newItem);
                newOrder = [...state.order, newItem];
                console.log(state.order);
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
        
                // setOrder(newOrder);
            }
            // setAlertName(item.name);
            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            }
        }
        // eslint-disable-next-line no-fallthrough
        case 'INCRIMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.itemID === payload.itemID) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            }

        case 'DECRIMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.itemID === payload.itemID) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            }
        
        case 'TOGGLE_BASKET':
            return {
                ...state, 
                isBasketShow: !state.isBasketShow
            }
        default: 
            return state;
    }
}