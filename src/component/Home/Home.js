import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Posts from './Posts/Posts';

const Home = () => {

    const [loader, setLoader] = useState(true);
    const { data: Postss = [] } = useQuery({
        queryKey: ['Postss'],
        queryFn: async () => {
            const res = await fetch('https://intership-test-server.vercel.app/data');
            const data = await res.json();
            setLoader(false);
            return data;
        }
    })




    return (
        <div style={{ background: '#fff' }}>



            {
                loader &&
                <div style={{
                    color: 'red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '90vh',
                    fontSize: '25px'
                }}>
                    <h1>Data Loading..</h1>
                </div>
            }

            <Banner Posts={Postss} />



            {(!loader) &&
                <div style={{

                    width: '300px',
                    margin: '0 auto',


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

            }


            <Posts Posts={Postss} />

            {(!loader) &&
                <div style={{

                    width: '300px',
                    margin: '0 auto',
                    marginBottom: '100px'

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
            }
        </div>
    );
};

export default Home;