import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
  button_state: ''
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const { name, email, message } = this.state;

    this.setState({ button_state: "sending" })

    setTimeout(() => {
      this.setState({ button_state: "done" })
    }, 3000)

    setTimeout(() => {
      this.setState({ ...INITIAL_STATE })
    }, 5000)

    event.preventDefault();
  };


  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { name, email, message, button_state } = this.state

    const isInvalid = name === "" || email === ""

    return (
      <S.Section>
        <Fade cascade bottom delay={800}>
          <S.Form onSubmit={this.onSubmit}>
            <S.Input
              name="name"
              value={name}
              onChange={this.onChange}
              type="text"
              placeholder="Name"
            />
            <S.Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              placeholder="Email"
            />
            <S.TextArea
              name="message"
              value={message}
              onChange={this.onChange}
              placeholder="Message..."
              rows="5"
              cols="33"
            />
            <S.Button disabled={isInvalid} state={button_state} type="submit">
              {button_state === 'done' ? 'Done' : "Send"}
            </S.Button>
          </S.Form>
        </Fade>
      </S.Section>
    )
  }
}




