import {Factory} from 'miragejs'
const fixture  = {
   auth:Factory.extend({
       username: 'admin',
       password: '123'
   }),
    allToken: Factory.extend({
          status: 200,
         accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTc0OTg4OCwiaWF0IjoxNjU1NzQ5ODg4fQ.vR-4DblzFx0EzO5OH8IFO_U_qgv_QchRrIG2jrKp5BI',
        refreshToken: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTc0OTgzNCwiaWF0IjoxNjU1NzQ5ODM0fQ.uFSnspsjcZfExNc4-3VEXFlFl1V8A35PN1if0kgimOc'
    })
}
export default fixture
