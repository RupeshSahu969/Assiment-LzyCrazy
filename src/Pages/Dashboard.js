import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import "../Style/dashbord.css"; 
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
  const [shopLogo, setShopLogo] = useState(null);

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setShopLogo(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Add your form submission logic here
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={10} className="mx-auto">
          <h2>Welcome to LzyCrazy</h2>
          <div className="mt-3 p-3 border rounded">
            <div className="containeadd">
              <h4>Shop Banner</h4>
            </div>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={5}>
                  <div className="containerform">
                    <label className="form-label">Select Sub-Category</label>

                    <select className="form-control">
                      <option>Please choose a sub-category</option>
                    </select>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="containerform">
                    <label className="form-label">Select Shop</label>
                    <select className="form-control">
                      <option>Please choose a shop</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5}>
                  <div className="containerform">
                    <label className="form-label">Banner Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col md={5}>
                  <div className="containerform">
                    <label className="form-label">Sequence</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5}>
                  <div className="containerform">
                    <label className="form-label">Add Banner Link</label>
                    <input type="text" className="form-control" />
                  </div>
                </Col>
                <Col md={5}>
                  <div className="containerform1">
                    <label className="form-label">Upload Image</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleLogoChange}
                    />
                    {shopLogo && (
                      <div className="image1 mt-2">
                        <img
                          src={shopLogo}
                          alt="Shop Logo"
                          className="shop-logo-preview"
                        />
                      </div>
                    )}
                  </div>
                </Col>
              </Row>

              <div className="btn-1">
                <Button className="btn" type="submit">
                  Submit
                </Button>
              </div>
            </Form>

            <div className="shop">
              <Row className="mb-3">
                <Col md={5}>
                <label className="form-label">
                      Filter SubCategory
                    </label>
                  <select className="form-control">
                    
                    <option>Please choose an option</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col md={10}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </Col>
              </Row>

              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Shop Name</th>
                      <th>Banner Name</th>
                      <th>Sequence</th>
                      <th>Banner Link</th>
                      <th>Banner Image</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rupesh sahu</td>
                      <td>Self made</td>
                      <td>1</td>
                      <td>Link</td>
                      <td>
                        <img
                          src="path_to_logo"
                          alt="Shop Logo"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <FaEdit style={{ color: "blue", fontSize: "2em" }} />
                      </td>
                      <td>
                        <MdDelete style={{ color: "red", fontSize: "2em" }} />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
