import { Button } from '@mui/material';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {

    const post = useLoaderData();
    const summary = post?.show?.summary;
    const regex = /(<([^>]+)>)/ig;
    const summary1 = summary.replace(regex, "");
    return (
        <>

            <div className='PostDetails-container max-w-screen-md mx-auto mt-20 mb-16'>
                <div></div>

                <div className='PostDetails-Header'>
                    <h1 className='font-bold text-5xl'>
                        {post.show.name}
                    </h1>


                    <Link to={'/ticket'}>
                        <Button sx={{
                            fontWeight: '600'
                        }}
                            variant="outlined"
                            color="error"
                            fullWidth
                        >
                            Buy Ticket
                        </Button>
                    </Link>
                </div>
                <hr className='mx-auto' style={{ border: '1px solid gray', marginTop: '50px', width: '90%', borderRadius: '50px' }} />
                <div className='postDetails-imgage-container mt-5'>
                    <img src={post.show.image.original} alt="" srcset="" />
                </div>
                <div className='postdetails-blog'>
                    <h1>{post.show.name}</h1>
                    <p>{summary1}</p>
                </div>
            </div>

            <div style={{

                width: '300px',
                margin: '0 auto',
                border:'1px solid red'


            }}>




                <Link to={'/ticket'}>
                    <Button sx={{
                        fontWeight: '600'
                    }}
                        variant="outlined"
                        color="success"
                        fullWidth
                    >
                        Buy Ticket
                    </Button>
                </Link>

            </div>
        </>
    );
};

export default PostDetails;