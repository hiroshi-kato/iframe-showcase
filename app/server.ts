import { showRoutes } from 'hono/dev';
import { createApp } from 'honox/server';
import { secureHeaders } from 'hono/secure-headers';

const app = createApp();
app.use(
  '*',
  secureHeaders({
    xFrameOptions: 'ALLOW-FROM https://timetreeapp.com',
    contentSecurityPolicy: {
      frameAncestors: ["'self'", 'https://timetreeapp.com'],
    },
  })
);

showRoutes(app);

export default app;
