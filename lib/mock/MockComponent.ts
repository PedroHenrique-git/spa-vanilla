import { Component } from "../main";

export class MockComponent extends Component<{ count: number }, { title: string }> {
    private buttonIncrease: HTMLButtonElement | null = null
    private buttonDecrease: HTMLButtonElement | null = null

    selectors(): void {
        this.buttonIncrease = this.root.querySelector(`#button-increase-${this.key}`)
        this.buttonDecrease = this.root.querySelector(`#button-decrease-${this.key}`)
    }

    events(): void {
        this.buttonIncrease?.addEventListener('click', () => {
            this.setState({ count: (this.getState()?.count ?? 0) + 1 });
        })

        this.buttonDecrease?.addEventListener('click', () => {
            this.setState({ count: (this.getState()?.count ?? 0) - 1 });
        })
    }

    render(): string {
        return String.raw`
            <div data-testid='${this.key}'>
                <div>
                    <h1 data-testid='mock-title-${this.key}'>${this.getProps()?.title ?? 'Mock component'}</h1>
                    <div>
                        <div data-testid='mock-visor-${this.key}'>${this.getState() ? this.getState()?.count : 'without state'}</div>
                    </div>
                    <div>
                        <button id='button-increase-${this.key}' data-testid='button-increase-${this.key}'>increase</button>
                        <button id='button-decrease-${this.key}' data-testid='button-decrease-${this.key}'>decrease</button>
                    </div>
                </div>
            </div>
        `
    }
}