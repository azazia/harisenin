import express from "express";
import {v4 as uuidv4} from "uuid"

const router = express.Router()

let users = []

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

//find by id
router.get('/:id', (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
})

router.delete('/:id', (req,res) => {
    const { id } = req.params

    users = users.filter((user) => user.id !== id)

    res.send(`user dengan id ${id} telah dihapus!`)
})

router.patch('/:id', (req,res) => {
    const { id } = req.params
    const { firstName, lastName, age} = req.body

    const user = users.find((user) => user.id === id)

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age

    res.send(`user dengan id ${id} telah diupdate!`)
})

export default router;