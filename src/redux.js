import { createStore } from 'redux';

export const tasksReducer = (state = {}, action) => {
    console.log('reducing', action.payload);
    switch (action.type) {
        case 'TASK_ADD':
        const { id }= action.payload;
            return {
                ...state,
                [id]: action.payload
            };
        default:
          return state
      }
}

const store = createStore(tasksReducer, {});

store.subscribe(() => console.log('subscriber', store.getState()))

export const addTask = (task) => {
    console.log('addTask', task);
    return {
        type: 'TASK_ADD',
        payload: task
    }
}

const action = addTask({
    id: 1, 
    name: 'finir l\'exo'
});
store.dispatch(action);
store.dispatch(addTask({id: 2, name: 'truc'}));

