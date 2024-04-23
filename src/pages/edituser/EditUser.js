import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavdar";
import "./EditUser.css";

function EditUser() {

  const [usereData, setUserData] = useState({});
  const userId = useParams().userId;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/?id=${userId}`)
      .then((response) => setUserData(response.data[0]));
  }, []);

  const editUserHandler = () => {
    axios.put(`http://localhost:8000/users/${userId}` , usereData)
    Swal.fire({
        title : 'اطلاعات با موفقیت ویرایش شد',
        timer: 1500,
        timerProgressBar : true,
        showConfirmButton : false
    })
  }

const formHandler = (e) => {
    setUserData({ ...usereData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <div className="formContainer">
            <h1 className="py-4">ویرایش اطلاعات</h1>
            <Form>
              <Form.Group className="mb-3" data-aos="fade-right">
                <Form.Label>نام </Form.Label>
                <Form.Control
                  value={usereData.name}
                  name="name"
                    onChange={formHandler}
                  type="text"
                  placeholder="نام را وارد کنید"
                />
              </Form.Group>

              <Form.Group className="mb-3" data-aos="fade-left">
                <Form.Label>نام خوانوادگی</Form.Label>
                <Form.Control
                  value={usereData.family}
                  name="family"
                    onChange={formHandler}
                  type="text"
                  placeholder="    نام خوانوادگی را وارد کنید"
                />
              </Form.Group>

              <Form.Group className="mb-3" data-aos="fade-right">
                <Form.Label>کد ملی </Form.Label>
                <Form.Control
                  value={usereData.national_code}
                  name="national_code"
                    onChange={formHandler}
                  type="text"
                  placeholder="کد ملی  را وارد کنید"
                />
              </Form.Group>

              <Form.Group className="mb-3" data-aos="fade-left">
                <Form.Label>علاقه مندی</Form.Label>
                <Form.Control
                  value={usereData.favorite}
                  name="favorite"
                    onChange={formHandler}
                  type="text"
                  placeholder="علاقه مندی را وارد کنید"
                />
              </Form.Group>

              <Button
                onClick={editUserHandler}
                variant="primary"
                type="button"
              >
                ویرایش اطلاعات
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default EditUser;
