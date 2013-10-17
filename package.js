Package.describe({
  summary: "A reactive router built on page.js"
});

Npm.depends({
  'connect': '2.7.10'
});

Package.on_use(function (api, where) {
  api.use('underscore', 'server');
  
  api.add_files('lib/router_server.js', 'server');
  api.add_files('lib/router_common.js', 'server');
  
  // for backward compat before Meteor linker changes
  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
  }
});


Package.on_test(function (api) {
  api.use('router', 'server');
  api.use('test-helpers', 'server');
  api.use('tinytest', 'server');
  
  api.use('http', 'server');
  api.add_files('tests/router_server_tests.js', 'server');
  
  api.add_files('tests/router_common_tests.js', 'server');
});
