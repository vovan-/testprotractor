var config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome',
     "chromeOptions": {
      binary: 'C:/Users/Vovan.Lenovo-PC/AppData/Local/Google/Chrome SxS/Application/chrome.exe',
      args: [],
      extensions: [],
    }
  },

//  chromeOnly: true,
//  directConnect:true,
  baseUrl: 'http://localhost:9000/',/**/
//  baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '9000'),
//  seleniumAddress: 'http://localhost:4444/wd/hub',
//seleniumAddress: 'http://localhost:4445/wd/hub',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

if (process.env.TRAVIS_BUILD_NUMBER) {
    config.sauceUser = 'vovan-',
    config.sauceKey = 'a3f0bcdc-778a-4402-89ea-981552518106',
    config.capabilities = {
      'browserName': 'chrome',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'App Tests'
    };
}

exports.config = config;