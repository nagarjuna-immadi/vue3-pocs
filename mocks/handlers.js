import { rest } from 'msw';

export default [
  // eslint-disable-next-line
  rest.get('/message', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'MSW is working!',
      }),
    );
  }),
];
