import express from 'express';
import passport from 'passport';
import { ensureAuthenticated, forwardAuthenticated, addUserToLocals } from '../middleware/authMiddleware.js';
import { loginUser, registerUser, githubAuthCallback, forgotPassword, resetPassword, logoutUser } from '../controllers/authController.js';

const router = express.Router();

router.use(addUserToLocals);

router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
router.post('/login', passport.authenticate('login', { failureRedirect: '/login', failureFlash: true }), loginUser);

router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));
router.post('/register', registerUser);

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), githubAuthCallback);

router.post('/forgot', forgotPassword);
router.put('/reset/:token', resetPassword);

router.get('/logout', logoutUser);

export default router;



























































