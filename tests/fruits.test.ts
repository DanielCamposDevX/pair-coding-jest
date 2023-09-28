import fruits from "data/fruits"
import app from "index";
import supertest from "supertest";

describe("Post /fruits", () => {
    it("/post", async () => {
        const fruit = {
            name: "banana",
            price: 200
        }
        const res = await supertest(app).post("/fruits").send(fruit);
        expect(res.status).toEqual(201);
    })

    it("/post 409",async () => {
        const fruit = {
            name: "banana",
            price: 200
        }
        const res = await supertest(app).post("/fruits").send(fruit);
        expect(res.status).toEqual(409);
    })

    it("/post 422",async () => {
        const fruit = {
            name: "banana"
        }
        const res = await supertest(app).post("/fruits").send(fruit);
        expect(res.status).toEqual(422);
    })
})





describe("get /fruits", () => {

    it("/get by id 404",async () => {
        const res = await supertest(app).get("/fruits/1000000");
        expect(res.status).toEqual(404);
    })


    it("/get by id 400",async () => {
        const res = await supertest(app).get("/fruits/asi");
        expect(res.status).toEqual(400);
    })

    it("/get all",async () => {
        const res = await supertest(app).get('/fruits');
        expect(res.body).toEqual(fruits);
    })

    it("/get by id 200",async () => {
        const res = await supertest(app).get("/fruits/1");
        expect(res.body).toEqual(fruits[0])
    })

})