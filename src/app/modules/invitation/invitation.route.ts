import express from 'express';
import {
  createInvitationHandler,
  getInvitationsHandler,
  respondToInvitationHandler,
  deleteInvitationHandler,
} from './invitation.controller';

const router = express.Router();

router.post('/', createInvitationHandler);
router.get('/:userId', getInvitationsHandler);
router.patch('/respond/:invitationId', respondToInvitationHandler);
router.delete('/:invitationId', deleteInvitationHandler);

export const InvitationRoute = router;
