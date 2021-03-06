import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object",() => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test("should setuo edit expense action object",() => {
    const action = editExpense('123abc', {note: 'a new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates : {
            note: 'a new note'
        }
    })
});

test("should setup add expense action object with provided values",() => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test("should setup add expense action object with default values",() => {
    const expenseData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
      };
      const action = addExpense(expenseData);
      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});