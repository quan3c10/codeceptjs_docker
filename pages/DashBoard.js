const { I } = inject();

module.exports = {

    button: {
        elements: "//h5[text()='Elements']",
        forms: "//h5[text()='Forms']",
        alertsFrameWindows: "//h5[text()='Alerts, Frame & Windows']",
        widgets: "//h5[text()='Widgets']",
        interactions: "//h5[text()='Interactions']",
        bookStoreApplication: "//h5[text()='Book Store Application']",
        objects: "//h5[text()='${name}']"
    },
    url: '/',

    async playWithElement() {
        I.click(this.button.elements)
    },

    async playWithForms() {
        I.click(this.button.forms)
    },

    async playWithAlerts() {
        I.click(this.button.alertsFrameWindows)
    },

    async playWithWidgets() {
        I.click(this.button.widgets)
    },

    async playWithInteractions() {
        I.click(this.button.interactions)
    },

    async playWithApplication() {
        I.click(this.button.bookStoreApplication)
    },

    async clickButton(name) {
        const locator = "//h5[text()='" + name + "']"
        I.scrollIntoView(locator)
        I.click(locator)
    },

    async open() {
        I.amOnPage(this.url)
    },
}
