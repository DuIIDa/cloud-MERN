//Импортируем все зависимости дял работы сервера
const express = require('express')
const mongoose = require('mongoose')
const config = require('config') // для достования данных из конфига
const fileUpload = require('express-fileupload') // Для загрузки фалов на сервер

const authRouter = require('./routers/auth.routes')
const FileRouter = require('./routers/file.routes')

const corsMiddleware = require('./middleware/cors.middleware')

const app = express() //Создаем сервер

// Получаем номер порта(Предварительно)
// Создав папку с default.json 
const PORT = config.get('serverPort')
const URL = config.get('dbUrl')

app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', FileRouter)


// Функция для подключение к базе данных
// И запуск сервера
// try ... catch Для отловли ошибок
// Делаем ее async т.к подключаемся к базе
const start = async () => {
    try {
        await mongoose.connect(URL)

        // Пеер. параметр номер порта
        // 2 параметр фукнция вызывается сразу посде
        // запуска  сервера
        app.listen(PORT, () => {
            console.log('Server started on port', PORT);
        })
    } catch (error) {
        
    }
}

start()