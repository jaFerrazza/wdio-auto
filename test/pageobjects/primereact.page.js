const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PrimeReactPage extends Page {
    /**
     * define selectors using getter methods
     */

    getNameCheckbox (name) {
        return $(`//td[contains(text(),'${name}')]//preceding-sibling::td//div[contains(@role, 'checkbox')]`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickNameCheckbox(checkBoxName) {
        await this.getNameCheckbox(checkBoxName).scrollIntoView({ block: 'center', inline: 'center' });
        await this.getNameCheckbox(checkBoxName).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new PrimeReactPage();
