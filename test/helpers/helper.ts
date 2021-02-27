/* global WebdriverIO browser */
class Helper {
  waitUntilURL (url: string, wait = 5000) {
    browser.waitUntil(() => {
      const pageUrl = browser.getUrl()
      return pageUrl.indexOf(url) > -1
    }, { timeout: wait })

    return browser.getUrl()
  }

  /**
   *
   * @param elem WebdriverIO.Element Element to be used
   * @param wait amount wait in ms
   */
  click (elem: WebdriverIO.Element, wait:number = 3000) {
    elem.waitForClickable({ timeout: wait })
    elem.click()
  }

  hoverOnElement (elem: WebdriverIO.Element, wait?:number) {
    elem.scrollIntoView()
    elem.moveTo()
    if (wait !== undefined) browser.pause(wait)
  }
}

export default new Helper()
