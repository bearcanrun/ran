# RAN! Documentation

## Testing

RAN uses [Jest](https://facebook.github.io/jest/) as its testing framework. [Snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html) makes easy testing the UI for unexpected changes.

**Running tests**
When you run `yarn run dev:test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `yarn run dev` recompiles the code.

To update snapshots, run `yarn run test:u`.
To collect coverage information, run `yarn run test:coverage`.

**Note**
- RAN currently uses the Jest 21.3 beta, as it includes a [`requestAnimationFrame` polyfill](https://github.com/facebook/jest/issues/4545) that removes a related error when testing with React 16. Generally using a beta release is not ideal, but this issue will be watched and otherwise has no major effects on writing tests with Jest.

###Adding Enzyme###
Install from npm
```bash
yarn add enzyme enzyme-adapter-react-16 enzyme-to-json -D
```

Enzyme 3.x.x now [requires an adapter](https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16) to work with the specific React version being used. To configure the `enzyme-adapter-react-16` adapter for RAN, create file  _./tests/setupTests.js_ and add:
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

Add the Jest config in package.json:
```
"jest": {
  "setupTestFrameworkScriptFile": "<rootDir>/tests/setupTests.js",
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
}
```

RAN requires using the `setupTestFrameworkScriptFile` option to load the adapter _after_ the test framework is installed in the environment (like [create-react-app](https://github.com/facebookincubator/create-react-app/issues/3206)). This is instead of using jest.config.js or the Jest config option `setupFiles` which will throw an _unexpected token import_ error when running tests.
