import {Component} from 'react'
import './index.css'

class CountriesData extends Component {
  render() {
    const {item, visitedData} = this.props
    const {name, isVisited, id} = item

    const countryVisited = () => {
      visitedData(id)
    }

    return (
      <li className="countries-lists">
        <div className="countries-name-container">
          <p className="country-name">{name}</p>
          {isVisited ? (
            <p className="no-visit">Visited</p>
          ) : (
            <button
              className={!isVisited ? 'active-btn' : 'not-active'}
              type="button"
              onClick={countryVisited}
            >
              Visit
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default CountriesData
