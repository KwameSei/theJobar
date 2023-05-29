import express from 'express';
import {
    getUser,
    getUserConnections,
    addRemoveConnections,
    updateUser,
    deleteUser,
    getUsers,
    deleteUsers
    // blockUser,
    // unblockUser,
    // suspendUser,
    // unsuspendUser,
    // approveUser,
    // disapproveUser,
    // verifyUser,
    // unverifyUser,
    // subscribeUser,
    // unsubscribeUser,
    // promoteUser,
    // demoteUser,
} from '../controllers/userController.js';
import { verifyAuth } from '../middleware/auth.js';

const router = express.Router();

// const verifyAuthMiddleware = (requiredRoles) => {
//     return verifyAuth(requiredRoles);
// };

// READ ALL USERS
router.get('/:id', verifyAuth(['user', 'admin', 'superadmin']), getUser);
router.get('/', verifyAuth(['admin', 'superadmin']), getUsers);
router.get('/:id/connections', verifyAuth(['user', 'admin', 'superadmin']), getUserConnections);

// UPDATE USER
router.patch('/:id', verifyAuth(['user', 'admin', 'superadmin']), addRemoveConnections);
router.put('/:id', verifyAuth(['user', 'admin', 'superadmin']), updateUser);

// // BLOCK USER
// router.patch('/:id/block', verifyAuth(['admin', 'superadmin']), blockUser);
// router.patch('/:id/unblock', verifyAuth(['admin', 'superadmin']), unblockUser);

// // SUSPEND USER
// router.patch('/:id/suspend', verifyAuth(['admin', 'superadmin']), suspendUser);
// router.patch('/:id/unsuspend', verifyAuth(['admin', 'superadmin']), unsuspendUser);

// // APPROVE USER
// router.patch('/:id/approve', verifyAuth(['admin', 'superadmin']), approveUser);
// router.patch('/:id/disapprove', verifyAuth(['admin', 'superadmin']), disapproveUser);

// // VERIFY USER
// router.patch('/:id/verify', verifyAuth(['admin', 'superadmin']), verifyUser);
// router.patch('/:id/unverify', verifyAuth(['admin', 'superadmin']), unverifyUser);

// // SUBSCRIBE USER
// router.patch('/:id/subscribe', verifyAuth(['admin', 'superadmin']), subscribeUser);
// router.patch('/:id/unsubscribe', verifyAuth(['admin', 'superadmin']), unsubscribeUser);

// // PROMOTE USER
// router.patch('/:id/promote', verifyAuth(['admin', 'superadmin']), promoteUser);
// router.patch('/:id/demote', verifyAuth(['admin', 'superadmin']), demoteUser);

// DELETE USER
router.delete('/:id', verifyAuth(['admin', 'superadmin']), deleteUser);

// DELETE ALL USERS
router.delete('/', verifyAuth(['admin', 'superadmin']), deleteUsers);

export default router;
