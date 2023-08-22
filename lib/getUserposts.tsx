export default async function getUserposts(userid: string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?useId=${userid}`);
    return res.json();
}