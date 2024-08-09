import ActionComponent from "../action/page"
import { getUsers } from "../api"


 const Users=async()=>{
    const users=await getUsers()
    console.log(users);
     return (
       <>
     <ul>
    {
               users?.usersData?.map((val, ind) => {
                   return (
                
                       <li key={ind}>{val?.name}</li>
            )
        })
    }
             </ul>
             <ActionComponent/>
         </>
   )


    
}

export default Users;