import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/navigation";

function Searchform(props) {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  const router = useRouter();

  const {
    withButtonSearchCar = false,
    withValueForm = false,
    disabledForm = false,
  } = props;
  const [name, setName] = useState();
  const [kategori, setKategori] = useState();
  const [harga, setHarga] = useState();
  const [status, setStatus] = useState();
  const [nameUrl, setNameUrl] = useState();
  const [kategoriUrl, setKategoriUrl] = useState();
  const [statusUrl, setStatusUrl] = useState();
  const [hargaUrl, setHargaUrl] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    router.push(
      `/result?name=${name}&kategori=${kategori}&harga=${harga}&status=${status}`
    );
    // window.location.reload();
  };

  // useEffect(() => {
  //   setNameUrl(queryParams.get("name"));
  //   setKategoriUrl(queryParams.get("kategori"));
  //   if (queryParams.get("status") === "false") {
  //     setStatusUrl("Tersewa");
  //   } else {
  //     setStatusUrl("Disewa");
  //   }
  //   setHargaUrl(queryParams.get("harga"));
  // }, [location]);

  return (
    <Container className={`py-3 ${styles.searchForm}`}>
      <Card className="py-3 px-3 my-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            {withButtonSearchCar && <h5>Pencarian mu</h5>}
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={disabledForm ? "" : `Ketik nama / tipe mobil`}
                  className="search-input"
                  defaultValue={withValueForm ? nameUrl : ""}
                  onChange={(evt) => setName(evt.target.value)}
                  disabled={disabledForm ? true : false}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  className="search-input"
                  defaultValue={withValueForm ? kategoriUrl : ""}
                  onChange={(e) => setKategori(e.target.value)}
                  disabled={disabledForm ? true : false}
                >
                  <option value="">
                    {disabledForm ? "" : `Masukkan Kapasitas Mobil`}
                  </option>
                  <option value="small">2 - 4 orang</option>
                  <option value="medium">4 - 6 orang</option>
                  <option value="large">6 - 8 orang</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Harga</Form.Label>
                <Form.Select
                  className="search-input"
                  defaultValue={withValueForm ? hargaUrl : ""}
                  onChange={(e) => setHarga(e.target.value)}
                  disabled={disabledForm ? true : false}
                >
                  <option value="">
                    {disabledForm ? "" : `Masukkan Harga Sewa per Hari`}
                  </option>
                  <option value="0-399999">{`< 400.000`}</option>
                  <option value="400000-600000">{`400.000 - 600.000`}</option>
                  <option value="600001-99999999999">{`> 600.000`}</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <div className="d-flex align-items-end gap-3">
                <Form.Group className="flex-fill">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    className="search-input"
                    defaultValue={withValueForm ? statusUrl : ""}
                    onChange={(e) => setStatus(e.target.value)}
                    disabled={disabledForm ? true : false}
                  >
                    <option value={true}>{disabledForm ? "" : `Disewa`}</option>
                    <option value={false}>Tersewa</option>
                  </Form.Select>
                </Form.Group>
                {withButtonSearchCar ? (
                  disabledForm ? (
                    <></>
                  ) : (
                    <Button type="submit" variant="outline-primary">
                      Edit
                    </Button>
                  )
                ) : (
                  <Button type="submit" variant="success">
                    Cari Mobil
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Searchform;
