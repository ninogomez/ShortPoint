/* global $ */
class HomePage {
  get homeTitle () { return $('[data-automationid="SiteHeaderTitle"]') }
  get siteHeaderGroupInfo () { return $('[data-automationid="SiteHeaderGroupInfo"]') }
  get btnStart () { return $('[href="https://antongshortpoint.sharepoint.com/sites/HomeSite/internalsite/testtask"]') }

  getHomeTitle () {
    return this.homeTitle.getText()
  }

  getSiteHomeGroupInfo () {
    return this.siteHeaderGroupInfo.getText()
  }
}

export default new HomePage()
