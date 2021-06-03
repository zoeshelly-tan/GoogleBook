import React from 'react'
import { Card,  Image} from 'semantic-ui-react'


const BookCard =(props)=> {
      return (
        <Card>
        <Image src={props.image} wrapped ui={false} />
        <Card.Content>
      <Card.Header>Title: {props.title}</Card.Header>
          <Card.Meta>
      <span className='date'>published Date: {props.publishedDate}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            author: {props.author}
          </a>
        </Card.Content>
        <button className="btn btn-outline-secondary" type="submit" >Save</button>
      </Card>
    )
  }




export default BookCard;