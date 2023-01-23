import { By, Key, until } from 'selenium-webdriver'
import { getScreenshot } from '../utils/screenshot.util'
import { BaseCase } from './base.case'

export class ReserveCase extends BaseCase {
  public async run(): Promise<void> {
    this.driver.get('https://www.e-license.jp/el31/jo3gjoM9Tq0-brGQYS-1OA%3D%3D')
    // ID, password入力
    const id = await this.driver.findElement(By.id('studentId'))
    const password = await this.driver.findElement(By.id('password'))
    await id.sendKeys('')
    await password.sendKeys('')
    const login = await this.driver.findElement(By.id('login'))
    await login.click()

    const title = await this.driver.findElement(By.id('body > nav > span'))
    await this.driver.wait(until.elementIsVisible(title), 1000)

    const trList = await this.driver.findElements(
      By.css('#scrollTable > div > div.col-10.col-lg-11.pl-0 > div > table > tr')
    )
    for (const tr of trList) {
      const tdList = await tr.findElements(By.name('td'))
      for (const td of tdList) {
        console.log(td)
      }
    }
  }
}
