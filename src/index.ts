import { initWebDriver } from './utils/driver.util'
import webdriver from 'selenium-webdriver'
import { ReserveCase } from './testcase/reserve.case'
import { BaseCase } from './testcase/base.case'

let driver: webdriver.ThenableWebDriver

const init = () => {
  driver = initWebDriver('MacM1')
}

const finish = () => {
  if (driver) {
    driver.close()
  }
}

const start = async () => {
  try {
    init()
    const caseList: BaseCase[] = [new ReserveCase(driver)]
    for (const testcase of caseList) {
      await testcase.run()
    }
  } catch (e: any) {
    console.error(e)
  } finally {
    finish()
  }
}

start()
