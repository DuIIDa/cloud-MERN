const fs = require('fs') // Модуль для работы с файлами

const config = require('config')
const File = require('../models/File')

class FileService {

    сreateDir(file) {
        const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
        return new Promise(((resolve, rejects) => {
            try {

                if(!fs.existsSync(filePath)) { // Если файл по этому пути существует то
                    fs.mkdirSync(filePath) // создаем папку
                    return resolve({message: 'File was created!'})
                } else { // если файл существует
                    return rejects({message: 'File alredy exist!'})
                }
            } catch (error) {
                return rejects({message: 'File error!'})
            }
        }))
    }

}

module.exports = new FileService()