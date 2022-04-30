export const  initialState = [] ;

export const  basketReducer = (state, action) =>{
        switch(action.type){
            case "ADD" :
                const found = state.some(el => el.description === action.content.description); 
                if(!found)
                    return [...state, action.content];
                return state;
            case "REMOVE":
                return state.filter( (iterator) => { return iterator !== action.content} );
            default:
                return state;
        }
}