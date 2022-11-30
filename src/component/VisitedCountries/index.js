import {Component} from 'react'
import './index.css'

class VisitedCountries extends Component {
  render() {
    const {items, removeCountries} = this.props

    const removeCountry = () => {
      removeCountries(items.id)
    }
    return (
      <li className="visited-lists" key={items.id}>
        <>
          <img src={items.imageUrl} alt="thumbnail" className="country-img" />
          <div className="content">
            <p className="name">{items.name}</p>
            <button
              type="button"
              className="remove-btn"
              onClick={removeCountry}
            >
              Remove
            </button>
          </div>
        </>
      </li>
    )
  }
}

export default VisitedCountries
