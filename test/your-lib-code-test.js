'use strict';

import { expect } from 'chai';
import yourLibCode from '../index';

describe('your-lib-code', () => {
  it("your-lib-code default export returns 'sweet'", () => {
    expect(yourLibCode()).to.eql('sweet');
  });
});
