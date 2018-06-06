import React, { Component } from 'react'
import { Media } from 'reactstrap';
import theImage from '../images/IMG_3668.jpg'



const Blog =(props) => {


console.log('props in blog', props)


  return (

    <div>

    <Media>
     <Media left href="#">
       <Media img src={props.blog.post_img} style={{width:'75px', height:'75px', marginLeft: '10px', marginTop: '20px'}}/>
     </Media>

     <Media body style={{paddingLeft: '10px', marginTop:'15px'}}>
       <Media heading>
         <strong>{props.blog.post_name} </strong>

       </Media>

       <Media heading>
        {props.blog.date}
       </Media>
       {props.blog.post_body}
         <hr className="my-4" />
     </Media>
   </Media>
    </div>
  )
}



export default Blog
