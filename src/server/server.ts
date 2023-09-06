import express from 'express';

const server = express();

server.get('/',(request, response)=>{
    response.status(200).send("Welcome to our API");
})

export {server};