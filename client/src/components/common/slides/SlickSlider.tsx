

export let images = [
  "https://travelteam.com/wp-content/uploads/2020/02/Hamilton-island-air-Great-barrier-reef-discovery.jpg",
  "https://media.apnarm.net.au/media/images/2018/07/18/imagev165446767af67b17a209dcf24897f19a9-zhxv3b4659lgikmjmq2_ct1880x930.jpg",
  "https://www.qldeducationexperiences.org.au/wp-content/uploads/2021/06/Snorkelling-GBR-Shutterstock-scaled.jpg",
  "https://www.rydges.com/accommodation/cairns-qld/esplanade-cairns-resort/wp-content/uploads/sites/34/2021/08/9081ea8ef3f0c04fd0120c4e86f2bd1c.jpg",
];

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import NewsDetailsModal from "../../../pages/news/NewsDetails";
import formatDateTime from "../../../utils/FormatDateTime";
import { Activity } from "../../../modals/Activity";
function PauseOnHover({ events }: { events: Activity[] }) {
  const [selectedEvent, setSelectedEvent] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 768, // Screen width <= 768px
          settings: {
            slidesToShow: 1, // Show 1 slide at a time on smaller screens
          },
        },
      ],
    };

  let sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slickNext(); // Use 'any' to bypass TypeScript issues
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slickPrev(); // Use 'any' to bypass TypeScript issues
    }
  };
  const handleSlideClick = (event: Activity) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const displayImages = events.map((event, i) => (
    <div key={i} className="slide" onClick={() => handleSlideClick(event)}>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="text-overlay">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          {event.time && (

          <p>{formatDateTime(event.time)}</p>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="slider-container">
      <section className="slick-container">
        <Slider ref={sliderRef} {...settings}>
          {displayImages}
        </Slider>
        <div className="slick-arrows">
          <button onClick={previous}>
            <IoIosArrowBack />
          </button>
          <button onClick={next}>
            <IoIosArrowForward />
          </button>
        </div>
      </section>
      <NewsDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
    </div>
  );
}

export default PauseOnHover;
