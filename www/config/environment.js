/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'zcash_bps',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//localhost:80/',

      // HTTP mining endpoint
      HttpHost: 'www.zcashbpsmining.io',
      HttpPort: 80,

      // Stratum mining endpoint
      StratumHost: 'zcashbpsmining.io',
      StratumPort: 80,

      // Fee and payout details
      PoolFee: '1%',
      PayoutThreshold: '0.5 ZEC',

      // For network hashrate (change for your favourite fork)
      BlockTime: 150
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:80/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
