import { Router } from "express";
import { insertUser, fetchUsers, fetchUser, modifyUser, removeUser } from "./user.controller";

const router = Router();

router.post("/", insertUser);        // Create
router.get("/", fetchUsers);         // Read all
router.get("/:id", fetchUser);       // Read single
router.put("/:id", modifyUser);      // Update
router.delete("/:id", removeUser);   // Delete

export default router;
