## Spa vanilla

spa vanilla it's a library to create spa's (single page application) using only vanilla js

you can see a full usage example here: https://pedrohenrique-git.github.io/spa-vanilla-js/

## List of main components

- [Component](#component)
- [Router](#router)
- [State](#state)

## Utility functions

- [changeRoute](#changeRoute)
- [createApp](#createApp)
- [createContainer](#createContainer)
- [createFragment](#createFragment)
- [dispatchNavigationEvent](#dispatchNavigationEvent)
- [getMatchRoute](#getMatchRoute)
- [getRegexRoute](#getRegexRoute)
- [removeAllNodes](#removeAllNodes)

## Main components

### Component

The abstract class Component is the basis for any lib component, a component must 
have a render method that returns an html string and 
also a single parent element.

~~~typescript
    import { Component } from 'spa-vanilla';

    export class MockComponent extends Component<{ count: number }, { title: string }> {
        private buttonIncrease: HTMLButtonElement | null = null;
        private buttonDecrease: HTMLButtonElement | null = null;

        selectors(): void {
            this.buttonIncrease = this.root.querySelector(
            `#button-increase-${this.key}`,
            );
            this.buttonDecrease = this.root.querySelector(
            `#button-decrease-${this.key}`,
            );
        }

        events(): void {
            this.buttonIncrease?.addEventListener('click', () => {
            this.setState({ count: (this.getState()?.count ?? 0) + 1 });
            });

            this.buttonDecrease?.addEventListener('click', () => {
            this.setState({ count: (this.getState()?.count ?? 0) - 1 });
            });
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
                `;
        }
    }    
~~~

### Router

the Router class represents the routes that the application will take, 
or each route it is necessary to define a page (a function) 
that receives the route data as a parameter.

~~~typescript
    new Router(
        {
            '/': (routeData) => {},
            '/page/:id': (routeData) => {},
        },
        app,
    );
~~~

### State

the State class represents a dataset that can have subscribers 
(elements that react to changes in state), 
every element passed as a subscriber must implement the Observer interface

~~~typescript
    export type Context = {
        tasks: Task[];
        selectedTask: { task: Task | null | undefined; id: number } | null;
    };

    const initialState: Context = {
        tasks: [
            {
                name: 'buy rice',
                status: 'In progress',
            },
            {
                name: 'study english',
                status: 'done',
            },
            {
                name: 'go to the gym',
                status: 'In progress',
            },
            {
                name: 'walk the dog',
                status: 'done',
            },
        ],
        selectedTask: null,
    };

    export const tasksState = new State<Context>(initialState);
~~~

## Utility functions

### changeRoute

function responsible for changing the application's route

~~~typescript
    changeRoute(path: string, data: any = {}, unused = '')
~~~

### createApp

function responsible for creating the application root

~~~typescript
    const app = createApp()
~~~

### createContainer

function responsible for creating an html container for your components

~~~typescript
    const container = createContainer('main', 'content', app, (container) => {
      new MockComponent(container);
      new MockComponent(container);
    });
~~~

### createFragment

function responsible for receiving an html string and returning a DomFragment

~~~typescript
    const template = createFragment(`
        <div>
            <h1>Fragment</h1>
        </div>
    `);
~~~

### dispatchNavigationEvent

function responsible for triggering the page break event

~~~typescript
    dispatchNavigationEvent()
~~~

### getMatchRoute

function that receives a route and checks if a path follows the route pattern

~~~typescript
    getMatchRoute('/page/:id', '/page/1')
~~~

### getRegexRoute

function that takes a route(string) and returns its corresponding regex

~~~typescript
    expect(String(getRegexRoute('/path/:id')))
~~~

### removeAllNodes

function that takes an html element and removes all of its children

~~~typescript
    removeAllNodes(app);
~~~

## License

This project is licensed under the MIT License - see the LICENSE file for details
