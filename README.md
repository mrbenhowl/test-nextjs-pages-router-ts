Goals

- [x] Add SSR page
- [ ] Unit test SSR page with mocking
- [ ] Add client side API call
- [ ] Unit test client side component with mocking
- [x] integrate vanilla-extract (global)
- [x] integrate vanilla-extract (component)
- [ ] Add theme file for vanilla-extract and use in global and component level
- [ ] unit test with vanilla-extract
- [x] add a theme for using vanilla-extract
- [ ] add playwright for e2e
- [ ] add code coverage report
- [ ] auth / rerouting if not logged-in

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


jest
pnpm add -D @testing-library/react jest

pnpm add -D @testing-library/react ts-jest @jest/globals
npx ts-jest config:init


mock service worker for both client and server mocking
https://github.com/vercel/next.js/pull/13731
https://github.com/vercel/next.js/tree/canary/examples/with-msw
https://www.codewithyou.com/blog/api-mocking-example-mock-service-worker
npm install msw
npx msw init ./public
add request handler, mock browser and server - see mocks/unit