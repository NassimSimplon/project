const initialState ={
    user:[]
}
export const Redit = (state=initialState, action) =>{
    const { type, payload } = action;
    switch(type){
        case "GETIT":
            return{
                ...state,
                user:payload
            }
           case "POST":
               return{
                   ...state,
                   user:[state.user,payload]
               }
               case "DELETE":
                   return{
                       ...state,
                       user:state.user.filter(el => el.id !== payload.id)
                       
                   }
            default:
          return  initialState  
    }
}