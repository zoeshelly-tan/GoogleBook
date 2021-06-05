import React,{useState, useEffect} from 'react'
import { Card,  Image} from 'semantic-ui-react'
import SaveBtn from "../SaveBtn"
import API from "../../utils/API";



const BookCard =(props)=> {
  const [books, setBooks] = useState([])
 function handleFormSubmit(event) {
    // event.preventDefault();
      API.saveBook({
        title: props.title,
        author: props.author,
        description:props.description,
        image:props.image,
      })
      .then(res => console.log("saved"))
      .catch(err => console.log(err));
      console.log("book saved")
  };
      return (
        <Card>
        <Image src={props.image} wrapped ui={false} />
        <Card.Content>
      <Card.Header>Title: {props.title}</Card.Header>
          <Card.Meta>
      <span className='date'>published Date: {props.publishedDate}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Description>
          Description: {props.description}
        </Card.Description>
        <Card.Content extra>
          <a>
            author: {props.author}
          </a>
        </Card.Content>
        <button href={props.previewLink} className="btn btn-outline-secondary">Link to the Book</button>
        {/* <SaveBtn onClick={handleFormSubmit}/> */}
        <button className="save-btn" onClick={handleFormSubmit} >
      Save
    </button>
      </Card>
    )
  }




export default BookCard;