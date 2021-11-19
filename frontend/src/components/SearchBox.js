import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function SearchBox() {
  const [keyWord, setKeyWord] = useState('');

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyWord) {
      history.push(`/?keyword=${keyWord}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex s">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyWord(e.target.value)}
        className="mr-sm-2 ml-sm-5"
        value={keyWord}
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2 mx-2">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
