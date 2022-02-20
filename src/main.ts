export class Response<T> {
  private data: T;
  private code?: number;
  private message?: string;

  public constructor(payload: T, code?: number, message?: string) {
    this.data = payload;
    this.code = code;
    this.message = message;
  }

  public stringify() {
    return JSON.stringify(this);
  }

  public setCode(code: number) {
    this.code = code;
  }

  public setMessage(message: string) {
    this.message = message;
  }

  public setData(payload: T) {
    this.data = payload;
  }
}

export class ResponseWithTs<T> extends Response<T> {
  private server_ts = Date.now();
}

export class SuccessResponse<T> extends Response<T> {
  public constructor(payload: T) {
    super(payload, 0, 'success');
  }
}

export class ErrorResponse extends Response<undefined> {
  public constructor(code: number, message: string) {
    super(undefined, code, message);
  }
}
