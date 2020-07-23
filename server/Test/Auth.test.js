const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');

describe("Authentication", function(done){
    it("Testing Register router", function(done){
        request(app).post('/api/auth/Register')
        .send({
            "username": "Amazing-App",
            "email": "Amazing@gmail.com",
            "password": "password@Newtech",
            "image": "base64"
        })
        .then((res)=>{
            const body = res.body;
            expect(body).to.contain.property('_id')
        })
        .catch(err)
        {
            done(err)
        }
       
    })
})