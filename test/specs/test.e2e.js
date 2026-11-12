import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/homepage.js'

describe('Sort feature coverage test', () => {
    it('should apply each filter successfully', async () => {
        await HomePage.open()

        const keys = Object.keys(HomePage.selectors)

        for (let i = 0; i < Object.keys(HomePage.selectors).length; i++) {
            const option = HomePage.selectors[keys[i]]

            await HomePage.sort.click()
            await option.selector.click()
            await HomePage.sort.click()
            await expect(HomePage.checkmark).toBeExisting()
            await expect(HomePage.checkmark).toHaveText(expect.stringContaining(option.value)) 
            await expect(HomePage.activeFilter).toBeExisting()
            await expect(HomePage.activeFilter).toHaveText(expect.stringContaining(option.value))
            await HomePage.clear.click()            
            

        }        
    })
})


