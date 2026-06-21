import type { FastifyInstance } from "fastify";

export default class TextRoute {
    fastify: FastifyInstance;
    constructor(fastify: FastifyInstance) {
        this.fastify = fastify;
    }
}