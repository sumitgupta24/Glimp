import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import { changeCurrentPassword, getCurrentUser, login, logout, refreshAccessToken, signup, updateAccountDetails } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(
    upload.fields([
        {
            name: "profilePicture",
            maxCount: 1
        }
    ]),
    signup
)

router.route("/login").post(login);
router.route("/logout").post(verifyJWT, logout);
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-details").post(verifyJWT, updateAccountDetails)

export default router