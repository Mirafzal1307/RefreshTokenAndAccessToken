import {createServer} from 'miragejs';
import {models} from './Models'
import {seeds} from "./seeds";
import {routes} from './routes'
import fixture from './factories'

export function makeServer() {
    let server = createServer({
        factories: fixture,
        models: models,
        seeds(server) {
            seeds(server)
        },
        routes,
    });
    return server;
}
