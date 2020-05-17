import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))
const expenseThree = store.dispatch(addExpense({ description: 'Tea', amount: 200, createdAt: -1000 }))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

store.dispatch(setTextFilter('e'))
// store.dispatch(setTextFilter(''))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

//store.dispatch(setStartDate(2000))
// store.dispatch(setStartDate())
//store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

const demoState = {
    expenses: [{
        id: 'asfdasdfds',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // TODO: date or amount
        startDate: undefined,
        endDate: undefined
    }
}