import { Link } from 'react-router-dom';
import React, {useState, useEffect, Fragment} from 'react';
// import './About.css';
import { connect, useDispatch } from 'react-redux'
import { setImages } from '../../actions/imageReducer';

const Gallery = (props) => {
    const dispatch = useDispatch();
    const {images} = props;
    

    useEffect (()=>{
        fetch('https://picsum.photos/v2/list?limit=6')
        .then(response => response.json())
        .then(jsonThing => dispatch(setImages(jsonThing)))
    },images);


    // const fetchUsers=()=>{
    //     fetch('https://picsum.photos/v2/list?limit=6');
    //     .then(response => response.json())
    //     .then(jsonThing => setUsers(jsonThing))
    // }

    return (

        <div>
            {
                images.map((image,i) => {
                   return ( 
                      <figure key = {i}> 
                      <img src={image.download_url} width="150px" /> 
                      <figcaption>
                        <Link to={`/gallery/${image.id}/${image.author}`}> {image.author}</Link>
                          </figcaption> 
                          </figure>
                   )
                })


            }

            
        </div>
    )

    //     <Fragment>
    //     <ul>
    //     {
    //         users.map((user,i)=>{
    //             return(<li key={i}>{user.name}</li>)
    //         })
    //     }
    //    </ul>
       
       
    //    {/* <Button className="btn" text="BOTON" onClick={fetchUsers}/> */}

    //     </Fragment>
        }
const mapStateToProps = (state) => ({images:state.imageReducer.images})



export default connect(mapStateToProps) (Gallery);