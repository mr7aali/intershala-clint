import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'
import BlogCard from './BlogCard/BlogCard';
const Blog = () => {
    const { data: Posts = [], refetch } = useQuery({
        queryKey: ['Posts'],
        queryFn: async () => {
            const res = await fetch('https://intership-test-server.vercel.app/data');
            const data = await res.json();
            return data;
        }
    })
   

    return (
        <div style={{background:'#fff'}} className='Full-blog-container'>
            <div className='bg-[#f0f0f2f5] mb-12'>
                <h1 className='text-3xl font-bold p-12 max-w-screen-lg	mx-auto'>All Tickets</h1>
            </div>

            <div className='max-w-screen-md mx-auto' style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
                <div>

                 {
                    Posts?.map(p=>
                    
                    // <Link to={`/postdetails/${p._id}`}>
                 
                    <BlogCard
                    p={p}
                    refetch={refetch}
                    key={p._id}
                    />
                   //  </Link>
                    
                    )
                 }

            
                </div>



            </div>


        </div>
    );
};

export default Blog;