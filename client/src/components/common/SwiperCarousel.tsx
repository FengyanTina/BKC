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
import worshipHands from "../../assets/worshipHands.jpg";
import edward from "../../assets/edward.jpg";
import BethelWorship from "../../assets/BethelWorship.jpg";
import Worship from "../../assets/Worship.jpeg";
import './commonComponents.css'; 
import 'swiper/css';

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
interface ComingEvent{
title:string,
time:Date,
details?:string,
imageUrl?:string
}
const NewsCarousel = () => {
    const events: ComingEvent[] = [
        {
          title: "Sunday Worship",
          time: new Date('2024-09-22T10:00:00'),
          details: "Join us for a special Sunday worship service.",
          imageUrl: worshipHands, // Use actual image URL
        },
        {
          title: "Community Outreach",
          time: new Date('2024-09-25T14:00:00'),
          details: "Participate in our community outreach program.",
          imageUrl: edward, // Use actual image URL
        },
        {
          title: "Bible Study Group",
          time: new Date('2024-09-27T19:00:00'),
          details: "Deep dive into the scriptures with our study group.",
          imageUrl: BethelWorship, // Use actual image URL
        },
        {
          title: "Prayer Meeting",
          time: new Date('2024-09-30T08:00:00'),
          details: "Come together for our weekly prayer meeting.",
          imageUrl: Worship, // Use actual image URL
        },
      ];
    
      const displayEvents = events.map((event, i) => (
        <SwiperSlide className="single-slide" key={i}>
          {event.imageUrl && <img src={event.imageUrl} alt={event.title} />}
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
          slidesPerView={3}
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