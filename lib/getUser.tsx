export default async function getUser(userid: string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
    return res.json();
}