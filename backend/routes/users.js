import express from "express";
const router = express.Router()
import {deleteUser, getAllUser, getSingleUser, updateUser} from "../controllers/userController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";


router.put("/:id",verifyUser, updateUser);
router.delete("/:id",verifyUser, deleteUser);
router.get("/:id",verifyUser, getSingleUser);
router.get("/",verifyAdmin, getAllUser);

export default router;