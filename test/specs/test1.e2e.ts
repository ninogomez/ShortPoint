/* global expect browser */
import LoginPage from '../pageobjects/login.po'
import HomePage from '../pageobjects/home.po'
import TestTaskPage from '../pageobjects/testTask.po'
import User from '../helpers/user'
import { userObj, urls } from '../data/userData'

const homeSite = 'Home Site'
const publicGroup = 'Public group'

describe('Home Site Test', () => {
  it('should login with valid credentials', () => {
    LoginPage.open()

    expect(User.login(userObj)).toEqual(urls.home)
    expect(HomePage.getHomeTitle()).toEqual(homeSite)
    expect(HomePage.getSiteHomeGroupInfo()).toEqual(publicGroup)
  })
  it('should start test', () => {
    User.startTest()
    browser.switchWindow('Test task')

    expect(browser.getUrl()).toEqual(urls.testTask)
  })
  describe('slideshow', () => {
    it('slideshow animation should work', () => {
      const activeBefore = TestTaskPage.getActiveCarouselImages()
      const inactiveBefore = TestTaskPage.getInactiveCarouselImage()

      expect(TestTaskPage.waitandCheckCarousel(8000, inactiveBefore)).toBeTruthy()
      expect(TestTaskPage.getActiveCarouselImages()).not.toContainEqual(activeBefore)
    })
  })
  describe('Tile animation', () => {
    it('hover should work on tile 1', () => {
      const tile = TestTaskPage.getTileByIndex(0)
      const tileLocationBefore = TestTaskPage.getTileDescLocation(tile)

      User.mouseOverOnElement(tile, 2000)
      expect(tileLocationBefore).not.toEqual(TestTaskPage.getTileDescLocation(tile))
    })
    it('hover should work on tile 2', () => {
      const tile = TestTaskPage.getTileByIndex(1)
      const tileLocationBefore = TestTaskPage.getTileDescLocation(tile)

      User.mouseOverOnElement(tile, 2000)
      expect(tileLocationBefore).not.toEqual(TestTaskPage.getTileDescLocation(tile))
    })
    it('hover should work on tile 3', () => {
      const tile = TestTaskPage.getTileByIndex(2)
      const tileLocationBefore = TestTaskPage.getTileDescLocation(tile)

      User.mouseOverOnElement(tile, 2000)
      expect(tileLocationBefore).not.toEqual(TestTaskPage.getTileDescLocation(tile))
    })
    it('hover should work on tile 4', () => {
      // This test is failing. I never got the last tile to animate
      // so I'm guessing there is a bug here.
      const tile = TestTaskPage.getTileByIndex(3)
      const tileLocationBefore = TestTaskPage.getTileDescLocation(tile)

      User.mouseOverOnElement(tile, 2000)
      expect(tileLocationBefore).not.toEqual(TestTaskPage.getTileDescLocation(tile))
    })
  })
})
