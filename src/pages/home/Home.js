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
import { IoEyeSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaChartColumn } from "react-icons/fa6";


function Home() {
  const [dataUsers, setDataUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
  const [searchKeyName, setSearchKeyName] = useState("");
  const [searchKeyFamily, setSearchKeyFamily] = useState("");
  const [searchKeyFavorite, setSearchKeyFavorite] = useState("");

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <th>#</th>
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
                  <td>{datauser.id}</td>
                  <td>{datauser.name}</td>
                  <td>{datauser.family}</td>
                  <td>{datauser.national_code}</td>
                  <td>{datauser.favorite}</td>
                  <td className="do-td">
                    <span>
                      <IoEyeSharp size={"25px"} color={"#42c2f5"} />
                    </span>
                    <span>
                      <FaEdit size={"25px"} />
                    </span>
                    <span>
                      <FaLocationDot size={"25px"} color={"#f5428a"} />
                    </span>
                    <span>
                      <MdDelete size={"25px"} color={"#f52a48"} />
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
                          
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose2}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleClose2}>
                            Save Changes
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
