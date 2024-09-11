BKC webpages
BKC_Project/
├── React/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── ... (other React files)
├── Api/
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── appsettings.json
│   ├── Program.cs
│   ├── Startup.cs
│   ├── ... (other ASP.NET Core files)
├── BKC_Project.sln


to run the frontend
-> cd client
-> npm run dev

cover within container
 .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
    width: 100vw; /* Take up full viewport width */
    height: 100vh;
    max-width:1200px; /* Take up full viewport height */
    background-size: cover; /* Ensure background image covers the div */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Prevent background image from repeating */
  }