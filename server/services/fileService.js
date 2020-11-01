const fs = require('fs') // Модуль для работы с файлами

const config = require('config')
const File = require('../models/File')

class FileService {

    сreateDir(file) {
        const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
        return new Promise(((resolve, rejects) => {
            try {

                if(!fs.existsSync(filePath)) { // Если файл по этому пути не существует то
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

    deleteFile(file) {
        const path = this.getPath(file)
        if(file.type === 'dir') {
            fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }
    getPath(file) {
        return `${config.get('filePath')}\\${file.user._id}\\${file.path}`
    }

}

module.exports = new FileService()