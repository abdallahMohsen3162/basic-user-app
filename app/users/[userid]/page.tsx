import getUser from "@/lib/getUser"
import getUserposts from "@/lib/getUserposts"
import {Suspense} from "react";

export default async function Userpage(userid:string) {
    const userData : Promise<User> = getUser(userid);
    const userPostsData:Promise<Post[]> = getUserposts(userid);
    const [user, userPosts] = await Promise.all([userData,userPostsData]);
    console.log(userPosts);
    
    return (
    <div>
        <h1>{user.website}</h1>
        {
            userPosts?(
                userPosts.map((el, idx) => {
                    return(
                        <div key={idx}>
                            {el.body}
                        </div>
                    )
                })
            ):(
                <h2>loading</h2>
            )
        } 

    
    </div>
  )
}
