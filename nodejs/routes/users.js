import express from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.js"


const router = express.Router()

//semua route disini akan berawalan /users
// menampilkan semua user
router.get('/', getUsers)

// menambahkan user
router.post('/', createUser)

//find by id
router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;