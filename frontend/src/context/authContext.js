import {AuthContext, createContext, useReducer} from 'react';
import  {useEffect}  from 'react';

const initia_state={
    user:localStorage.getItem('user') === undefined ? JSON.parse(localStorage.getItem('user')):null,
    loading:false,
    error:null
}

export default AuthContext=createContext(initia_state)

const Authreducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN_START':
            return{
                user:null,
                loading:true,
                error:null
            };
            case 'LOGIN_SUCCESS':
                return{
                    user:action.payload,
                    loading:false,
                    error:null
                }
            case 'LOGIN_FAILURE':
                return{
                    user:null,
                    loading:false,
                    error:action.payload,
                }
                case 'REGISTER_SUCCESS':
                return{
                    user:null,
                    loading:false,
                    error:null,
                }
                case 'LOGOUT':
                return{
                    user:null,
                    loading:false,
                    error:null,
                }
                
            default: 
               return state
    }
};

 export const AuthContextProvider=({children})=>{
    const [state, dispatch]=useReducer(Authreducer,initia_state)
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user]) 
    return <AuthContext.Provider value={{
        user:state.user,
        loading:state.loading,
        error:state.error,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
 }

