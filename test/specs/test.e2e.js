import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/homepage.js'

describe('Sort feature coverage test', () => {
    it('should apply each filter successfully', async () => {
        await HomePage.open()
        for (let i = 0; i < HomePage.selectors.length; i++) {
           
            await HomePage.sort.click()
            await HomePage.selectors[i].click()
            await expect(HomePage.clear).toBeExisting()
            await expect(HomePage.clear).toBeClickable()
            await HomePage.clear.click()
            

        }        
    })
})


