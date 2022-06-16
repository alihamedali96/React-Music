import {Card,Button} from 'react-bootstrap'
import React, {useState} from  'react';

const Cards = ({album,year,img}) => {  
     
    const [count,setCount] =  useState(0);
    // let liked = false;  
    const [liked,setLiked] =  useState(false);
    const [likeText,setLikeText] =  useState("Like");

    const handleLikeBtn = () =>{

        if(liked){
         
        setCount(count-1);
        setLiked (false);
        setLikeText("Like")
        
        }
        else{
            setLikeText("Unlike")
            setCount(count+1);
            setLiked(true);
        }

    }

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{album}</Card.Title>
                    <Card.Text>{year}
                    </Card.Text>  
                     <p>{count}</p>
                    <Button variant="primary" onClick={()=> handleLikeBtn()}>{likeText}</Button>
                 
                </Card.Body>
            </Card>
         
</>
    );
 }

 export default Cards;
