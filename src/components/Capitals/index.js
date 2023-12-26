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

// Write your code here
class Capital extends Component {
  state = {
    selectedCountryId: countryAndCapitalsList[0].id,
  }

  onChangeSelectedCountry = event => {
    this.setState({selectedCountryId: event.target.value})
  }

  getCountry = () => {
    const {selectedCountryId} = this.state

    const countryCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectedCountryId,
    )
    // console.log(countryCapital.country)
    return countryCapital.country

    // console.log(event.target.value)
  }

  render() {
    const {selectedCountryId} = this.state
    const country = this.getCountry(selectedCountryId)
    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeSelectedCountry}
            >
              {countryAndCapitalsList.map(eachOne => (
                <option key={eachOne.id} value={eachOne.id} className="option">
                  {eachOne.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capital
