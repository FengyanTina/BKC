
// import Slider from "react-slick";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
import  React,{ useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
interface EventProps {
    id: string;
    time:Date;
    title: string;
    image: string;
    description: string;
  }

 
  
function PauseOnHover({  events }:{ events: EventProps[] }) {
    
//     const displayImages = images.map((img, i) => (
//     <div key={i}>
//       <img src={img} alt={`slider-${i}`} />
//     </div>
//   ));
// const displayImages = images.map((img, i) => (
//     <div key={i} className="slide">
//       <div
//         className="image-container"
//         style={{
//           backgroundImage: `url(${img})`,
//         }}
//       >
//         <div className="text-overlay">
//           <h2>Beautiful Destination {i + 1}</h2>
//           <p>Experience the beauty of nature</p>
//         </div>
//       </div>
//     </div>
//   ));

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        
      };
      const navigate = useNavigate();


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


const displayImages = events.map((event,i)=>(
    <div key={i} className="slide">
         <Link to={`/news/${i}`}>
        <div className="image-container" style={{backgroundImage: `url(${event.image})`,}}>
            <div className="text-overlay">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>{event.time.toLocaleDateString('sv-SE')} {event.time.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>

        </div>
        </Link>
    </div>
))




  return (
    <div className="slider-container">  
       <section className="slick-container">
       <Slider   ref={sliderRef}
        {...settings}
        >
         {displayImages}
       </Slider>
        <div className="slick-arrows">
         <button onClick={previous}>
           <IoIosArrowBack />
         </button>
         <button  onClick={next}>
           <IoIosArrowForward />
         </button>
       </div> 
     </section>
    </div>
  );
}

// return (
//     <div className="slider-container">
//       <section className="slick-container">
//         <Slider {...settings}>
//           {events.map((event) => (
//             <div key={event.id} className="slide">
//               <Link to={`/news/${event.id}`}>
//                 <div
//                   className="image-container"
//                   style={{ backgroundImage: `url(${event.image})` }}
//                 >
//                   <div className="text-overlay">
//                     <h2>{event.title}</h2>
//                     <p>{event.description}</p>
//                     <p>
//                       {event.time.toLocaleDateString("sv-SE")}{" "}
//                       {event.time.toLocaleTimeString("sv-SE", {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </Slider>
//         <div className="slick-arrows">
//           <button onClick={() => sliderRef.current?.slickPrev()}>
//             <IoIosArrowBack />
//           </button>
//           <button onClick={() => sliderRef.current?.slickNext()}>
//             <IoIosArrowForward />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

export default PauseOnHover;
