// Write your code here.

import './index.css'

const ThumbNailItem = props => {
  const {thumbnailDetails, isActive, setactivethumbNailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const thumbNailClassName = isActive ? 'thumbnail-item-active' : 'thumbnail'
  const onClickImg = () => {
    setactivethumbNailId(id)
  }
  return (
    <li className={thumbNailClassName}>
      <button type="button">
        <img
          src={thumbnailUrl}
          onClick={onClickImg}
          className="thumbnail-img"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbNailItem
