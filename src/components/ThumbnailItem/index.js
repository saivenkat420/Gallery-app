import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {values, changeDisplayImage} = this.props
    const {thumbnailUrl, thumbnailAltText, id} = values
    const changeDisplayItem = () => {
      changeDisplayImage(id)
    }

    return (
      <li className="list-item">
        <buttton type="buttton" id={id} onClick={changeDisplayItem}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-image"
          />
        </buttton>
      </li>
    )
  }
}

export default ThumbnailItem
