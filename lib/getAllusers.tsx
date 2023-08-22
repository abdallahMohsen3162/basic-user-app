import React from 'react'

export default async function getAllusers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");    
    return res.json();
}
