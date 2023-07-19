Goals

[] Add SSR page
[] Unit test SSR page with mocking
[] Add client side API call
[] Unit test client side component with mocking
[/] integrate vanilla-extract (global)
[/] integrate vanilla-extract (component)
[] Add theme file for vanilla-extract and use in global and component level
[] unit test with vanilla-extract
[] add a theme for using vanilla-extract
[] add playwright for e2e
[] add code coverage report
[] auth / rerouting if not logged-in



vanilla-extract
pnpm add -D @vanilla-extract/babel-plugin @vanilla-extract/css @vanilla-extract/next-plugin @vanilla-extract/webpack-plugin 

mountebank
pnpm add -D mountebank
Add mock command to package.json
  - "mock": "mb --configfile mocks/imposters.ejs --loglevel debug"
Folder mocks
  imposters
    sampleImposter.ejs
  stubs
    sampleStub.json
  imposters.ejs
