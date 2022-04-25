import { WasRun } from './wasRun';

function xunitRun() {
  const wasRun = new WasRun('testMethod');
  console.log(wasRun.wasRun); // false여야함
  wasRun.run();
  console.log(wasRun.wasRun); // true여야함
}

xunitRun();
