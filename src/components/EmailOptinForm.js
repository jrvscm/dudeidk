import React, { Fragment } from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EmailOptinForm.css'

class EmailOptinForm extends React.Component {
  static defaultProps = {
    name: 'Email Optin Form',
    action: '',
    successMessage: `Thanks for signing up! When we go live, we'll shoot you an email!`,
    errorMessage: `Oops! Something went wrong. Try again in a few.`
  }

  state = {
    alert: '',
    disabled: false,
    formSuccess: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        //HANDLE SUCCESS
        form.reset()
        this.setState({
          formSuccess: true,
          alert: this.props.successMessage,
          disabled: true
        })
      })
      .catch(err => {
        //HANDLE ERROR
        console.error(err)
        this.setState({
          formSuccess: false,
          alert: this.props.errorMessage,
          disabled: false,
        })
      })
  }

  render() {
    const { name, action } = this.props

    return (
      <Fragment>
        <form
          className="EmailOptinForm"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          data-netlify=""
          data-netlify-honeypot='_gotcha'
        >
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="email"
              placeholder="Email"
              name="emailAddress"
              disabled={this.state.disabled}
              required
            />
            <span>Email address</span>
          </label>
          <input type='text' name='_gotcha' style={{ display: 'none' }} />
          <input type="hidden" name="form-name" value={name} />
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Sign Up"
            disabled={this.state.disabled}
          />
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}
        </form>
      </Fragment>
    )
  }
}

export default EmailOptinForm
