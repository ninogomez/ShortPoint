/* global $ */
import Page from './page'
// import User from '../helpers/user'
// import Helper from '../helpers/helper'

class LoginPage extends Page {
  get email () { return $('[type="email"]') }
  get password () { return $('[name="passwd"]') }
  get btnNext () { return $('[value="Next"]') }
  get btnSubmit () { return $('[type="submit"]') }
  get btnNoStaySignedIn () { return $('[value="No"]') }

  setEmail (username: string) {
    this.email.waitForDisplayed({ timeout: 5000 })
    this.email.setValue(username)
  }

  setPassword (pass: string) {
    this.password.waitForDisplayed({ timeout: 5000 })
    this.password.setValue(pass)
  }

  open () {
    return super.open('login')
  }
}

export default new LoginPage()
