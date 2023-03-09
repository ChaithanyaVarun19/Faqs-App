import {Component} from 'react'

class FaqItem extends Component {
  state = {isClicked: false}

  onClickView = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderOnChangeImage = () => {
    const {isClicked} = this.state
    const changeImage = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const changeAlt = isClicked ? 'minus' : 'plus'

    return (
      <button type="button" onClick={this.onClickView}>
        <img src={changeImage} alt={changeAlt} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isClicked} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isClicked) {
      return (
        <div>
          <hr />
          <p> {answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li>
        <div>
          <h1> {questionText}</h1>
          {this.renderOnChangeImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
