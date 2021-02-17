// import pour les tests
var app = require("../app")
var request = require("supertest")

// test nouveau utilisateur avec email, si password vide
test("name", async (done) => {
    await request(app).post("/users/signUp")
      .send({ "email": "a@a" , "password":"" })
      .expect(200)
      .expect({ result: false, saveUser: null, error: [ 'champs vides' ] })
    
    done()
    })
  