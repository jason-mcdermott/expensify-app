import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'foo', note: 'bar' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { description: 'foo', note: 'bar' }
    })
})

test('should setup add expense action object with provided values', () => {
    const action = addExpense({ 
        note: 'foo', 
        description: 'bar', 
        amount: 1000, 
        createdAt: 1000 
    })

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            note: 'foo', 
            description: 'bar', 
            amount: 1000, 
            createdAt: 1000 
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {        
            id: expect.any(String),
            note: '',
            description: '', 
            amount: 0, 
            createdAt: 0
        }
    })
})