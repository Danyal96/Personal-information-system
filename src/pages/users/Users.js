import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavdar";
import UserItem from "../../components/userItem/UserItem";
import "./Users.css";

function Users() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => setDataUser(response.data));
  }, []);

  return (
    <>
      <MyNavbar />

      <Container>

        <h1 className="py-4"> کاربران</h1>

        <Row>
          {dataUser.map((item) => (
            <Col className="gy-3">
              <UserItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Users;
