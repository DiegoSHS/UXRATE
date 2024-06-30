export const urlValidator = (urlString) => {
    let url, err = false
    try {
        const ishttps = urlString.substring(0, 8)
        const ishttp = urlString.substring(0, 7)
        url = new URL(urlString)
        const canParse = URL.canParse(urlString)
        if (
            (
                ishttps === 'https://'
                || ishttp === 'http://'
            )
            && canParse
        ) {
            err = false
        } else {
            err = true
        }
    } catch (error) {
        err = true
    }
    return err
}