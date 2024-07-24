import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import PostObject from './PostObject'




function SinglePost() {
  const { id } = useParams();
  const post = PostObject.find(post => post.id === parseInt(id));



  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        <Card>
          <Card.Img style={{ height: '87vh ', objectFit: 'cover' }} src={post.image} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Title>{post.auther} :   {post.data}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
          </Card.Body>
          <Link to='/Posts'>
            <Card.Footer>
              <Button className='form-control' style={{ background: '#FFB6C1', border: '0' }}>Back</Button>
            </Card.Footer>
          </Link>
        </Card>
      </Container>
    </div>
  );
}

export default SinglePost;
