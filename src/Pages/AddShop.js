import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import "../Style/addshop.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const AddShop = () => {
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

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={10} className="mx-auto">
          <h2>Welcome to LzyCrazy</h2>
          <div className="mt-3 p-3 border rounded">
            <div className="containeadd">
              <h4>Add Shop</h4>
            </div>
            <Form className="mt-3 p-3 border rounded">
            <Row className="mb-3">
              <Col md={5}>
                <div className="containerform">
                  <label className="form-label">Select Sub-Category</label>
                  <select className="form-control">
                    <option>Please choose a sub-category</option>
                  </select>
                </div>
              </Col>
             
            </Row>
            <Col md={5}>
                <div className="containerform">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Enter shop name" />
                </div>
              </Col>
              <Col md={5}>
                <div className="containerform1">
                  <label className="form-label">Upload Logo</label>
                  <input type="file" className="form-control" onChange={handleLogoChange} />
                  {shopLogo && (
                    <div className="image1 mt-2">
                      <img src={shopLogo} alt="Shop Logo" className="shop-logo-preview" />
                    </div>
                  )}
                </div>
              </Col>
            <Row className="mb-3">
              
              <Col md={5}>
                <div className="containerform">
                  <label className="form-label">Mobile No.</label>
                  <input type="text" className="form-control" placeholder="Enter mobile number" />
                </div>
              </Col>
              <Col md={5}>
                <div className="containerform1">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
              </Col>
            </Row>

            <Row className="mb-3">
              
              <Col md={5}>
                <div className="containerform">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" />
                </div>
              </Col>
              <Col md={5}>
                <div className="containerform1">
                  <label className="form-label">GST No.</label>
                  <input type="text" className="form-control" placeholder="Enter GST number" />
                </div>
              </Col>
            </Row>

            <Row className="mb-3">
              
              <Col md={5}>
                <div className="containerform">
                  <label className="form-label">Tag Line</label>
                  <input type="text" className="form-control" placeholder="Enter tag line" />
                </div>
              </Col>
              <Col md={5}>
                <div className="containerform1">
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" placeholder="Enter state" />
                </div>
              </Col>
            </Row>

            <Row className="mb-3">
              
              <Col md={5}>
                <div className="containerform">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="Enter city" />
                </div>
              </Col>
              <Col md={5}>
                <div className="containerform">
                  <label className="form-label">Area</label>
                  <input type="text" className="form-control" placeholder="Enter city" />
                </div>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <div className="formtext">
                  <label className="form-label">About Us</label>
                  <textarea className="form-control" rows={3} placeholder="Enter details about the shop"></textarea>
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
                <div>
                  <label className="form-label">Filter SubCategory</label>
                  <select className="form-control mb-3">
                    <option>Please choose an option</option>
                  </select>
                </div>
              </Col>
             
            </Row>
            <Col md={5}>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Search..." />
                </div>
              </Col>

            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Shop Logo</th>
                    <th>Mobile No.</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>City</th>
                    <th>Area</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rupesh sahu</td>
                    <td>Self made</td>
                    <td>
                      <img
                        src="path_to_logo"
                        alt="Shop Logo"
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>daasd</td>
                    <td>r@gmail.com</td>
                    <td>#########</td>
                    <td>Raipur</td>
                    <td>Raipur</td>
                    <td>
                    <FaEdit style={{ color: 'blue', fontSize: '2em' }}/>  
                    </td>
                    <td>
                    <MdDelete style={{ color: 'red', fontSize: '2em' }}/>
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

export default AddShop;
