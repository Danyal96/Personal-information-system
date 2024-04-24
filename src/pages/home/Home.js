import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavdar";
import "./Home.css";
import Table from "react-bootstrap/Table";
import { Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import Map from "react-map-gl";
import * as React from "react";

function Home() {
  const [dataUsers, setDataUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [searchKeyName, setSearchKeyName] = useState("");
  const [searchKeyFamily, setSearchKeyFamily] = useState("");
  const [searchKeyFavorite, setSearchKeyFavorite] = useState("");

 

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => setDataUsers(response.data));
  }, []);

  const resetFormData = () => {
    setFormData({
      name: "",
      family: "",
      national_code: "",
      favorite: "",
    });
  };

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addInfoHandler = () => {
    axios.post("http://localhost:8000/users", formData);

    resetFormData();
    handleClose();
  };

  const nameSearchInputHandler = (e) => {
    setSearchKeyName(e.target.value);
  };

  const nameSearchButtonHandler = () => {
    axios
      .get(`http://localhost:8000/users?name=${searchKeyName}`)
      .then((response) => setDataUsers(response.data));
  };

  const familySearchInputHandler = (e) => {
    setSearchKeyFamily(e.target.value);
  };

  const familySearchButtonHandler = () => {
    axios
      .get(`http://localhost:8000/users?family=${searchKeyFamily}`)
      .then((response) => setDataUsers(response.data));
  };

  const favoriteSearchInputHandler = (e) => {
    setSearchKeyFavorite(e.target.value);
  };

  const favoriteSearchButtonHandler = () => {
    axios
      .get(`http://localhost:8000/users?favorite=${searchKeyFavorite}`)
      .then((response) => setDataUsers(response.data));
  };

  const data = [
    { name: "شنبه", uv: 4, pv: 2400, amt: 2400 },
    { name: "یکشنبه", uv: 5, pv: 2400, amt: 2400 },
    { name: "دوشنبه", uv: 4, pv: 2400, amt: 2400 },
    { name: "سه شنبه", uv: 3, pv: 2400, amt: 2400 },
    { name: "چهار شنبه", uv: 5, pv: 2400, amt: 2400 },
    { name: "پنجشنبه ", uv: 5, pv: 2400, amt: 2400 },
    { name: " جمعه", uv: 6, pv: 2400, amt: 2400 },
  ];

  let number = 0;

  return (
    <>
      <MyNavbar />

      <Container>
        <Row>
          <Accordion className="py-4" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>بخش جستجو</Accordion.Header>
              <Accordion.Body>
                <div className="searchBoxContainer">
                  <input
                    className="searchInput"
                    type="text"
                    onChange={nameSearchInputHandler}
                  />
                  <button
                    className="searchButton"
                    onClick={nameSearchButtonHandler}
                  >
                    جستجو در نام
                  </button>
                </div>

                <div className="searchBoxContainer">
                  <input
                    className="searchInput"
                    type="text"
                    onChange={familySearchInputHandler}
                  />
                  <button
                    className="searchButton"
                    onClick={familySearchButtonHandler}
                  >
                    جستجو در نام خوانوادگی
                  </button>
                </div>

                <div className="searchBoxContainer">
                  <input
                    className="searchInput"
                    type="text"
                    onChange={favoriteSearchInputHandler}
                  />
                  <button
                    className="searchButton"
                    onClick={favoriteSearchButtonHandler}
                  >
                    جستجو در علاقه مندی
                  </button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>

        <Row>
          <Button
            variant="primary"
            type="button"
            className="add-btn"
            onClick={handleShow}
          >
            افزودن
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>اطلاعات جدید را وارد کنید</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" data-aos="fade-right">
                  <Form.Label> نام</Form.Label>
                  <Form.Control
                    value={formData.name}
                    name="name"
                    onChange={formHandler}
                    type="text"
                    placeholder="نام را وارد کنید"
                  />
                </Form.Group>

                <Form.Group className="mb-3" data-aos="fade-left">
                  <Form.Label> نام خوانوادگی</Form.Label>
                  <Form.Control
                    value={formData.family}
                    name="family"
                    onChange={formHandler}
                    type="text"
                    placeholder="نام خانوادگی را وارد کنید "
                  />
                </Form.Group>

                <Form.Group className="mb-3" data-aos="fade-right">
                  <Form.Label> کد ملی</Form.Label>
                  <Form.Control
                    value={formData.national_code}
                    name="national_code"
                    onChange={formHandler}
                    type="text"
                    placeholder="  کد ملی را وارد کنید"
                  />
                </Form.Group>

                <Form.Group className="mb-3" data-aos="fade-left">
                  <Form.Label> علاقه مندی</Form.Label>
                  <Form.Control
                    value={formData.favorite}
                    name="favorite"
                    onChange={formHandler}
                    type="text"
                    placeholder=" علاقه مندی را وارد کنید"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                بستن
              </Button>
              <Button variant="primary" onClick={addInfoHandler}>
                افزودن اطلاعات
              </Button>
            </Modal.Footer>
          </Modal>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ردیف</th>
                <th>نام</th>
                <th>نام خوانوادگی</th>
                <th>کد ملی</th>
                <th>علاقه مندی </th>
                <th> عملیات </th>
              </tr>
            </thead>
            <tbody>
              {dataUsers.map((datauser) => (
                <tr>
                  <td>{(number += 1)}</td>
                  <td>{datauser.name}</td>
                  <td>{datauser.family}</td>
                  <td>{datauser.national_code}</td>
                  <td>{datauser.favorite}</td>
                  <td className="do-td">
                    <span>
                      <Button
                        variant="primary"
                        onClick={handleShow3}
                        className="chartbtn"
                      >
                        <FaLocationDot size={"25px"} color={""} />
                      </Button>

                      <Modal show={show3} onHide={handleClose3}>
                        <Modal.Header closeButton>
                          <Modal.Title> موقعیت مکانی</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Map
                            mapboxAccessToken="pk.eyJ1IjoiZGFueWFsOTYiLCJhIjoiY2x2ZHU4cnYzMDJyNTJqcGJmdGpxbjZycyJ9.ifZ3cJG18pqXacKcTQP-GQ"
                            initialViewState={{
                              longitude: 51.389,
                              latitude: 35.6892,
                              zoom: 7,
                            }}
                            style={{ width: 465, height: 400 }}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose3}>
                            بستن
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </span>

                    <span>
                      <Button
                        variant="primary"
                        onClick={handleShow2}
                        className="chartbtn"
                      >
                        <FaChartColumn size={"25px"} />
                      </Button>

                      <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                          <Modal.Title>نمودار میزان مطالعه</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                          >
                            <Line
                              type={"monotone"}
                              dataKey="uv"
                              stroke="#8884d8"
                            />
                            <CartesianGrid
                              stroke="#ccc"
                              strokeDasharray="5 5"
                            />
                            <XAxis dataKey="name" />
                            <YAxis />
                          </LineChart>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose2}>
                            بستن
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
