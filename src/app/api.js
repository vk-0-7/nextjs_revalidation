
export const getUsers=async()=>{
    try {
        let users = await fetch('http://localhost:8000/api/getusers')
         users=await users.json()
        return users;
    } catch (error) {
        console.log('No user found',error);
        
    }
}
export const runtime="edge"