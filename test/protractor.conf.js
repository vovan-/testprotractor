exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

/*  capabilities: {
    'browserName': 'phantomJS'
  },*/

  //chromeOnly: true, //directConnect:true,
/*  capabilities: {
    'browserName': 'phantomJS',
    "chromeOptions": {
      binary: 'C:/Users/Vovan.Lenovo-PC/AppData/Local/Google/Chrome SxS/Application/chrome.exe',
      args: [],
      extensions: [],
    }
  },*/

  capabilities: {
    'browserName': 'phantomjs',

    /*
     * Can be used to specify the phantomjs binary path.
     * This can generally be ommitted if you installed phantomjs globally.
     */
    'phantomjs.binary.path': require('phantomjs').path/*,

    *//*
     * Command line args to pass to ghostdriver, phantomjs's browser driver.
     * See https://github.com/detro/ghostdriver#faq
     *//*
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']*/
  },

//  chromeOnly: true,
//  directConnect:true,
  baseUrl: 'http://localhost:9000/'
 // seleniumAddress: 'http://localhost:4444/wd/hub',

/*  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }*/
};
