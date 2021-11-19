function GoodsItem(props) {
  const {description, image, price, itemId, name} = props;

  return (
    <div className="card" id={itemId}>
      <div className="card-image">
        <img src={image} alt={name}/>
        </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
          <button className='btn'>Buy</button>
          <span className="right" style={{ fontSize: '1.8rem' }}>{price} RUB</span>
      </div>
    </div>
   )
}

export { GoodsItem };