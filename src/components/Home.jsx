import React from "react";
import { Link } from 'react-router-dom';
const Home= ({posts})=>{
    console.log(posts);
    const postSliced=posts.data.slice(2,11);
    const postFirst=posts.data.slice(0,2)
    return(
        <>
        <div className="gap-4 py-4 px-8">
            <h1 className="text-5xl font-bold mb-6">Posts List</h1>
            <br></br>
             <p className="w-1/2 line-clamp-2 text-neutral-400 text-xl: flex  ">Subheading that sets up context,shares more info about the author, or geneerally gets people psyched to keep reading</p> 
             <br></br>
            <img className="flex justify-center object-cover w-full"src="https://www.mindfood.com/wp-content/uploads/2018/12/Dinner-OG.jpeg"/>
        </div>
        <div className="w-3/4 mx-auto items-center justify-center ">
            <div className="mb-4">Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur</div>

            <div>Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.</div>

        </div>
        <div className=" py-4 px-8">
            <div className=" grid grid-cols-1 gap-2 sm:grid-cols-2 xl:justify-items-center xl:items-center">
                
                   {postFirst.map(post => (
        <div key={post.idPost}>
          <Link to={`/posts/${post.idPost}`}>
            <img src={post.url}></img>
          </Link>
            <p>{post.titlePost}</p>
        </div>
 ))}

            </div>


        </div>
         <div className="w-3/4 mx-auto items-center justify-center ">
            <div className="mb-4">Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur</div>

            <div>Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.</div>

        </div> 
        <div className="gap-4 py-4 px-8">
            <h2 className="text-3xl font-bold mb-6">Related articles or Posts </h2>
            <div className="grid grid-cols-3 gap-4 justify-stretch">
            {postSliced.map(post => (
        <div key={post.idPost}>
          <Link to={`/posts/${post.idPost}`}>
            <img src={post.url}></img>
          </Link>
            <p>{post.titlePost}</p>
        </div>
 ))}
</div>
        </div>

        

        </>





    );

};

export default Home;