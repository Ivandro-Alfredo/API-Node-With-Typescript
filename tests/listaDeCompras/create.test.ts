import {expect, jest, test,describe, it} from '@jest/globals';
import { testServer } from './../jest.setup';
import { StatusCodes } from 'http-status-codes';

describe('create lista  de compra teste', ()=>{
    test('testando a criacao', async () =>{
        const resp = await testServer
                            .post('/listadecompras/create')
                            .send({
                                uuid:'www23',
                                nome:'fa'})
        expect(resp.statusCode).toEqual(StatusCodes.CREATED);
        expect(resp.body).toHaveProperty('error.body.nome')
    });
});