import ViewClient from "@fastify/view";
import {type FastifyInstance} from "fastify";
import ejs from "ejs";

function registerEJS (fastifyCore: FastifyInstance) {
    fastifyCore.register(ViewClient, {
        engine: {
            ejs: ejs
        }
    });
}

export default registerEJS;
