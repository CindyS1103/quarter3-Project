import React, { Component } from 'react'
import { Media } from 'reactstrap';
import theImage from '../images/IMG_3668.jpg'
import Moment from 'react-moment'



const Blog =(props) => {
  let newDate = <Moment format="MM/DD/YYYY ">{props.blog.date}</Moment>

console.log('props in blog', props)


  return (

    <div>
  
    <Media style={{margin:'5em'}}>
     <Media left href="#">
       <Media img src={props.blog.post_img} style={{width:'75px', height:'75px', marginLeft: '10px', marginTop: '20px'}}/>
     </Media>

     <Media body style={{paddingLeft: '10px', marginTop:'15px'}}>
       <Media heading style={{color:'#1476AC'}}>
         <strong>{props.blog.post_name} </strong>

       </Media>

       <Media heading>
        {newDate}
       </Media>
       <Media body style={{fontSize:'15px'}}>
       {props.blog.post_body}
       </Media>
         <hr className="my-4" />
     </Media>
   </Media>
    </div>
  )
}



export default Blog
