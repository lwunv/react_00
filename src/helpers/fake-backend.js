export { fakeBackend }

// array in local storage for registered users
const usersKey = 'liam-users'
const recordsKey = 'liam-records'
let users = JSON.parse(localStorage.getItem(usersKey)) || [{id: 1, username: 'test', password: 'test', noti: 1}]
let records = JSON.parse(localStorage.getItem(recordsKey)) || 
    [
        {id: 1, type: 1, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 101, type: 1, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 102, type: 1, image: './images/m02.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 103, type: 1, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 104, type: 1, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 2, type: 2, image: './images/m02.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Lunch', time: '2021.05.17   23:25'},
        {id: 3, type: 3, image: './images/m03.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Dinner', time: '2021.05.17   23:25'},
        {id: 4, type: 4, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Snack', time: '2021.05.17   23:25'},
        {id: 5, type: 1, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 6, type: 2, image: './images/m02.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Lunch', time: '2021.05.17   23:25'},
        {id: 7, type: 3, image: './images/m03.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Dinner', time: '2021.05.17   23:25'},
        {id: 8, type: 4, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Snack', time: '2021.05.17   23:25'},
        {id: 9, type: 1, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 10, type: 2, image: './images/m02.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Lunch', time: '2021.05.17   23:25'},
        {id: 11, type: 3, image: './images/m03.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Dinner', time: '2021.05.17   23:25'},
        {id: 12, type: 4, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Snack', time: '2021.05.17   23:25'},
        {id: 13, type: 1, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 14, type: 2, image: './images/m02.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Lunch', time: '2021.05.17   23:25'},
        {id: 15, type: 3, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Dinner', time: '2021.05.17   23:25'},
        {id: 16, type: 4, image: './images/m03.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Snack', time: '2021.05.17   23:25'},
        {id: 17, type: 1, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 18, type: 2, image: './images/m02.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Lunch', time: '2021.05.17   23:25'},
        {id: 19, type: 3, image: './images/m03.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Dinner', time: '2021.05.17   23:25'},
        {id: 20, type: 4, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Snack', time: '2021.05.17   23:25'},
        {id: 21, type: 1, image: './images/m03.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Morning', time: '2021.05.17   23:25'},
        {id: 22, type: 2, image: './images/m02.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Lunch', time: '2021.05.17   23:25'},
        {id: 23, type: 3, image: './images/m03.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Dinner', time: '2021.05.17   23:25'},
        {id: 24, type: 4, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Snack', time: '2021.05.17   23:25'},
        {id: 25, type: 4, image: './images/m01.png', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', content: '05.21.Snack', time: '2021.05.17   23:25'},
    
    ]

function fakeBackend() {
    let realFetch = window.fetch
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500)
            // const regex = /page=(\d+)&size=(\d+)/
        
            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && opts.method === 'POST':
                        return authenticate()
                    case url.endsWith('/users/register') && opts.method === 'POST':
                        return register()
                    case url.endsWith('/records') && opts.method === 'GET':
                        return getRecords()
                    case url.match(/\/records\/page\/(\d+)\/type\/(\d+)$/) && opts.method === 'GET':
                        return getRecords()
                    case url.endsWith('/users') && opts.method === 'GET':
                        return getUsers()
                    case url.match(/\/users\/\d+$/) && opts.method === 'GET':
                        return getUserById()
                    case url.match(/\/users\/\d+$/) && opts.method === 'PUT':
                        return updateUser()
                    case url.match(/\/users\/\d+$/) && opts.method === 'DELETE':
                        return deleteUser()
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error))
                }
            }

            // route functions

            function authenticate() {
                const { username, password } = body()
                const user = users.find(x => x.username === username && x.password === password)

                if (!user) return error('Username or password is incorrect')

                return ok({
                    ...basicDetails(user),
                    token: 'fake-jwt-token'
                })
            }

            function register() {
                const user = body()

                if (users.find(x => x.username === user.username)) {
                    return error('Username "' + user.username + '" is already taken')
                }

                user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1
                users.push(user)
                localStorage.setItem(usersKey, JSON.stringify(users))
                return ok()
            }

            function getRecords() {
                const page = pageFromUrl() || 1
                const type = typeFromUrl()
                // if (!isAuthenticated()) return unauthorized()
                const start = (page - 1) * 8
                const end = start + 8
                let data = records
                if (type) data = data.filter((item)=>{return item.type === type})
                data = data.slice(start, end)
                return ok({data, page})
            }

            function getUsers() {
                console.log('getUsers')
                if (!isAuthenticated()) return unauthorized()
                return ok(users.map(x => basicDetails(x)))
            }

            function getUserById() {
                if (!isAuthenticated()) return unauthorized()

                const user = users.find(x => x.id === idFromUrl())
                return ok(basicDetails(user))
            }

            function updateUser() {
                if (!isAuthenticated()) return unauthorized()

                let params = body()
                let user = users.find(x => x.id === idFromUrl())

                // only update password if entered
                if (!params.password) {
                    delete params.password
                }

                // if username changed check if taken
                if (params.username !== user.username && users.find(x => x.username === params.username)) {
                    return error('Username "' + params.username + '" is already taken')
                }

                // update and save user
                Object.assign(user, params)
                localStorage.setItem(usersKey, JSON.stringify(users))

                return ok()
            }

            function deleteUser() {
                if (!isAuthenticated()) return unauthorized()

                users = users.filter(x => x.id !== idFromUrl())
                localStorage.setItem(usersKey, JSON.stringify(users))
                return ok()
            }

            // helper functions

            function ok(body) {
                resolve({ ok: true, ...headers(), json: () => Promise.resolve(body) })
            }

            function unauthorized() {
                resolve({ status: 401, ...headers(), json: () => Promise.resolve({ message: 'Unauthorized' }) })
            }

            function error(message) {
                resolve({ status: 400, ...headers(), json: () => Promise.resolve({ message }) })
            }

            function basicDetails(user) {
                const { id, username, firstName, lastName, noti } = user
                return { id, username, firstName, lastName, noti }
            }

            function isAuthenticated() {
                return opts.headers['Authorization'] === 'Bearer fake-jwt-token'
            }

            function body() {
                return opts.body && JSON.parse(opts.body)
            }

            function idFromUrl() {
                const urlParts = url.split('/')
                return parseInt(urlParts[urlParts.length - 1])
            }

            function typeFromUrl() {
                const urlParts = url.split('/')
                return parseInt(urlParts[urlParts.length - 1])
            }
            function pageFromUrl() {
                const urlParts = url.split('/')
                return parseInt(urlParts[urlParts.length - 3])
            }

            function headers() {
                return {
                    headers: {
                        get(key) {
                            return ['application/json']
                        }
                    }
                }
            }
        })
    }
}
