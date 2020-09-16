//Создаем маршруты, которые орабатываеют создание и авторитизацию пользователей
// ВСЕ ФУНКЦИЯ АСИНХРОННЫ поэтому await

const Router = require('express')
const config = require('config')
const User = require('../models/Users') // имортируем модель 
const bcrypt = require('bcryptjs') // для hash пароля
const {check, validationResult} = require("express-validator")
const jwt = require('jsonwebtoken') // Создает токен
const router = new Router() // обратка запроса
const authMiddleware = require('../middleware/auth.middleware')

const fileService = require('../services/fileService')
const File = require('../models/File')


// Обрабатываем пост запрос на регистрацию
// req = Запрос, res = Ответ
router.post('/registration', 
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
    ],
    async (req, res) => {
    try {
        //Получаем результат валидации и проверяем есть ли ошбки
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message: 'Uncorrect request', errors})
        }

        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if(candidate) {
            return res.status(400).json({message: `User with email: ${email} alredy exist!` })
        }

        // Защифровка пароля
        const hashPassword = await bcrypt.hash(password, 7)
        
        const user =  new User({email, password: hashPassword})
        await user.save()
        await fileService.сreateDir(new File({user:user.id, name: ''}))
        return res.json({message: 'User was created!'})
        
    } catch (error) {
        console.log(error)
        res.send({message: 'Server error!'})
    }
})

router.post('/login',
    async (req, res) => {
    try {
        const secretKey = config.get('secretKey')

        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }

        //Провека на совпадение Введенного и Зашифрованого пароля
        const isPassValid = bcrypt.compareSync(password, user.password)
        if(!isPassValid) {
            return res.status(400).json({message: "Invalid password"})
        }

        const token = jwt.sign({id: user.id}, secretKey, {expiresIn: '1h'})
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })

    } catch (error) {
        console.log(error)
        res.send({message: 'Server error!'})
    }
})

// Используем middleWare Для побочки
// проверяем наличие пользователя
router.get('/auth', authMiddleware,
    async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id})
        const secretKey = config.get('secretKey')

        const token = jwt.sign({id: user.id}, secretKey, {expiresIn: '1h'})

        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })
    } catch (error) {
        console.log(error)
        res.send({message: 'Server error!'})
    }
})

module.exports  = router