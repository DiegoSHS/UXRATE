const postRequest = async (route, body) => {
    try {
        const res = await fetch(route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await res.json()
        return data
    } catch (error) {
        return {
            error: { code: 500, message: `error al realizar petición ${error.message}` }
        }
    }
}

export const getRequest = async (route) => {
    try {
        const res = await fetch(route, {
            method: 'GET'
        })
        const data = await res.json()
        return data
    } catch (error) {
        return { msj: `error al realizar petición: ${error.message}`, err: 1 }
    }
}

export const saveRecord = async (record) => postRequest('/api', record)

export const deleteRecord = async (id) => postRequest(`/api/${id}`, 'del')

export const retrieveRecords = async () => getRequest('/api')
