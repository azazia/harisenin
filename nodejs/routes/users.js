import express from "express";
import {v4 as uuidv4} from "uuid"

const router = express.Router()

const users = []

//semua route disini akan berawalan /users
// menampilkan semua user
router.get('/', (req,res) =>{
    res.send(users)
})

// menambahkan user
router.post('/', (req,res) =>{
    const user = req.body

    users.push({...user, id: uuidv4()})

    res.send(`user ${user.firstName} telah ditambahkan ke database!`)
})

export default router;