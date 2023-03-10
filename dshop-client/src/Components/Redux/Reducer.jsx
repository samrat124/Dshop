let initial={
    catgData:[],
    loginData:false
}

export const reducer=(data=initial,action)=>{
 switch(action.type){
    case "cData":
        return{
            catgData:[...data.catgData,action.payload]
        }
        case "login":
            return{
                loginData:action.payload
            }
        default:{
            return data
        }
 }
}