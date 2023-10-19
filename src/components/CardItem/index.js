import './index.css'

const CardItem = props => {
  const {listitem} = props
  const {title, description, imgUrl, className} = listitem

  return (
    <li className={`card-container ${className}`}>
      <div>
        <h1 className="card-head">{title}</h1>
        <p className="card-para">{description}</p>
      </div>
      <div className="imgcon">
        <img src={imgUrl} alt="logo" className="img" />
      </div>
    </li>
  )
}

export default CardItem
