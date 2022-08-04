import { Router } from "express";
import { getHomepage, loginUser, registerUser } from "../Controller/UsersController";
import { VerifyToken } from "../Middleware/VerifyToken";

const router =Router()


router.post('/login',loginUser)
router.post('/signup', registerUser)
router.get('/homepage',VerifyToken,getHomepage)

export default router