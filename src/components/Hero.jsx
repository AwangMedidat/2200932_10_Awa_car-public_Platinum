import React, { useEffect, useState } from "react";
import Searchform from "./Searchform";
import { Container, Button, Offcanvas } from "react-bootstrap";
import { useRouter } from "next/navigation";
import styles from "../styles/Home.module.css";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import auth from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";

function Hero(props) {
  const { user } = useSelector((state) => state.login);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const {
    withRentButton = true,
    withSearchForm = false,
    withHeroContent = true,
    withSearchResultForm = false,
    withSearchFormDetail = false,
  } = props;

  const toSearch = () => {
    router.push("/search");
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleLogout = () => {
    auth.logout();
  };

  // useEffect(() => {
  //   searchParams.get("name", "nama mobil");
  // }, []);

  return (
    <div>
      <section
        id={`${styles.hero}`}
        className="mb-3"
        style={{ position: "relative" }}
      >
        <nav
          className={`${styles.navbar} navbar navbar-expand-lg bg-body-tertiary`}
        >
          <div className="container">
            <Link className="navbar-brand" href="/">
              <span className={`${styles.logo}`}></span>
            </Link>
            <Button
              variant=""
              onClick={handleShow}
              className="navbar-toggler ms-auto"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <SideBar handleClose={handleClose} show={show} />
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-lg-end me-lg-5"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item me-3">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#features"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                {user && user.email ? (
                  <li className="nav-item me-3" onClick={() => handleLogout()}>
                    <a className="nav-link" href="#">
                      Logout
                    </a>
                  </li>
                ) : (
                  <li className="nav-item me-3">
                    <Link className="nav-link" href="/signup">
                      <button type="button" className="btn btn-success">
                        Register
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Container className={`${styles.heroContent}`}>
          {withHeroContent &&
            withSearchResultForm === false &&
            withSearchFormDetail === false && (
              <div className="row g-0">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <div className="col-lg-10">
                      <h1>
                        Sewa dan Rental Mobil Terbaik di Kawasan (Lokasimu)
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quos, unde ab! Consequatur culpa perspiciatis
                        doloremque distinctio vero, corrupti sunt ad impedit
                        suscipit optio harum aperiam natus similique esse enim
                        totam?
                      </p>
                      {withRentButton ? (
                        <>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={toSearch}
                          >
                            Mulai Sewa Mobil
                          </button>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className={`${styles.heroImage}`}>
                    <img
                      src="/images/car.png"
                      className="img-fluid object-fit-cover"
                      alt=""
                      // layout="fill"
                      // objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            )}
        </Container>
        {withSearchForm && <Searchform />}
        {withSearchResultForm && (
          <Searchform withButtonSearchCar withValueForm />
        )}
        {withSearchFormDetail && (
          <Searchform withButtonSearchCar disabledForm />
        )}
      </section>
    </div>
  );
}

export default Hero;
