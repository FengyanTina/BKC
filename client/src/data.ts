import PrayerBible from "./assets/spiritual-prayer-hands-holding-bible.jpg";
import worshipHands from "./assets/worshipHands.jpg";
import edward from "./assets/edward.jpg";
import BethelWorship from "./assets/BethelWorship.jpg";
import Worship from "./assets/Worship.jpeg";
import Conference from "./assets/Conference.jpg";
import Mission from "./assets/Mission.png";
import Prayer from "./assets/Prayer.jpg";
import Bible from "./assets/Bible.jpg";
export const events = [
    {
      time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
      title: "Art Exhibition",
      image: PrayerBible,
      description:
        "An exhibition featuring contemporary art pieces from local artists.",
    },
    {
      time: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
      title: "Tech Conference",
      image: edward,
      description:
        "Join the biggest technology conference of the year with keynote speakers.",
    },
    {
      time: new Date(2024, 9, 27, 9, 0), // October 27, 2024, 9:00 AM
      title: "Charity Run",
      image: Worship,
      description:
        "Participate in the annual charity run to support a good cause.",
    },
    {
      time: new Date(2024, 9, 30, 17, 30), // October 30, 2024, 5:30 PM
      title: "Food Festival",
      image: BethelWorship,
      description:
        "Savor delicious dishes from a variety of food vendors and enjoy live entertainment.",
    },
  ];
 export const comingEvents = [
    {
      id: "1",
      title: "Sunday Worship",
      time: new Date("2024-09-22T10:00:00"),
      description: "Join us for a special Sunday worship service.",
      image: worshipHands, // Use actual image URL
    },
    {
      id: "2",
      title: "Community Outreach",
      time: new Date("2024-09-25T14:00:00"),
      description: "Participate in our community outreach program.",
      image: edward, // Use actual image URL
    },
    {
      id: "3",
      title: "Bible Study Group",
      time: new Date("2024-09-27T19:00:00"),
      description: "Deep dive into the scriptures with our study group.",
      image: BethelWorship, // Use actual image URL
    },
    {
      id: "4",
      title: "Prayer Meeting",
      time: new Date("2024-09-30T08:00:00"),
      description: "Come together for our weekly prayer meeting.",
      image: Worship, // Use actual image URL
    },
  ];

  export const news = [
    {
      id: "1",
      time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
      title: "Reaching out ",
      image: PrayerBible,
      description:
        "An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.",
    },
    {
      id: "2",
      time: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
      title: "Easter camp",
      image: edward,
      description:
        "Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.",
    },
    {
      id: "3",
      time: new Date(2024, 9, 27, 9, 0), // October 27, 2024, 9:00 AM
      title: "Charity Run",
      image: Worship,
      description:
        "Participate in the annual charity run to support a good cause.",
    },
    {
      id: "4",
      time: new Date(2024, 9, 30, 17, 30), // October 30, 2024, 5:30 PM
      title: "Food Festival",
      image: BethelWorship,
      description:
        "Savor delicious dishes from a variety of food vendors and enjoy live entertainment.",
    },
  ];
   export const topics = [
    { title: " Youtube Video 1", url: "/react-hooks", backgroundImage: Prayer },
    { title: " Youtube Video 2", url: "/js-es6", backgroundImage: Worship },
    {
      title: " Youtube Video 3",
      url: "/css-grid-flexbox",
      backgroundImage: Bible,
    },
    { title: " Youtube Video 4", url: "/redux", backgroundImage: Mission },
    {
      title: " Youtube Video 5",
      url: "/typescript-react",
      backgroundImage: Conference,
    },
  ];
