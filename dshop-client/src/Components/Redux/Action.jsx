
export const categoryAction=(dispatch,data)=>{
 dispatch({
    type:'cData',
    payload:data
 })
}
export const loginAction=(data,dispatch)=>{
    dispatch({
        type:'login',
        payload:data
    })
}