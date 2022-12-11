import { screen } from '@testing-library/dom'
import { describe, expect, it } from 'vitest'
import { State } from '../main'
import { MockComponent } from '../mock/MockComponent'

describe('Component', () => {
    const mockComponentWithoutPropsAndState: MockComponent = new MockComponent(document.body) // component 1
    const mockComponentWithPropsAndState: MockComponent = new MockComponent(null, new State({ count: 0 }), { title: 'My Custom title' }) // component 2
    
    new MockComponent(null, new State({ count: 0 }), { title: 'With Children' }, [
        [MockComponent], // component 8
        [MockComponent], // component 9
        [MockComponent], // component 10
        [MockComponent], // component 11
    ]) // component 3

    new MockComponent(null, new State({ count: 0 }), { title: 'With Children' }, [
        [MockComponent, new State({ count: 190 }), { title: 'Children' }], // component 17
        [MockComponent, new State({ count: 190 }), { title: 'Children' }], // component 18
        [MockComponent, new State({ count: 190 }), { title: 'Children' }], // component 19
        [MockComponent, new State({ count: 190 }), { title: 'Children' }], // component 20
    ]) // component 12

    it('all children should be in the document', () => {
        expect(screen.queryByTestId('8')).toBeInTheDocument()
        expect(screen.queryByTestId('9')).toBeInTheDocument()
        expect(screen.queryByTestId('10')).toBeInTheDocument()
        expect(screen.queryByTestId('11')).toBeInTheDocument()
    })

    it('all children should render without state', () => {
        expect(screen.queryByTestId('mock-visor-8')?.textContent).toBe('without state')
        expect(screen.queryByTestId('mock-visor-9')?.textContent).toBe('without state')
        expect(screen.queryByTestId('mock-visor-10')?.textContent).toBe('without state')
        expect(screen.queryByTestId('mock-visor-11')?.textContent).toBe('without state')
    })

    it('all children should render with state and props', () => {
        expect(screen.queryByTestId('mock-visor-17')?.textContent).toBe('190')
        expect(screen.queryByTestId('mock-visor-18')?.textContent).toBe('190')
        expect(screen.queryByTestId('mock-visor-19')?.textContent).toBe('190')
        expect(screen.queryByTestId('mock-visor-20')?.textContent).toBe('190')

        expect(screen.queryByTestId('mock-title-17')?.textContent).toBe('Children')
        expect(screen.queryByTestId('mock-title-18')?.textContent).toBe('Children')
        expect(screen.queryByTestId('mock-title-19')?.textContent).toBe('Children')
        expect(screen.queryByTestId('mock-title-20')?.textContent).toBe('Children')
    })

    it('should render with children', () => {
        expect(screen.queryByTestId('3')?.children.length).toBe(5)
    })

    it('should in the document even when app is null', () => {
        expect(screen.queryByTestId('2')).toBeInTheDocument()
    })

    it('should be initialized with state and props', () => {
        expect(screen.queryByTestId('mock-title-2')?.textContent).toBe('My Custom title')
        expect(screen.queryByTestId('mock-visor-2')?.textContent).toBe('0')
    })

    it('should be in the document', () => {
        expect(screen.queryByTestId('1')).toBeInTheDocument()
    })

    it('key should be 1', () => {
        expect(screen.queryByTestId('1')?.getAttribute('key')).toBe('1')
    })

    it('should render the correct title', () => {
        expect(screen.queryByTestId('mock-title-1')?.textContent).toBe('Mock component')
    })

    it('should render the correct visor', () => {
        expect(screen.queryByTestId('mock-visor-1')?.textContent).toBe('without state')
    })

    it('state should be undefined and props should be null', () => {
        expect(mockComponentWithoutPropsAndState.getProps()).toBeNull()
        expect(mockComponentWithoutPropsAndState.getState()).toBeUndefined()
    })

    it('child 8: textContent should be change when button is clicked', () => {
        const buttonIncrease = screen.getByTestId('button-increase-8')
        const buttonDecrease = screen.getByTestId('button-decrease-8')

        buttonIncrease.click()
        buttonDecrease.click()

        expect(screen.getByTestId('mock-visor-8').textContent).toBe('0')
    })

    it('child 9: textContent should be change when button is clicked', () => {
        const buttonIncrease = screen.getByTestId('button-increase-9')
        const buttonDecrease = screen.getByTestId('button-decrease-9')

        buttonIncrease.click()
        buttonDecrease.click()

        expect(screen.getByTestId('mock-visor-9').textContent).toBe('0')
    })

    it('child 10: textContent should be change when button is clicked', () => {
        const buttonIncrease = screen.getByTestId('button-increase-10')
        const buttonDecrease = screen.getByTestId('button-decrease-10')

        buttonIncrease.click()
        buttonDecrease.click()

        expect(screen.getByTestId('mock-visor-10').textContent).toBe('0')
    })

    it('child 11: textContent should be change when button is clicked', () => {
        const buttonIncrease = screen.getByTestId('button-increase-11')
        const buttonDecrease = screen.getByTestId('button-decrease-11')

        buttonIncrease.click()
        buttonDecrease.click()

        expect(screen.getByTestId('mock-visor-11').textContent).toBe('0')
    })

    it('mockComponentWithoutPropsAndState: state should be change when button is clicked', () => {
        const buttonIncrease = screen.getByTestId('button-increase-1')
        const buttonDecrease = screen.getByTestId('button-decrease-1')

        buttonIncrease.click()
        buttonDecrease.click()

        expect(mockComponentWithoutPropsAndState.getState()?.count).toBe(0)
    })

    it('mockComponentWithPropsAndState: state should be change when button is clicked', () => {
        const buttonIncrease = screen.getByTestId('button-increase-2')
        const buttonDecrease = screen.getByTestId('button-decrease-2')

        buttonIncrease.click()
        buttonDecrease.click()

        expect(mockComponentWithPropsAndState.getState()?.count).toBe(0)
    })
})