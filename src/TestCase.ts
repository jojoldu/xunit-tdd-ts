export class TestCase {
  protected _name: string;

  constructor(testMethod: string) {
    this._name = testMethod;
  }

  run() {
    // @ts-ignore
    this[this._name](); // 지정된 테스트 메소드 실행
  }
}
