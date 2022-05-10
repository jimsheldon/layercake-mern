/**
 * It's a unit test, so mock the DB connection obj.
 */
// jest.mock('../db/mongoConnectionManager')

// const record = require('./record')
const request = require('supertest')

describe('Record api tests', () => {
    /**
     * Hooks
     */
    afterEach(async () => {
        await server.close()
    })

    beforeEach(() => {
        // eslint-disable-next-line global-require
        server = require('../server')
        jest.setTimeout(30000)
    })

    /**
     * Tests
     */

    it('a get to /record should return a list of records', async () => {
        const result = await request(server).get('/record')

        // expect(result.statusCode).toBe(200)
    })

    test('demo test', () => {
        expect(true).toBe(true)
    })

    test('get all records', () => {
        //response = record
    })
})
