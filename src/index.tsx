import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './stores'
import { App } from './App'
import './assets/scss/main.scss'

// setup fake backend
import { fakeBackend } from './helpers'
fakeBackend()

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    )
}
