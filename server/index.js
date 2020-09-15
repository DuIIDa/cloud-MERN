//Импортируем все зависимости дял работы сервера
const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routers/auth.routes')

const corsMiddleware = require('./middleware/cors.middleware')

const app = express() //Создаем сервер

// Получаем номер порта(Предварительно)
// Создав папку с default.json 
const PORT = config.get('serverPort')
const URL = config.get('dbUrl')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)


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