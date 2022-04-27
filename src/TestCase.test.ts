import { TestCase } from './TestCase';
import { WasRun } from './WasRun';
import { assertEquals } from './assert';

export class TestCaseTest extends TestCase {

  constructor(testMethod: string) {
    super(testMethod);
  }

  testRunning(): void {
    const wasRun = new WasRun('testMethod');
    assertEquals(false, wasRun.wasRun);
    wasRun.run();
    assertEquals(true, wasRun.wasRun);
  }

  testSetup(): void {
    const wasRun = new WasRun('testMethod');
    assertEquals(false, wasRun.wasSetup);
    wasRun.run();
    assertEquals(true, wasRun.wasSetup);
  }
}
