export const formatSize = (size) => {
    if (size > 1024 * 1024 * 1024) {
        return (size / (1024 * 1024 * 1024)).toFixed(1) + "Gb"
    } else if (size > 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(1) + "Mb"
    } else if (size > 1024) {
        return (size / 1024).toFixed(1) + "Kb"
    } else {
        return size + "B"
    }
}

export const fileNameFormat = (str) => {
    const reg = /(?:\.([^.]+))?$/
    let format = reg.exec(str)
    const name = str.substr(0, format.index)
    format = format[0]

    return {
        format,
        name,
    }
}
