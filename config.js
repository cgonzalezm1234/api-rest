module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/Estudio',
    src: process.env.SRC || '/Users/macbookair/Desktop/heroes-front/src/'
        //src: process.env.SRC || '/Users/macbookair/Desktop/heroes-front/dist/spa/'
}