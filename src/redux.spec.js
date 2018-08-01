import { createStore } from "redux";
import { tasksReducer, addTask } from './redux';

describe('tasks reducer', () => {
    it('should return the state with a new task added', () => {
        const store = createStore(tasksReducer, {});
        expect(store.getState()).toEqual({});
        const action = addTask({
            id: 1, 
            name: 'finir l\'exo'
        });
        store.dispatch(action);
        expect(store.getState()).toEqual({
            1: { 
                id: 1, 
                name: 'finir l\'exo'   
            }
        });
    });
    it ('should not lose previous tasks when addind a new one', ()=> {
        const store = createStore(tasksReducer, {});
        store.dispatch(addTask({
            id: 1, 
            name: 'finir l\'exo'
        }));
        store.dispatch(addTask({
            id: 2, 
            name: 'truc'
        }));
        expect(store.getState()).toEqual({
            1: { 
                id: 1, 
                name: 'finir l\'exo'   
            },
            2: { 
                id: 2, 
                name: 'truc'   
            }

        });
    })
});