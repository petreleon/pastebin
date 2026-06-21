import type { FastifyInstance } from "fastify";

export default class TextView {
    fastify: FastifyInstance;
    constructor(fastify: FastifyInstance) {
        this.fastify = fastify;
        fastify.get("/", async (req, reply) => {
            return reply.viewAsync("list_text.ejs", []);
        })
    }

    

}
