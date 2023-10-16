export const urlValidator = (urlString) => {
    let url, err = false
    try {
        const ishttps = urlString.substring(0, 8)
        const ishttp = urlString.substring(0, 7)
        url = new URL(urlString)
        if (ishttps !== 'https://' && ishttp !== 'http://') {
            err = true
        }
    } catch (error) {
        err = true
    }
    return err
}