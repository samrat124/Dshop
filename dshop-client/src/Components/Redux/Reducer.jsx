let initial={
    catgData:[]
}

export const reducer=(data=initial,action)=>{
 switch(action.type){
    case "cData":
        return{
            catgData:[...data.catgData,action.payload]
        }
        default:{
            return data
        }
 }
}