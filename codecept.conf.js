exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://demoqa.com/',
      browser: 'chrome',
      host: 'selenoid',
      windowSize: '1280 x 1024',
      desiredCapabilities: {
        chromeOptions: {
          args: [
            '--no-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--ignore-certificate-errors',
          ]
        },
        'selenoid:options': {
          enableVNC: true,
          enableVideo: true,
        }
      }
    },
    Hooks: {
      require: './hooks_helper.js',
    },
  },
  include: {
    I: './steps_file.js',
    DashBoard: './pages/DashBoard.js',
    Elements: './pages/Elements.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },
  plugins: {
    allure: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'Deha Automation Package'
}
