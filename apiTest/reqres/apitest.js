const supertest = require ('supertest');
const path = require('../data/baseurl/path.json');
const url = require('../data/baseurl/baseConfig');
const assert = require('chai').expect;
const faker = require('../credential');
var fs = require('fs');

describe('API test reqres.in', function() {
    it('user want to login', async() => {
        var tasks = 
        {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };
        const res = await supertest(url.config.reqres)
        .post(path.baseurl.reqres.post_login)
        .send(tasks)
        .expect(200)
        assert(res.body)
        console.log(res.body)
    });

    it('user want to see list user', async() => {
        const res = await supertest(url.config.reqres)
        .get(path.baseurl.reqres.get_list)
        .expect(200)
        assert(res.body.data)
        console.log(res.body)
    });

    it('user want to update detail user', async() => {
        var tasks = 
        {
            "name": "morpheus",
            "job": "zion resident"
        };
        const res = await supertest(url.config.reqres)
        .post(path.baseurl.reqres.put_update)
        .send(tasks)
        .expect(201)
        assert(res.body.name).to.be.equal("morpheus")
        console.log(res.body)
    });

    it('user want to delete user', async() => {
       
        const res = await supertest(url.config.reqres)
        .del(path.baseurl.reqres.del_user)
       // .send(tasks)
        .expect(204)
        assert(res.body)
        console.log(res.body)
    });

})