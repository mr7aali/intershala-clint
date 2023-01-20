import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {
    const post = useLoaderData();
    console.log(post.show.summary)
    const summary = post?.show?.summary;
    const regex = /(<([^>]+)>)/ig;
    const summary1 =summary.replace(regex,"");
    console.log(summary.replace(regex," "));
    return (
        <>
       
        <div className='PostDetails-container max-w-screen-md mx-auto mt-20 mb-16'>
            <div></div>
            
            <div className='PostDetails-Header'>
                <h1 className='font-bold text-5xl'>
                {post.show.name}
                </h1>
            </div>
            <hr className='mx-auto' style={{border:'1px solid gray', marginTop:'50px', width:'90%', borderRadius:'50px'}} />
            <div className='postDetails-imgage-container mt-5'>
                <img src={post.show.image.original} alt="" srcset="" />
            </div>
            <div className='postdetails-blog'>
                <h1>{post.show.name}</h1>
                <p>{summary1}</p>
            </div>
        </div>
        </>
    );
};

export default PostDetails;