// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";


// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import InforCard from "./InforCard";
// /* swwiper slider  */


// // Sample data for InforCard
// const newsItems = [
//   {
//     category: "BKC Kids",
//     title: "Word of the Day",
//     subtitle: "adjective",
//     content: "Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa.",
//     buttonText: "Learn More",
//     time: new Date("2024-09-01")
//   },
//   {
//     category: "Youth Group",
//     title: "Event Update",
//     subtitle: "noun",
//     content: "Join us for an exciting youth group event. It's going to be a great time with lots of activities.",
//     buttonText: "Join Us",
//     time: new Date("2024-09-02")
//   },
//   {
//     category: "Home Group",
//     title: "New Study Series",
//     subtitle: "verb",
//     content: "Our home group is starting a new study series on community building. Don't miss out!",
//     buttonText: "Sign Up",
//     time: new Date("2024-09-03")
//   },
//   {
//     category: "Church",
//     title: "Sunday Service",
//     subtitle: "noun",
//     content: "Join us for our Sunday service as we celebrate and worship together. All are welcome.",
//     buttonText: "See Details",
//     time: new Date("2024-09-04")
//   },
//   {
//     category: "Community",
//     title: "Volunteer Opportunity",
//     subtitle: "adjective",
//     content: "We're looking for volunteers to help with community outreach programs. Get involved and make a difference.",
//     buttonText: "Get Involved",
//     time: new Date("2024-09-05")
//   }
// ];

// const SwiperSlider = () => {
//   const displayCards = newsItems.map((item, i) => (
//     <SwiperSlide key={i} className="single-slide">
//       <InforCard
//         category={item.category}
//         title={item.title}
//         subtitle={item.subtitle}
//         content={item.content}
//         buttonText={item.buttonText}
//         time={item.time}
//       />
//     </SwiperSlide>
//   ));

//   return (
//     <section  style={{
//         width: '70%',
//         margin: '2rem auto',
//       }}>
//       <Swiper
//         effect={"coverflow"}
//         spaceBetween={10}
//         slidesPerView={3}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         breakpoints={{
//           "@0.00": {
//             slidesPerView: 1,
//           },
//           "@0.75": {
//             slidesPerView: 1,
//           },
//           "@1.00": {
//             slidesPerView: 3,
//           },
//           "@1.50": {
//             slidesPerView: 3,
//           },
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//       >
//         {displayCards}
//       </Swiper>
//     </section>
//   );
// };

// export default SwiperSlider;
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './commonComponents.css'; 
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
 

const NewsCarousel = ({  events }:{ events: EventProps[] }) => {
    
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
  

export default  NewsCarousel ;