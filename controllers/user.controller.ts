import { Request, Response } from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "./user.model";

export const insertUser = async (req: Request, res: Response) => {
  try {
    const { username, password, firstName, lastName } = req.body;
   

    const newUser = await createUser({ username, password, firstName, lastName });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchUser = async (req: Request, res: Response) => {
  try {
const {id  } = req.params; 
    const user = await getUserById(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "wonff" });
  }
};

export const modifyUser = async (req: Request, res: Response) => {
  try {
const {id  } = req.params;
   const data = req.body;
    const updatedUser = await updateUser(id, data);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "wonff" });
  }
};

export const removeUser = async (req: Request, res: Response) => {
  try {
            const {id  } = req.params;
    await deleteUser(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
