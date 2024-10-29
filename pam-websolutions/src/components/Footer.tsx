import "./Footer.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    text: JSX.Element;
  }>({
    title: "",
    text: <></>,
  });

  const toggleModal = (title: string, text: JSX.Element) => {
    setModalContent({ title, text });
    setShowModal(!showModal);
  };

  const renderTextWithReadMore = (
    title: string,
    text: JSX.Element,
    preview: string
  ) => {
    const limit = 170;
    return (
      <>
        <p>
          {preview.length > limit
            ? `${preview.substring(0, limit)}...`
            : preview}
          {preview.length > limit && (
            <Button
              variant="link"
              className="read-more readMoreBtn"
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
                  <>
                    <p>
                      Cookies are small text files placed on your device by
                      websites you visit. They are widely used to enhance user
                      experience, allowing websites to remember your
                      preferences, analyze site traffic, and tailor content to
                      user interests. However, at Pam Web Solutions, we
                      prioritize your privacy and are committed to providing a
                      transparent browsing experience. Therefore, we want to
                      inform you that our website does not use cookies, tracking
                      pixels, or any other tracking technologies. This means
                      that while you visit our site, we do not track your
                      browsing behavior, store personal preferences, or collect
                      any information about your activity online.
                    </p>
                    <ul>
                      <li>
                        <strong>No Data Collection Through Cookies</strong>: We
                        do not track your browsing behavior, store personal
                        preferences, or collect any information about your
                        activity on our site.
                      </li>
                      <li>
                        <strong>No Third-Party Cookies</strong>: We do not host
                        advertisements or integrate third-party trackers that
                        may place cookies on your device.
                      </li>
                    </ul>

                    <p>
                      If we introduce cookies in the future, we will update this
                      policy and provide the option for you to manage your
                      cookie preferences.
                    </p>
                    <p>
                      For questions regarding our use of data, please refer to
                      our <strong>Privacy Policy</strong> or reach
                      out to us at{" "}
                      <a href="mailto:info@pamwebsolutions.com">
                        info@pamwebsolutions.com
                      </a>
                    </p>
                  </>,
                  "Cookies are small text files placed on your device by websites you visit. They are widely used to enhance user experience, allowing websites to remember your preferences, analyze site traffic, and tailor content to user interests. However, at Pam Web Solutions, we prioritize your privacy and are committed to providing a transparent browsing experience. Therefore, we want to inform you that our website does not use cookies, tracking pixels, or any other tracking technologies. This means that while you visit our site, we do not track your browsing behavior, store personal preferences, or collect any information about your activity online ..."
                )}
              </div>

              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase privacy-policy">
                  Privacy Policy
                </h5>
                {renderTextWithReadMore(
                  "Privacy Policy",
                  <>
                    <p>
                      Pam Web Solutions values your privacy and is committed to
                      protecting your personal data. This policy explains what
                      information we collect, how we use it, and your rights
                      regarding this information.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                      We collect information solely through our contact form:
                    </p>
                    <ul>
                      <li>
                        <strong>Full Name</strong>
                      </li>
                      <li>
                        <strong>Email Address</strong>
                      </li>
                      <li>
                        <strong>Contact Number</strong>
                      </li>
                      <li>
                        <strong>Subject and Message</strong>
                      </li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                      We use the information provided in the contact form to
                      respond to your inquiries. We use <strong>EmailJs</strong>{" "}
                      to securely process this information.
                    </p>

                    <h2>3. Data Security and Retention</h2>
                    <p>
                      Your data is stored securely and is only retained as
                      necessary for business purposes. After handling your
                      inquiry, data may be securely deleted, unless legally
                      required to retain it longer.
                    </p>

                    <h2>4. Your Rights</h2>
                    <p>
                      You have the right to request access, correction, or
                      deletion of your personal information. To exercise these
                      rights, please contact us at{" "}
                      <a href="">
                        info@pamwebsolutions.com
                      </a>
                      .
                    </p>

                    <h2>5. Updates</h2>
                    <p>
                      We may update this policy as needed. Please review it
                      periodically to stay informed about our data practices.
                    </p>
                  </>,
                  "Pam Web Solutions values your privacy and is committed to protecting your personal data. This policy explains what information we collect, how we use it, and your rights regarding this information..."
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
