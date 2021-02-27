/* global $$ browser WebdriverIO */
import { carouselData } from '../data/carousel.data'

class TestTaskPage {
  private get activeCarouselElems () { return $$('.sp-type-image-carousel.slick-active[aria-hidden="false"]') }

  getActiveCarouselImages () {
    // const activeCarouselElems = $$('.sp-type-image-carousel.slick-active[aria-hidden="false"]')

    return this.activeCarouselElems.map(el => {
      return {
        image: el.$('img').getAttribute('src').split('/')[8],
        title: el.$('.shortpoint-image-carousel-title').getText()
      }
    })
  }

  /**
 * gets the inactive images in carousel and returns an object
 * @returns-{ image: string, title: string }
 */
  getInactiveCarouselImage () {
    const activePictures = $$('.sp-type-image-carousel.slick-active[aria-hidden="false"] > div > .shortpoint-image-carousel-title')
      .map(el => el.getText())

    return carouselData.filter(e => !activePictures.includes(e.title))[0]
  }

  // not working. flaky
  // waitForInactiveCarousel (wait: number) {
  //   browser.waitUntil(() => {
  //     return this.getActiveCarouselImages().map(e => e.title)
  //       .includes(this.getInactiveCarouselImage().title)
  //   }, { timeout: wait, interval: 500 })
  // }

  /**
   * Wait and check if the inactive is now active
   * @param wait ms
   * @param imageObj - { image: string, title: string }
   */
  waitandCheckCarousel (wait: number, imageObj: {image: string, title: string}) {
    browser.pause(wait)
    return this.getActiveCarouselImages().map(e => e.title)
      .includes(imageObj.title)
  }

  getTileByIndex (idx: number) {
    return $$('.shortpoint-tile-content')[idx]
  }

  getTileDescLocation (elem: WebdriverIO.Element) {
    return elem.$('.shortpoint-tile-description').getLocation()
  }
}

export default new TestTaskPage()
