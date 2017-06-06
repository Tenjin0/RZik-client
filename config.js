var config = {
    EMAIL_PASS : process.env.EMAIL_PASS || 'pass'
}

config.API_HOST = process.env.NODE_ENV  ? process.env.API_HOST : 'localhost'
config.API_PORT = process.env.NODE_ENV  ? process.env.API_PORT : '3000'

moule.exports = config
