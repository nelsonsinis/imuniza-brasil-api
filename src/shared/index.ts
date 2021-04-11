import * as helpers from './helpers';
import * as utils from './utils';

export class Shared {
  public helpers;

  public utils;

  constructor() {
    this.helpers = helpers;
    this.utils = utils;
  }
}
