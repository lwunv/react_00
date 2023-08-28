import { store, authActions, commonActions } from 'stores'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
}

interface FetchResponse {
    // Define the properties you expect in the fetch response
}

function request(method: RequestMethod) {
    return (url: string, body?: any) => {
        const requestOptions: RequestInit = {
            method,
            headers: authHeader(url)
        }
        if (body) {
            requestOptions.headers = { ...requestOptions.headers, 'Content-Type': 'application/json' };
            requestOptions.body = JSON.stringify(body);
        }
        // set loading
        store.dispatch(commonActions.setLoading(true))
        return fetch(url, requestOptions).then(handleResponse)
    }
}

function authHeader(url: string): Record<string, string> {
    const token = authToken()
    const isLoggedIn = !!token
    const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL || '')
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${token}` }
    } else {
        return {}
    }
}

function authToken(): string | undefined {
    return store.getState().auth.value?.token;
}

async function handleResponse(response: Response): Promise<any> {
    const isJson = response.headers?.get('content-type')?.includes('application/json')
    const data = isJson ? await response.json() : null

    if (!response.ok) {
        if ([401, 403].includes(response.status) && authToken()) {
            const logout = () => store.dispatch(authActions.logout())
            logout()
        }

        const error = (data && data.message) || response.status
        return Promise.reject(error)
    }

    // set loading
    store.dispatch(commonActions.setLoading(false))
    return data;
}
