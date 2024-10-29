import "./Footer.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });

  const toggleModal = (title: string, text: string) => {
    setModalContent({ title, text });
    setShowModal(!showModal);
  };

  const renderTextWithReadMore = (title: string, text: string) => {
    const limit = 200;
    return (
      <>
        <p>
          {text.length > limit ? `${text.substring(0, limit)}...` : text}
          {text.length > limit && (
            <Button
              variant="link"
              className=" read-more readMoreBtn"
              onClick={() => toggleModal(title, text)}
            >
              Read More
            </Button>
          )}
        </p>
      </>
    );
  };

  return (
    <div>
      <footer className="text-center container-fluid">
        <div className="container p-4">
          <div className="footer-component">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase cookie-policy">Cookie Policy</h5>
                {renderTextWithReadMore(
                  "Cookie Policy",
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!"
                )}
              </div>

              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase privacy-policy">
                  Privacy Policy
                </h5>
                {renderTextWithReadMore(
                  "Privacy Policy",
                  `At Pam Web Solutions, one of our main priorities is
                  the privacy of our visitors. This Privacy Policy document contains types of information that is
                  collected and recorded by Pam Web Solutions and how we use it. Pam Web Solutions follows a standard procedure of using log files. These files log visitors when they
                  visit websites. All hosting companies do this and a part of hosting services' analytics. The information
                  collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider
                  (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not
                  linked to any information that is personally identifiable. The purpose of the information is for
                  analyzing trends, administering the site, tracking users' movement on the website, and gathering
                  demographic information.`
                )}
              </div>
            </div>

            {/* Modal for displaying full text */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title className="text-dark">
                  {modalContent.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-dark">{modalContent.text}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

        <div className="text-center p-3">
          <div>
            <span className="copyright">©</span> {currentYear} Copyright
          </div>
          {/* <i className="fa-solid fa-dove mx-2 dove-icon"></i> */}
          <a
            className="pws-fbLink"
            href="https://www.facebook.com/profile.php?id=61562777530514"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pam Web Solutions
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
