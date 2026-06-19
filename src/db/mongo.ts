import MongoClient from "@fastify/mongodb";
import {type FastifyInstance} from "fastify";

function registerMongo (fastifyCore: FastifyInstance) {
    fastifyCore.register(MongoClient, {
        // force to close the mongodb connection when app stopped
        // the default value is false
        forceClose: true,
        url: process.env.MONGODB_URL
    });
}

export default registerMongo;
