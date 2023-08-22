
import { Metadata } from "next";
import getAllusers from "@/lib/getAllusers";
import Link from "next/link";
export const metadata:Metadata = {
    title:'Users',
}
import { useEffect, useState } from 'react';

const UserPage = async () => {
    const usersData: Promise<User[]> = getAllusers();
    const users = await usersData;
    
    return (
        <div>
            {
                users.map((el, idx) => {
                    return(
                        <Link href={`/users/${el.id}`} className="user-data" key={el.id}>
                            <p>{el.name}</p>
                            <p>{el.id}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default UserPage;