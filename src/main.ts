import { TestCaseTest } from './TestCase.test';

function main() {
  new TestCaseTest('testRunning').run();
  new TestCaseTest('testSetup').run();
}

main();
