import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../Style/addshopcategory.css"; // Adjust path as necessary
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AddShopCategory = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={10} className="mx-auto">
          <h2>Welcome to LzyCrazy</h2>
          <div className="mt-3 p-3 border rounded">
            <div className="containeadd">
              <h4>Add Shop Categories</h4>
            </div>
            <Form onSubmit={handleSubmit} className="mainDiv">
              <Row>
                <Col md={5}>
                  <div className="containerForm">
                    <div className="lableform">
                      <label className="form-label">Category Name</label>
                    </div>
                    <div className="containerform">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <div className="containerForm">
                    <div className="lableform">
                      <label className="form-label">Add Sequence</label>
                    </div>
                    <div className="containerform">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <div className="containerForm">
                    <div className="lableform">
                      <label className="form-label">Add Icon</label>
                    </div>
                    <div className="containerform">
                      <input
                        type="file"
                        className="form-control"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="btn-1">
                <Button className="btn" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddShopCategory;
