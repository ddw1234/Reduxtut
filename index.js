//const {redux,createStore,combineReducers}=require('redux')
const redux=require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware;

const Buy_Book="Buy_Book";

const initialStatebook={
    numberofBooks:10
}

const initialStatepen={
    
    numberofPens:15
}

// const action={
//     type:Buy_Book,
//     info:"My first Redux Code"
// }

// function buyBook(){
//     return action;
// }
function buyBook(){
    return {
        type:Buy_Book,
        payload:"My first Redux Code"
    }
}

function buyPen(){
    return {
        type:"Buy_Pen",
        payload:"My second Redux Code"
    }
}

///{prevState,action}=>newState

const bookReducer=(state=initialStatebook,action)=>{

    switch(action.type){
        case "Buy_Book":return{
           ...state,
            numberofBooks:state.numberofBooks-1
        }
       
        default: return state;
    }

}

const penReducer=(state=initialStatepen,action)=>{

    switch(action.type){
       
        case "Buy_Pen":return{
            ...state,
            numberofPens:state.numberofPens-2
        }

        default: return state;
    }

}

const reducer=combineReducers(
    {
      Book:bookReducer,
      Pen:penReducer
    }
);

const logger=store=>{

    return next=>{
        return action=>{
            const result=next(action);
            console.log("Middleware log",result);
            return result;
        }
    }

}


const store=createStore(reducer,applyMiddleware(logger));
console.log("Initial state",store.getState());
const unsubscribe= store.subscribe(()=>{console.log('Updated value',store.getState())});
//const kb= store.subscribe(()=>{console.log('Updated kb value',store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();
//kb();