#! /usr/bin/env node
let users = [
    {
        name: "Naseer",
        accountNumber: 112233,
        pinCode: "12345",
        balance: Math.ceil(Math.random() * 100000 + 1),
    },
    {
        name: "Atif",
        accountNumber: 445566,
        pinCode: "12345",
        balance: Math.ceil(Math.random() * 100000 + 1),
    },
];
export default users;
