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
- [x] play with mockoon


# Steps

## Vanilla-extract
- pnpm add -D @vanilla-extract/babel-plugin @vanilla-extract/css @vanilla-extract/next-plugin @vanilla-extract/webpack-plugin 

## Mountebank
- pnpm add -D mountebank
- Add mock command to package.json
  - "mock": "mb --configfile mocks/imposters.ejs --loglevel debug"
- Add mocks directory
  imposters
    sampleImposter.ejs
  stubs
    sampleStub.json
  imposters.ejs

## Mockoon 
- Download desktop app https://mockoon.com/
- https://mockoon.com/docs/latest/cors/#automatic-handling-of-cors-preflight-requests
- https://mockoon.com/docs/latest/cors/#add-cors-headers-to-the-environment-headers
- https://mockoon.com/tutorials/run-mock-api-anywhere-cli/

## jest
- pnpm add -D identity-obj-proxy 
- pnpm add -D jest @testing-library/react @testing-library/jest-dom @testing-library/jest-dom jest-environment-jsdom