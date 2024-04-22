import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavdar";
import "./Home.css";
import Table from "react-bootstrap/Table";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { IoEyeSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaChartColumn } from "react-icons/fa6";

function Home() {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setDataUsers(response.data));
  }, []);

  return (
    <>
      <MyNavbar />

      <Container>
        <Row >
          <Accordion className="py-4" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
              <Accordion.Header>بخش جستجو</Accordion.Header>
              <Accordion.Body>
                <div className="searchBoxContainer">
                  <input className="searchInput" type="text" />
                  <button className="searchButton">جستجو در نام</button>
                </div>

                <div className="searchBoxContainer">
                  <input className="searchInput" type="text" />
                  <button className="searchButton">جستجو در کدملی</button>
                </div>

                <div className="searchBoxContainer">
                  <input className="searchInput" type="text" />
                  <button className="searchButton">جستجو در علاقه مندی</button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>

        <Row>
          <Button variant="primary" type="button" className="add-btn">
            افزودن
          </Button>

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
                      <FaChartColumn size={"25px"} />
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
