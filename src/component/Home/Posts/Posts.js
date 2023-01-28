import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'
const Posts = ({Posts}) => {



    return (
        <div className='post-Container max-w-4xl mx-auto'>



            {
                Posts?.map((p,i)=> 
                (i===0) ?
             
                
                    <Link to={`/postdetails/${p._id}`} key={p._id}  className='box-1 mb-3'>
                        <div key={p._id} className='card-img-container'>
                            <img src={p?.show.image.original} alt="" srcSet="" />
                            <div className='card1-blg'>
                                <h1>
                                    <span className="post-text-underline">{p.show.name}</span>
                                   
                                </h1>
                            </div>
                        </div>
                    </Link>
                    :
                    
                    <Link to={`/postdetails/${p._id}`} key={p._id}   className='same-post-box'>
                        <div className='same-post-box-img-container'>
                         

                            <img src={p.show.image.original} alt="" srcSet="" />

                        </div>
                        <div className='same-post-box-blg'>
                            <h2 className=''>
                                <span className='post-text-underline2'>{p.show.name}</span>
                            </h2>

                        </div>
                    </Link>
                 
                )
            }

        
            
        </div>

    );
};

export default Posts;