const redux=require('redux');
const createStore=redux.createStore;
const Book_type="book_type";

const initialState={
    numberofbooks:10
}

function Buy_Book(){
    return {
    type:Book_type,
    info:"My First Redux code"
    }
}

const reducer=(state=initialState,action)=>
{
    switch (action.type)
    {
        case "Book_Type":return {
            ...state,
            numberofbooks:state.numberofbooks - 1
        }
        default: return state;
        
    }
}

const store=createStore(reducer);
console.log("initial state",store.getState());
const unsubscribe=store.subscribe(()=>{console.log('Updated state value',store.getState())});
store.dispatch(Buy_Book());
unsubscribe();
store.dispatch(Buy_Book());
store.dispatch(Buy_Book());