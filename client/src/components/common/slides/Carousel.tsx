
import { Swiper, SwiperSlide } from "swiper/react";
import '../commonComponents.css'; 
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


interface EventProps {
    id: string;
    time:Date;
    title: string;
    image: string;
    description: string;
    details?:string
  }
 

const Carousel = ({  events }:{ events: EventProps[] }) => {
    
      const displayEvents = events.map((event) => (
        <SwiperSlide className="single-slide" key={event.id}>
          {event.image && <img src={event.image} alt={event.title} />}
          <h2>{event.title}</h2>
          <h5> {event.time.toLocaleDateString('sv-SE')} {event.time.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}</h5>
          {event.details && <p>{event.details}</p>}
        </SwiperSlide>
      ));
    
    return (
        <section className="swiper-slider">
        <Swiper
          effect={"coverflow"}
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
            },
            "@0.75": {
              slidesPerView: 1,
            },
            "@1.00": {
              slidesPerView: 3,
            },
            "@1.50": {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}>
          {displayEvents}
        </Swiper>
      </section>
    );
  };
  

export default  Carousel ;