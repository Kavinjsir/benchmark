import { Options } from "k6/options";

import get200StatusTest from './get-200-status-test';
import post400StatusTest from './post-400-status-test';
// import postFileTest from './post-file-test';

export let options: Options = {
  vus: 50,
  duration: "10s",
};

export default (): void => {
  get200StatusTest()
  post400StatusTest()
  // postFileTest()
}
