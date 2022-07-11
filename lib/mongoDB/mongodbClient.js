const fetchUrl = require('fetch').fetchUrl
var baseURL = process.env.MONGODB_URI

module.exports = class {
    constructor(connection, options) {
        this.mongoBaseURL = baseURL
        this.database = connection.database
        this.collection = connection.collection
        this.dataSource = connection.dataSource
        this.headers = {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.MONGODB_API_KEY,
        }
        this.timestamp = !options ? true : options.timestamp === undefined ? true : options.timestamp
    }

    find(filter) {
        return new Promise((resolve, reject) => {
            const payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
                "filter": filter,
            }

            /*===== fetch MongoDB API =====*/
            fetchUrl(`${this.mongoBaseURL}find`, {
                headers: this.headers,
                method: 'POST',
                payload: JSON.stringify(payload)
            }, (error, meta, body) => {
                !error ? resolve(JSON.parse(body.toString())) : reject(error)
            })
        })
    }

    update(filter, data) {
        return new Promise((resolve, reject) => {
            /*===== specify request operator =====*/
            var operator = data.length > 1 ? 'updateMany' : 'updateOne';

            /*===== request payload =====*/
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
                "filter": filter,
                "update": { "$set": data }
            }

            /*===== fetch MongoDB API =====*/
            fetchUrl(`${this.mongoBaseURL}${operator}`, {
                headers: this.headers,
                method: 'POST',
                payload: JSON.stringify(payload)
            }, (error, meta, body) => {
                !error ? resolve(JSON.parse(body.toString())) : reject(error)
            })
        })
    }

    insert(data) {
        return new Promise((resolve, reject) => {
            /*===== specify request operator =====*/
            var operator = typeof (data) === Array ? 'insertMany' : 'insertOne'

            /*===== request payload =====*/
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
            }

            /*===== append data to request =====*/
            typeof (data) === Array ? payload['documents'] = data : payload['document'] = data

            /*===== add timestamp =====*/
            if (this.timestamp) data['createdAt'] = { "$date": { "$numberLong": `${new Date().getTime()}` } };

            /*===== fetch MongoDB API =====*/
            fetchUrl(`${this.mongoBaseURL}${operator}`, {
                headers: this.headers,
                method: 'POST',
                payload: JSON.stringify(payload)
            }, (error, meta, body) => {
                !error ? resolve(JSON.parse(body.toString())) : reject(error)
            })
        })
    }
    delete(filter, all) {
        return new Promise((resolve, reject) => {
            /*===== specify request operator =====*/
            var operator = all === true ? 'deleteMany' : 'deleteOne';

            /*===== request payload =====*/
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
                "filter": filter
            }

            /*===== fetch MongoDB API =====*/
            fetchUrl(`${this.mongoBaseURL}${operator} `, {
                headers: this.headers,
                method: 'POST',
                payload: JSON.stringify(payload)
            }, (error, meta, body) => {
                !error ? resolve(JSON.parse(body.toString())) : reject(error)
            })
        })
    }

    replace(filter, data) {
        return new Promise((resolve, reject) => {
            /*===== set replacement timestamp =====*/
            data['replacedAt'] = { "$date": { "$numberLong": `${new Date().getTime()}` } }

            /*===== request payload =====*/
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
                "filter": filter,
                "replacement": data
            }

            /*===== fetch MongoDB API =====*/
            fetchUrl(`${this.mongoBaseURL}replaceOne`, {
                headers: this.headers,
                method: 'POST',
                payload: JSON.stringify(payload)
            }, (error, meta, body) => {
                !error ? resolve(JSON.parse(body.toString())) : reject(error)
            })
        })
    }
}