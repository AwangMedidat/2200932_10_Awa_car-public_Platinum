import React from "react";
import { Row, Col, Card, Container, Button, ListGroup } from "react-bootstrap";

function StepTwo(props) {
  const { styles, nextStep, orderDetail, formatDateToIndonesian } = props;

  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Text copied to clipboard!");
  };

  return (
    <Container className={`mb-3 ${styles.cardCarDetail}`}>
      <Row>
        <Col className="col-7">
          <Card className="mb-2 border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <Card.Title className="mt-4">
                Selesaikan Pembayaran Sebelum
              </Card.Title>
              <Card.Text className="mt-4">
                <p>{formatDateToIndonesian()}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4 border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <Card.Title className="mt-4">Lakukan Transfer Ke</Card.Title>
              <div className={`${styles.cardWrapper} mt-3`}>
                <Card
                  style={{
                    marginRight: "10px",
                    width: "70px",
                    height: "30px",
                  }}
                >
                  <Card.Body style={{ padding: "0" }}>
                    <Card.Text>
                      <p
                        style={{
                          marginLeft: "20px",
                        }}
                      >
                        {`BCA`}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className="d-flex flex-column justify-content-center">
                  <p style={{ marginBottom: "5px" }}>{"BCA Transfer"}</p>
                  <p>{"a.n Binar Car Rental"}</p>
                </div>
              </div>
              <Card.Text>
                <div
                  className={`copyable ${styles.copyField}`}
                  onClick={() => copyToClipboard("Nomor Rekening Text")}
                >
                  <p className={styles.copyText}>Nomor Rekening</p>
                </div>
              </Card.Text>
              <Card.Text>
                <p>Total Bayar</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-5">
          <Card className="border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <Card.Title>
                <h5></h5>
              </Card.Title>
              <div className="d-flex flex">
                <div>
                  <img
                    src="/images/logo/users-logo.png"
                    alt=""
                    style={{ width: "15px", marginRight: "5px" }}
                  />{" "}
                </div>
                <Card.Title className="mt-1 fs-6 fw-semibold">
                  <p className="text-secondary"></p>
                </Card.Title>
              </div>
              <div className="mt-5 mb-2">
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <p>Total</p>
                    <h6>i</h6>
                  </div>
                </Card.Text>
                <Card.Text>
                  <h6>Harga</h6>
                  <div className="d-flex justify-content-between">
                    <ul>
                      <li>Sewa Mobil Hari</li>
                    </ul>
                    <p></p>
                  </div>
                </Card.Text>
                <Card.Text>
                  <h6>Biaya Lainnya</h6>
                  <div className="d-flex justify-content-between">
                    <ul>
                      <li>Pajak</li>
                    </ul>
                    <p style={{ color: "#28a745" }}>Termasuk</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <ul>
                      <li>Biaya makan supir</li>
                    </ul>
                    <p style={{ color: "#28a745" }}>Termasuk</p>
                  </div>
                </Card.Text>
                <Card.Text>
                  <h6>Belum Termasuk</h6>
                  <div className="d-flex justify-content-between">
                    <ul>
                      <li>Bensin</li>
                      <li>Total dan parkir</li>
                    </ul>
                  </div>
                </Card.Text>
              </div>
              <hr />
              <div className="mt-3 mb-5">
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6></h6>
                  </div>
                </Card.Text>
              </div>
              <div>
                <Button
                  type="button"
                  variant="success"
                  className="d-block"
                  style={{ width: "100%" }}
                  onClick={nextStep}
                >
                  Bayar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StepTwo;
