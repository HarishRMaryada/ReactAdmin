
export default function userReducer(state = {list: {data:[],error: null}, details: {}}, action) {
    switch (action.type) {
      case "USERS_FETCH_SUCCESS":
      {
        return {
          ...state,
          list: {
            data: action.data,
            error: null
          },          
          details: {
            data: null,
          }
        };
      }
      case "USERS_FETCH_ERROR":
      {
          return {
              ...state,
             list: {
               ...state.list,
               error: action.data
             }
          }
      }      
      case "USER_FETCH_SUCCESS":
      {
        return {
          ...state,
          list: {
            ...state.list,
            error: action.data
          },
          details: {
            data: action.data,
          }
        }
      }
    
    
      default:
        return state;
    }
    }