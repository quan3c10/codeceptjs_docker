const {sleep} = require("selenium-standalone/lib/delay");
const { I } = inject();

module.exports = {

    tab: {
        textBox: "//span[text()='Text Box']",
        checkBox: "//span[text()='Check Box'",
        radioButton: "//span[text()='Radio Button'",
        webTables: "//span[text()='Web Tables'",
        buttons: "//span[text()='Buttons'",
        links: "//span[text()='Links'",
        brokenLinksImages: "//span[text()='Broken Links - Images'",
        uploadAndDownload: "//span[text()='Upload and Download'",
        dynamicProperties: "//span[text()='Dynamic Properties'"
    },
    textBox: {
        fullName: "#userName",
        email: "#userEmail",
        currentAddress: "#currentAddress",
        permanentAddress: "#permanentAddress",
        btnSubmit: "#submit",
        lbFullName: "#name",
        lbEmail: "#email",
        lbCurrentAddress: "#currentAddress",
        lbPermanentAddress: "#permanentAddress",
    },
    radioButton:{
        btnYes: "#yesRadio",
        btnImpressive: "#impressiveRadio",
        btnNo: "#noRadio"
    },
    button:{
        btnDoubleClick: "#doubleClickBtn",
        btnRightClick: "#rightClickBtn",
        btnClickMe: "#eCSlT"
    },

    url: '/elements',

    open(){
      I.amOnPage(this.url)
    },

    getButtonLocator(name){
        return "//label[text()='${name}']//preceding::input[1]"
    },

    getTabLocator(name){
        return "//span[text()='" + name + "']"
    },

    /***
     * Select tab
     */
    async selectTextBoxTab() {
        await I.click(this.tab.textBox)
    },

    async selectRadioButtonTab() {
        await I.click(this.tab.radioButton)
    },

    async selectButtonTab() {
        await I.click(this.tab.button)
    },

    async selectTab(name) {
        const locator = this.getTabLocator(name);
        await I.scrollTo(locator)
        await I.click(locator)
    },

    /***
     * Action for TextBox
     */
    fillFullNameAs(full_name){
      I.fillField(this.textBox.fullName, full_name)
    },

    fillEmailAs(email){
      I.fillField(this.textBox.email, email)
    },

    fillCurrentAddressAs(address){
      I.fillField(this.textBox.currentAddress, address)
    },

    fillPermanentAddressAs(permanent_address){
      I.fillField(this.textBox.permanentAddress, permanent_address)
    },

    clickSubmit(){
      I.waitForClickable(this.textBox.btnSubmit)
      I.scrollTo(this.textBox.btnSubmit, true)
      I.click(this.textBox.btnSubmit)
    },

    async seeFullNameAs(expected){
      const actual = await I.grabTextFrom(this.textBox.lbFullName)
      return (actual).includes(expected)
    },

    async seeEmailAs(expected){
      const actual = await I.grabTextFrom(this.textBox.lbEmail)
      return (actual).includes(expected)
    },

    async seeCurrentAddressAs(expected){
      const actual = await I.grabTextFrom(this.textBox.lbCurrentAddress)
      return (actual).includes(expected)
    },

    async seePermanentAddressAs(expected){
      const actual = await I.grabTextFrom(this.textBox.lbPermanentAddress)
      return (actual).includes(expected)
    },

    /***
     * Action for Radio Button
     */
    async checkYes(){
      await I.checkOption(this.radioButton.btnYes)
    },

    async checkImpressive(){
      await I.checkOption(this.radioButton.btnImpressive)
    },

    async checkOption(name){
      await I.checkOption(this.getButtonLocator(name))
    },

    async seeButtonIsDisabled(name){
      await I.seeAttributesOnElements(this.getButtonLocator(name),{disabed})
    },

    /***
     * Action for Buttons
     */
    async doubleClick(){
        await I.click(this.button.btnDoubleClick)
    },

    async rightClick(){
        await I.click(this.button.btnRightClick)
    },

    async clickMe(){
        await I.click(this.button.btnClickMe)
    },

    async seeMessageAs(expected){
        await I.see(expected);
    }

}
