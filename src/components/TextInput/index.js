import {Component} from 'react'

import {
  TextContainer,
  Heading,
  InnerContainer,
  Input,
  Button,
  ParagraphText,
} from './styledComponents'

class TextInput extends Component {
  state = {isClicked: false}

  onChangeTextInput = event => {
    this.setState({text: event.target.value})
  }

  changeText = event => {
    event.preventDefault()

    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  render() {
    const {text, isClicked} = this.state

    const buttonText = isClicked ? 'Edit' : 'Save'

    return (
      <TextContainer>
        <InnerContainer>
          <Heading>Editable Text Input</Heading>
          <form onSubmit={this.changeText}>
            {!isClicked ? (
              <Input id="text" value={text} onChange={this.onChangeTextInput} />
            ) : (
              <ParagraphText>{text}</ParagraphText>
            )}
            <Button type="submit">{buttonText}</Button>
          </form>
        </InnerContainer>
      </TextContainer>
    )
  }
}

export default TextInput
