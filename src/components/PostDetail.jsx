import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  console.log(id)

  const post = posts.data.find((post) => (post.idPost == id)? post:null);
  console.log(post);
  return(
    <div className='py-4 px-8 grid grid-cols-1 gap-2 md:grid-cols-2   '>
        <div>
            <h1 className='text-5xl font-bold'>Single post</h1>
            <br></br>
            <p className="text-neutral-400">{post.titlePost}</p>
            <br></br>
            <p>{post.body}</p>

        </div>
        <div>
            <img className='rounded' src={post.url}></img>
        </div>


    </div>
    
  
  );
 };
 export default PostDetail