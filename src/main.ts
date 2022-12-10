import { Component, createApp } from 'spa-vanilla'

const app = createApp()

class Header extends Component {
    render(): string {
        return String.raw`
            <header>
                <h1>Hi</h1>
            </header>
        `
    }
}

new Header(app)
