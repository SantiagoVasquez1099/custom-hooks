
export const todoReducer = (initalState = [], action) => {


    switch (action.type) {
        case '[TODO] Add Todo':
            
            return [...initalState, action.payload];

        case '[TODO] Remove Todo':

            return initalState.filter( todo => todo.id !== action.payload );
        
        case '[TODO] Toggle Todo':

            return initalState.map( todo => {

                if( todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

    
        default:
            return initalState;
    }

}