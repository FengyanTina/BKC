import { SwiperSlide } from "swiper/react";
import NewsCarousel from "../../components/common/SwiperCarousel";
import SlickSlider from "../../components/common/SlickSlider";
import PauseOnHover from "../../components/common/SlickSlider";
import worshipHands from "../assets/worshipHands.jpg";
import edward from "../../assets/edward.jpg";
import BethelWorship from "../../assets/BethelWorship.jpg";
import Worship from "../../assets/Worship.jpeg";
import PrayerBible from "../../assets/spiritual-prayer-hands-holding-bible.jpg";
const events = [
 
    {
        id:"1",
        time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
        title: 'Reaching out ',
        image: PrayerBible,
        description: 'An exhibition featuring contemporary art pieces from local artists.'
    },
    {
        id:"2",
        time: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
        title: 'Tech Conference',
        image: edward,
        description: 'Join the biggest technology conference of the year with keynote speakers.'
    },
    {
        id:"3",
        time: new Date(2024, 9, 27, 9, 0), // October 27, 2024, 9:00 AM
        title: 'Charity Run',
        image: Worship,
        description: 'Participate in the annual charity run to support a good cause.'
    },
    {
        id:"4",
        time: new Date(2024, 9, 30, 17, 30), // October 30, 2024, 5:30 PM
        title: 'Food Festival',
        image: BethelWorship,
        description: 'Savor delicious dishes from a variety of food vendors and enjoy live entertainment.'
    }
];
export default function ActivitiesMainPage() {
    return (
        <>
        <p> this is activities</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>

        <div style={{ margin:'60px' }}>
        < NewsCarousel />
        </div>
        <div>

        <PauseOnHover events ={events}/>
        </div>
        </div>
        </>
    )}