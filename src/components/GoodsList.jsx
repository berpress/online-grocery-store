import React from 'react';

import { GoodsItem } from './GoodsItems';

function GoodsList(props) {
    const { goods = []} = props;
    if (!goods.length) {
        return <h3>Nothing here, see github</h3>;
    }
    console.log(goods);
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem key={item.itemID} {...item} />
            ))}
        </div>
    );
}

export { GoodsList };