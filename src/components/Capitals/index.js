import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onchangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountry = countryAndCapitalsList.find(
      eachList => eachList.id === activeCapitalId,
    )

    return activeCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="capitalApp">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="qucetion-container">
            <select
              className="capitals-select"
              onChange={this.onchangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachList => (
                <option
                  key={eachList.id}
                  value={eachList.id}
                  className="option"
                >
                  {eachList.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country</p>
          </div>

          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

// Write your code here
