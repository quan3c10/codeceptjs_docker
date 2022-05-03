const Helper = require('@codeceptjs/helper');
const { I } = inject();

class Hooks extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // const { WebDriver } = this.helpers;
    // WebDriver.refreshPage();
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  _finishTest(){
    const { WebDriver } = this.helpers;
    WebDriver.closeCurrentTab();
  }

}

module.exports = Hooks;
