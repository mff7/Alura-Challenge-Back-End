const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Video = require("../../src/models/Video");
const request = require("supertest");
const app = require("../../src/app");

dotenv.config();

describe("#create", () => {
    beforeAll(async () => {
        mongoose
            .connect(process.env.MONGO_URL)
            .then(() => {})
            .catch((err) => {err});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("should create a doc into videos collection", async () => {
        const video = await new Video({
            categoryId: process.env.FIRST_CATEGORY,
            title: "test title",
            desc: "AAAAAAAAAAAAAAAAAAAA",
            url: "https://youtube.com"
        });

        const res = await request(app)
            .post("/videos")
            .send({
                categoryId: video.categoryId,
                title: video.title,
                desc: video.desc,
                url: video.url
            });

        expect(res.status).toBe(200);
    });
});
