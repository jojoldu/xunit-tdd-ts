export class TestCase {
  protected _name: string;

  protected constructor(testMethod: string) {
    this._name = testMethod;
  }

  run() {
    this.setUp();
    // @ts-ignore
    this[this._name](); // 지정된 테스트 메소드 실행
  }

  setUp(): void {

  }

}
