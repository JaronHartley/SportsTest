import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get sort () {
        return $('//button[@id="sort-btn"]')
    }

    get default () {
        return $('//div[@data-sort="default"]')
    }

    get low2high () {
        return $('//div[@data-sort="price-asc"]')
    }

    get high2low () {
        return $('//div[@data-sort="price-desc"]')
    }

    get nameAsc () {
        return $('//div[@data-sort="name-asc"]')
    }

    get nameDesc () {
        return $('//div[@data-sort="name-desc"]')
    }

    get sale () {
        return $('//div[@data-sort="on-sale"]')
    }

    get new () {
        return $('//div[@data-sort="new"]')
    }

    get clear () {
        return $('//button[@class="active-chip-x"]')
    }

    get selectors () {
        return [
            this.low2high,
            this.high2low,
            this.nameAsc,
            this.nameDesc,
            this.sale,
            this.new,
        ]
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new HomePage();
