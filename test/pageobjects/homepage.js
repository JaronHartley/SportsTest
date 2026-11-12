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

    get activeFilter () {
        return $('//span[@class="active-chip"]')
    }

    get checkmark () {
        return $('//div[@class="sort-option selected"]')
    }

    get dropdownOpen () {
        return $('//div[@class="sort-dropdown open"]')
    }

    get selectors () {
        return {
            low2high: {
                selector: this.low2high,
                value: "Price: Low to High"
            },
            high2low: {
                selector: this.high2low,
                value: "Price: High to Low"
            },
            nameAsc: {
                selector: this.nameAsc,
                value: "Name: A → Z"
            },
            nameDesc: {
                selector: this.nameDesc,
                value: "Name: Z → A"
            },
            sale: {
                selector: this.sale,
                value: "On sale"
            },
            new: {
                selector: this.new,
                value: "New arrivals"
            }
    }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new HomePage();
