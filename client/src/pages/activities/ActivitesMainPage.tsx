import { SwiperSlide } from "swiper/react";
import NewsCarousel from "../../components/common/SwiperCarousel";
import SlickSlider from "../../components/common/SlickSlider";
import PauseOnHover from "../../components/common/SlickSlider";

export default function ActivitiesMainPage() {
    return (
        <>
        <p> this is activities</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>

        <div style={{ margin:'60px' }}>
        < NewsCarousel />
        </div>
        <div>

        <PauseOnHover/>
        </div>
        </div>
        </>
    )}