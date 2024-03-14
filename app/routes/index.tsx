import { css } from 'hono/css';
import { createRoute } from 'honox/factory';
import Counter from '../islands/counter';
import Showcase from '../islands/showcase';

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Iframe';
  return c.render(
    <div class={className}>
      <h1 class='text-xl text-center mt-4 '>Hello, {name}!</h1>
      <Showcase />
    </div>,
    { title: name }
  );
});
