
export const getUsers=async()=>{
    try {
        let users = await fetch('https://ecommercebackend-production-6fdf.up.railway.app/api/getusers')
         users=await users.json()
        return users;
    } catch (error) {
        console.log('No user found',error);
        
    }
}
export const runtime="edge"