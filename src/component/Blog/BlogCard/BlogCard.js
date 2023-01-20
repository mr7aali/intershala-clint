import * as React from 'react';
import Box from '@mui/material/Box';
import './BlogCard.css'
import { AuthContext } from '../../contexts/AuthProvider';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AddPost from '../../Booking/AddBooking';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function BlogCard({ p, refetch }) {


    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };




    const [loadingBtnD, setLoadingBtnD] = React.useState(false);
    const { user } = React.useContext(AuthContext);
    let summary = p?.show?.summary;
    // const s2= summary.slice(0, 90);
    const regex = /(<([^>]+)>)/ig;

    const summary1 = summary.replace(regex, "");



    return (

<>

        <div className='max-w-screen-md mx-auto blg-card-container mb-5'>

            <div className='blog-card-img-container'>


                <img src={p?.show.image.original} alt="" srcset="" />

            </div>

            <div className='blog-card-header-container'>
                <h1>
                    <span className="underLine-blg">{p.show.name}</span>
                </h1>

               {  (summary1.length>100)? <p>
                {
                     summary1.slice(0, 82) 
                }.....
               </p>
               :
               <p >              
                    {summary1}
                </p>}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>

                    <Box sx={{ color: 'black', marginRight: '15px' }}>


                        {/* ( post?.authorEmail === user?.email) && */}
                        <Link  to={`/postdetails/${p._id}`}>   <Button size="small" variant="outlined">Read </Button>      </Link>

                        <LoadingButton
                            onClick={handleClickOpen}
                            // onClick={()=>handleDelete(post?._id)} 
                            sx={{ marginLeft: '5px' }} color='error'
                            size="small" variant="outlined"
                            loading={loadingBtnD}
                        >
                            Book</LoadingButton>

                    </Box>
                </Box>
            </div>


        </div>

        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar maxWidth="lg" sx={{ position: 'relative' }}>
          <Toolbar maxWidth="lg" sx={{}}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Movie name
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Confirm
            </Button>
          </Toolbar>
        </AppBar>
        {/* <List>



          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>





        </List> */}
        <AddPost p={ p} handleClose={handleClose}/>



      </Dialog>
</>

    );
}