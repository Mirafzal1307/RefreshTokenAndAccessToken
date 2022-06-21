import {Response} from "miragejs";

export function routes () {
    this.passthrough("http://localhost:8081");
    this.post ('/login', async (schema, request) => {
        const sendData  = JSON.parse(request.requestBody);
        const {username, password} = schema.db.auths[0]
        if (sendData.username === username && sendData.password === password) {
            return schema.db.allTokens[0]
        }
        // console.log(username, password, sendData)
    })
    this.post ('/refresh', async (schema, request) => {
        // console.log(Response, request);
      return new Response(401, { some: 'header' }, { error: ['Неверный пароль'] })
        const checkToken = schema.db.allTokens[0]
        // const sendData  = JSON.parse(request.requestBody);
        // if (sendData.refreshToken === schema.db.allTokens[0].refreshToken) {
        //     return {
        //         status: 200,
        //         accessToken: schema.db.allTokens[0].accessToken,
        //         refreshToken: schema.db.allTokens[0].refreshToken
        //     }
        // }
        // console.log(sendData, checkToken)
    })
    this.post ('/getrefresh', async (schema, request) => {
        const data  = {
            accessToken: schema.db.allTokens[0].refreshToken,
            refreshToken: schema.db.allTokens[0].accessToken
        }
        return data
    })
    this.get ('/check-toke', async (schema, request) => {
        // debugger
        // console.log(request);
        if (schema.db.allTokens[0].refreshToken === request.requestHeaders.accessToken ) {

            return schema.db.allTokens[0]
        }
    })
}
