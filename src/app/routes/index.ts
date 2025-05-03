import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/User/User.route';
import { EventRoutes } from '../modules/events/event.routes';
import { InvitationRoute } from '../modules/invitation/invitation.route';
// import { PaymentRoute } from '../modules/payment/payment.route';
import { ParticipantRoutes } from '../modules/participant/participant.routes';
 
const router = express.Router();

type Route = {
  path: string;
  route: express.Router;
};

const routes: Route[] = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/event',
    route: EventRoutes,
  },
  {
    path: '/invitations',
    route: InvitationRoute,
  },
  // {
  //   path: '/pay',
  //   route: PaymentRoute,
  // },
  {
    path: '/participant',
    route: ParticipantRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
