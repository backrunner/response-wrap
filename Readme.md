# response-wrap

Simple response wrapper classes for Node.js servers.

This package was created by [create-a-typescript-lib](https://github.com/backrunner/create-a-typescript-lib).

## Usage

Step 1: Install this package

```bash
npm install response-wrap -S
```

Step 2: Import and use it

```ts
import Koa from 'koa';
import KoaRouter from '@koa/router';
import { Response, SuccessResponse, ErrorResponse } from 'response-wrap';

interface ResponsePayload {
  token: string;
}

const app = new Koa();
const router = new Router();

router.get('/res', (ctx, next) => {
  ctx.body = new Response<ResponsePayload>(
    {
      token: 'abc123',
    },
    0,
    'success',
  );
});

router.get('/error', (ctx, next) => {
  ctx.body = new ErrorResponse(-1, 'internal server error');
});

router.get('/successRes', (ctx, next) => {
  ctx.body = new SuccessResponse<ResponsePayload>({
    token: 'abc123',
  });
});
```

## License

MIT
