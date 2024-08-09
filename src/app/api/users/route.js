import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";


export const GET=async()=> {
   
    revalidateTag('users');
    return new NextResponse("User is revalidated Successfully")
}
