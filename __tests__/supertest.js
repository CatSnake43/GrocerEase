const request = require('supertest');


const server = 'http://localhost:3000';

/*
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
*/
describe('Route Integration', () => { //declaring what are we testing 
    describe('/', () => { //what route path are we testing
        describe('GET', () => { //what method are we looking at for that path
            it('responds with 200 status and text/html content type', () => {
                return request(server)
                .get('/')//
                .expect('Content-Type', /text\/html/)//content type
                .expect(200); //status 200 OK
            });
        });
    });
    

    describe('/api', () => {
        const params = {
            ingr: ['chicken'],
            cuisineType: ['American'],
            mealType: ['Dinner'],
            dishType: ['Main Course']
        };
        const params2 = {
            ingr: ['potato', 'cheese'],
            cuisineType: ['American'],
            mealType: [],
            dishType: ['Side dish']
        }
        describe('GET', () => {
            it('responds with status 200 if recipe found', () => {
                return request(server)
                .get('/api')
                .query(params)
                .expect('Content-Type', /application\/json/)
                .expect(200);
            });
            it('responds with status 204 and send to front end if recipe not found', () => {
                return request(server)
                .get('/api')
                .query(params2)
                .expect(204);
            });
        });
    });

    describe('/login', () => {
        const user = {
            username: 'nam',
            password: '12345'
        }
        const user2 = {
            username: 'erpuhergpopierjgm[a[uo4h',
            password: 'jflkdpfoaeijfaoeijsfioj'
        }
        describe('POST', () => {
            xit('responds with status 200 when user log in successfully.', () => {
                return request(server)
                .post('/login')
                .send(user)
                .expect(200)
                .expect((response)=> {response.text.includes('login successful. redirecting to homepage')});
            });
            it('responds with status 400 when user log in unsuccessfully.', () => {
                return request(server)
                .post('/login')
                .send(user2)
                .expect(400);
            });
        });
    });
    describe('/signup', () => {
        const user = {
            username: 'nam3',
            password: '12345',
            restrictions: ['Alcohol-Free']
        }
        // const user2 = {
        //     username: 'erpuhergpopierjgm[a[uo4h',
        //     password: 'jflkdpfoaeijfaoeijsfioj'
        // }
        describe('POST', () => {
            it('responds with status 200 when user create successfully.', () => {
                return request(server)
                .post('/signup')
                .send(user)
                .expect(200)
                .expect((response)=> {response.text.includes('successful signup. redirecting to homepage')});
            });
            // it('responds with status 400 when user log in unsuccessfully.', () => {
            //     return request(server)
            //     .post('/login')
            //     .send(user2)
            //     .expect(400);
            // });
        });
    });
});




module.exports = server;

