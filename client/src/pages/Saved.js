import React, {useEffect, useState} from "react";
import { Header, Tab } from "semantic-ui-react";
import Container from "../components/Container";
import Row from "../components/Row";
import SavedList from "../components/SavedList"
import API from "../utils/API";

const Saved =()=>{
    // Setting our component's initial state
  const [books, setBooks] = useState([])
  

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }
    return (
        <Container>
            <Row>
                <Header>Saved List</Header>
                {books.map((book, index) => (

                    <SavedList
                    key={index}
                    title={book.title}
                    author={book.author}
                    deleteBook={deleteBook(book._id)}
                    />
                  
                ))}



            </Row>
        </Container>
    )

}

export default Saved