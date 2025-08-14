import Image from "next/image";
export default function home(){
    return(
        <>
        <h1> Welcome to our weeding party</h1>
        <p>This app is for our beloving friends and family members</p>
        <h2>To helping them find thier set in our party easily</h2>
            <Image src="/OIP.jpeg" alt="Wedding photo" width="300" height="300"></Image>
        </>
    );
}