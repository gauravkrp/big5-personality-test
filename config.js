/* module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Gibberish, jibberish, jibber-jabber and gobbledygook',
  DB_CONNECTION: process.env.DB_CONNECTION || 'username:password@localhost/bigfive',
  DB_COLLECTION: process.env.DB_COLLECTION || 'results',
  URL: process.env.URL || 'http://localhost:3000'
} */

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Gibberish, jibberish, jibber-jabber and gobbledygook',
  DB_CONNECTION: process.env.DB_CONNECTION || 'mongodb+srv://gaurav:Golu01%40gkp@cluster0-llu9u.mongodb.net/results',
  DB_COLLECTION: process.env.DB_COLLECTION || 'results',
  URL: process.env.URL || 'http://localhost:3000'
}
//mongodb+srv://gaurav:Golu01@gkp@cluster0-llu9u.mongodb.net/test?retryWrites=true&w=majority