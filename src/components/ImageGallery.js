import { useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { moviePoster } from "../services/TMDBService";

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handlePrevious = () => {
    setSelectedImageIndex(
      selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex(
      selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0
    );
  };

  return (
    <Container>
      <h2>Image Gallery</h2>
      <Row>
        {images
          .map((image, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image
                className='m-1'
                src={moviePoster(image.file_path)}
                alt=''
                thumbnail
              />
            </Col>
          ))
          .slice(0, 8)}
      </Row>
      <Modal
        show={selectedImageIndex !== null}
        onHide={() => setSelectedImageIndex(null)}
        centered
      >
        <Modal.Body className='text-center'>
          <Image
            src={moviePoster(images[selectedImageIndex]?.file_path) || ""}
            fluid
          />
          <div className='d-flex justify-content-between mt-3'>
            <button className='btn btn-dark' onClick={handlePrevious}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span style={{ color: "black" }}>
              {selectedImageIndex + 1}/{images.length}
            </span>
            <button className='btn btn-dark' onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ImageGallery;
