import { revalidateTag } from "next/cache";
// import { redirect } from "next/navigation";

 const ActionComponent = () => {
    async function action() {
        "use server";

        revalidateTag("users");
      
    }

    return (
        <form action={action}>
            <button type="submit" className="">
                Submit Action
            </button>
        </form>
    );
};

export default ActionComponent