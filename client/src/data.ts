import PrayerBible from "./assets/spiritual-prayer-hands-holding-bible.jpg";
import worshipHands from "./assets/worshipHands.jpg";
import edward from "./assets/edward.jpg";
import BethelWorship from "./assets/BethelWorship.jpg";
import Worship from "./assets/Worship.jpeg";
import Conference from "./assets/Conference.jpg";
import Mission from "./assets/Mission.png";
import Prayer from "./assets/Prayer.jpg";
import Bible from "./assets/Bible.jpg";
import Varhistoria from "./assets/Varhistoria.jpg"
export interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { high: { url: string } };
    publishedAt: string;
  };
}
interface Section {
  title: string;
  subTitle?: string;
  category?:string;
  description: string;
  image: string | string[]; // Accept either a single string or an array of strings for images
  date?: Date;
  linkSubtitle?: string;
  location?: string;
}
interface InforCardProps {
    category?: string;
    title: string;
    subtitle: string;
    content: string;
    buttonText?: string;
    time?: Date;
  }
  interface InforCardImgSectionProps {
    category?: string;
    title: string;
    subtitle: string;
    content: string;
    buttonText?: string;
    time?: Date;
    image:string | string[];
  }

  export const sundayServiceCardInfor:Service={
    id: "1",
    title: "Word of the Day",
    subTitle:"välkommen till vår kyrka nu på söndag!",
    time:new Date(2024, 9, 22, 14, 30),
    category: "Sunday Service",
    description:"Veckans höjdpunkt i kyrkan är våra gudstjänster! Varje söndag klockan 11 träffas vi i Borås Kristna Center och firar gudstjänst. Syftet är att upphöja och ära Gud tillsammans. Våra gudstjänster är öppna för alla och vi vill vara tydliga med allt vi gör, så att alla kan förstå.Våra gudstjänster innehåller bön och lovsång, predikan och förbön. Givetvis avslutar vi med ett fantastiskt kyrkfika. För dig som besöker oss för första gången är fikat dessutom helt gratis!",
    image: Worship ,
  }
  export const sundaySchoolActivityCardInfor:Service={
    id: "1",
    title: "Sunday School",
    subTitle:"BKC-KIDS",
    time:new Date(2024, 9, 22, 14, 30),
    category: "BKC Kids",
    description:"BKC-Kids är för barn mellan 2-12 år. Barnens egen gudstjänst där vi tillsammans får möta spännande bibelpersoner, lyssna på Guds ord, lekar och tävlingar, vi äter korv och pysslar tillsammans. Kom med du också!",
    image: edward ,
  }
 
  export const youthActivityCardInfor:Service={
    id: "1",
    title: "Youth",
    subTitle:"Bkc Ungdom",
    time:new Date(2024, 9, 22, 14, 30),
    category: "Youth Group",
    description:"Vi kommer att leva, sova och äta på sommargården Solviken som ligger 5 km utanför Fristad precis vid sjön Ärtingen. Det finns tillgång till ca 20 sängplatser så för att alla säkert ska på plats kommer vi även att ställa upp husvagnar eller erbjuda möjlighet att tälta för er som är riktigt äventyrliga! Vill du inte övernatta utan bara vara med dagtid går detta också bra, skriv då detta i anmälan!",
    image: worshipHands ,
  }
  export const homeGroupActivityCardInfor:Service={
    id: "1",
    title: "Find your community",
    subTitle:"Together,Stronger!",
    time:new Date(2024, 9, 22, 14, 30),
    category: "Home Group",
    description:"Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn.",
    image:Varhistoria ,
  }
  
export const imageGallarytemData = [
    {
      img: Bible,
      title: "Bible Study",
      author: "@bkristastucchio",
      featured: true,
    },
    {
      img: Worship,
      title: "Juesus Conference",
      author: "@rollelflex_graphy726",
    },
    {
      img: Prayer,
      title: "Praying for Borås",
      author: "@helloimnik",
    },
    {
      img: Conference,
      title: "Comminity Prayer",
      author: "@nolanissac",
    },
    {
      img: Mission,
      title: "Youth Camp",
      author: "@hjrc33",
    },
    {
      img: BethelWorship,
      title: "Togather Worship",
      author: "@arwinneil",
      featured: true,
    },
    {
      img: worshipHands,
      title: "Worship Conference",
      author: "@tjdragotta",
    },
    {
      img: PrayerBible,
      title: "Study the words",
      author: "@katie_wasserman",
    },
  ];
  
  
  export const socialMediaActivityCardInfor={
    id: "1",
    title: "All activities on Social media",
    subTitle:"Together,Stronger!",
    time:new Date(2024, 9, 22, 14, 30),
    category: "Social Media",
    description:"Under höstens tre första veckor (36-38) kommer vi uppmuntra till bön och fasta.Under höstens tre Under höstens tre Under höstens tre Under höstens tre tre Under höstens tre - auto updating activies from our social media",
    image:imageGallarytemData ,
  }


export interface Service {
  id: string;
  title: string;
  subTitle?: string;
  time?: Date;
  category: string;
  description: string;
  image: string | string[];
}
export interface Category {
  name: string;
  startTime: string; // ISO format string
  endTime: string; // ISO format string
  jobs: Job[];
}
export interface Job {
  name: string;
  members: string[];
  totalNumberNeeded: number;
}

interface Event {
  eventName: string;
  description: string;
  detail: string;
}

export interface ServiceSchedule {
  startTime: string;
  endTime: string;
  event: Event;
  team: string;
  memberNeeded?: number;
  scheduleStatus: "open" | "closed"; // Union for specific values
  category: Category[]; // Array of categories, each with its own jobs
}
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

interface Step {
    title: string;
    description: string;
    link?: string; // Optional link if needed
  }
  
  export const steps = [
    {
      title: "Step 1",
      description: "Register You",
      link: "http://example.com/register",
    },
    {
      title: "Step 2",
      description:
        "After you register, you will receive a follow-up email with a video explaining the meaning and significance of water baptism.",
    },
    { title: "Step 3", description: "Schedule the baptism." },
  ];
  export const baptismService = {
    title: "If you would like to be baptized, follow these simple steps.",
    steps: steps,
    image: Mission,
  };
export const sundayService: Service = {
  id: "1",
  time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
  title: "Welcom to our Sunday Service! ",
  subTitle: "  Come as you are !",
  category: "service",
  image: Conference,
  description:
    "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our senior pastor, Tim Dilena. Each service lasts around 90 minutes. Engaging worship music. Come as you are. There is no dress code.",
};
export const prayerService: Section = {
  title: "We want to pray for you!",
  linkSubtitle: "send in your prayer requiest any time",
  image: Prayer,
  description:
    "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our senior pastor, Tim Dilena. Each service lasts around 90 minutes. Engaging worship music. Come as you are. There is no dress code.",
};
export const services = [
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

