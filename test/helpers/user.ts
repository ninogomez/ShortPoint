/* global WebdriverIO  */
import LoginPage from '../pageobjects/login.po'
import HomePage from '../pageobjects/home.po'
import Helper from './helper'

class User {
  login (userObj : { username: string, password: string }) {
    LoginPage.setEmail(userObj.username)
    Helper.click(LoginPage.btnNext)
    LoginPage.setPassword(userObj.password)
    Helper.click(LoginPage.btnSubmit, 3000)
    Helper.click(LoginPage.btnNoStaySignedIn)
    return Helper.waitUntilURL('antongshortpoint.sharepoint.com/sites/HomeSite')
  }

  startTest () {
    HomePage.btnStart.click()
  }

  mouseOverOnElement (elem: WebdriverIO.Element, wait?:number) {
    Helper.hoverOnElement(elem, wait)
  }
}

export default new User()
