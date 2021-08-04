import * as api from "../../api/authAPI.js"

export const login = async (user)=>  {
    // const userData = await userService.get(STORAGE_KEY, user);
    // return userData.data;
  }
  
  export const signup= ( data)=> async (dispatch)=>{
      try{
          const response=await api.signup(data)
          console.log(response);
      }
      catch(err){
          console.log(err , "not success");
      }
    // const userData = await  userService.get(STORAGE_KEY, user);
    // return userData.data;
  }
  
  export const update= async ( user)=> {
    // const userData = await  userService.get(STORAGE_KEY, user);
    // return userData.data;
  }




  


 