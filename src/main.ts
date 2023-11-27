export class Response<T = any> {
  private data?: T;
  private code?: number;
  private message?: string;

  public constructor(payload: T, code?: number, message?: string) {
    if (typeof payload !== 'undefined') {
      this.data = payload;
    }
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

  public toString() {
    return JSON.stringify(this);
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
  public constructor(code: number, message: string, details?: any) {
    super(details, code, message);
  }
}
