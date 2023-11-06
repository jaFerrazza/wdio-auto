const { expect } = require('@wdio/globals')
const PrimePage = require('../pageobjects/primereact.page')

describe('Datatable selection', () => {
    it('should select the checkbox against the row with the name Blue Band', async () => {
        const checkName = 'Blue Band';

        await PrimePage.open();
        await PrimePage.clickNameCheckbox(checkName);

        const isChecked = await PrimePage.getNameCheckbox(checkName).getAttribute('aria-checked');

        expect(isChecked).toEqual('true');
    })
})

