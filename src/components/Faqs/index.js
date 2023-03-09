import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div>
        <div>
          <h1> FAQs</h1>
          <ul>
            {faqsList.map(eachOne => (
              <FaqItem key={eachOne.id} faqDetails={eachOne} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
