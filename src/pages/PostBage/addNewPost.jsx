import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SinglePost from './singlePost';

const AddPost = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ image: '', title: '', description: '' });
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost({ ...newPost, image: reader.result });
        setPosts([...posts, { ...newPost, image: reader.result }]);
        setNewPost({ image: '', title: '', description: '' });
        setImageFile(null);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <Container fluid>
      <h1 className='text-center'>Our Posts</h1>
      <Row>
        {posts.map((item, index) => (
          <Col className='col-4' key={index}>
            <Card>
              <Card.Img src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}</Card.Text>

                <Link to={`/posts/${index}`} className='btn btn-primary'>
                  Read More
                </Link>
              </Card.Body>
            </Card>
            <br />
          </Col>
        ))}
      </Row>

      <Form onSubmit={handleSubmit} className='mb-4 bg-light p-4'>
        <Row>
          <h1 className='text-center'>Add Post</h1>
          <Form.Group controlId='formImage'>
            <Form.Label>Image File</Form.Label>
            <Form.Control
              type='file'
              name='image'
              onChange={handleFileChange}
              className='form-control mb-4'
            />
          </Form.Group>
          <Form.Group controlId='formTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={newPost.title}
              onChange={handleInputChange}
              placeholder='Enter title'
              className='form-control mb-4'
            />
          </Form.Group>
          <Form.Group controlId='formDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              name='description'
              value={newPost.description}
              onChange={handleInputChange}
              placeholder='Enter description'
              className='form-control mb-4'
            />
          </Form.Group>
          <div className='d-flex align-items-end'>
            <Button style={{ background: "#FFB6C1" }} className='form-control' type='submit'>
              Add Post
            </Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};

export default AddPost;
