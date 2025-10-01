import crefin from '../../assets/images/crefin.png';
import travel from '../../assets/images/travel.png';
import realEstate from '../../assets/images/realEstate.png';
import ayla from '../../assets/images/ayla.png';

interface Project {
    id: number;
    name: string;
    description: string;
    tools: string[];
    code: string;
    demo: string;
    image: string;
  role: string;
  achievements: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "Worklog V2",
    description: "helps users fill their workdays and what project they are working on, the application based on two roles, administrator and collaborator. The administrator has access to manage users, assign them to the project, and change their status. They can also download an Excel file containing details of the working days of their collaboration.",
        tools: [".NET 8", "Angular", "Msal", "Bootstratp", "Unit Testing", "SQL Server","Azure Devops","Send Grid"],
        code: "",
        demo: "",
        image: "assets/images/projects/crunch-africa.webp",
    role: "Full stack .NET Angular",
    achievements:"Reduce query time by using stored procedure;"
    },
    {
        id: 2,
        name: "Deutsch Institute",
      description: ":Development of a Back-Office application that centralizes the management of German training courses, by offering the planning and consultation of available training slots, the processing of applications based on the analysis of CVs and applicant profiles, and logistical organization, including the allocation of rooms and the coordination of assistants.",
        tools: ["C#", ".NET 8", "Swagger", "Angular","Azure","Authentication B2C" ,"SQL Server","Visual Studio"],
        code: "",
        demo: "",
        image: "assets/images/projects/akyurt-online.webp",
      role: "Full stack .NET Angular",
      achievements: "Add B2C Authentication ,Refont of whole interface;"

    },
    {
        id: 3,
        name: "Panotin",
      description: "Panotin is a multilingual story box using a language learning process based on the LaFrogg method, registered with the INPI(French National Institute of Intellectual Property) and published by Averty Media Publishing.It is part of the current craze for story boxes by adding a touch of language learning.",
      tools: ["C#", ".NET 8", "Swagger", "Angular","Application Insight","Azure Web App", "Azure", "Authentication B2C", "SQL Server", "Visual Studio", "REST API"],
        code: "",
        demo: "",
        image: "assets/images/projects/baredex.webp",
      role: "Full stack .NET Angular",
      achievements: "Optimized page load speed by 40% "

    },
    {
        id: 4,
        name: "Marketplace",
    description: "The project called MarketPlace is a web application allowing employees of TREND- IT internal services to use several internal service management modules of the company (worklog, IsAudit, etc.) ",
        tools: [".NET 7", "Entity Framework", "Sql Server", "Blazor","Service Bus","Azure Devops"],
        code: "",
        demo: "",
        image: "assets/images/projects/mocowi.webp",
      role: ".NET Blazor / .NET Azure Function Developer ",
      achievements: "Manage sharing data between azure function and blazor app;review the code to mantain a clean deployed code"

    },
    {
        id: 5,
        name: "Vacanciel",
        description: "Vacanciel is a web application project aimed at healthcare companies. Vacanciel's main objective is to simplify the management of vacationers with disabilities.",
        tools: ["Angular 14", ".NET core 6", "Msal Library", "Unit Testing", "Entity Framework","Sql Server","Azure Devops","Web Api App","Visual Studio"],
        code: "",
        demo: "",
        image: "assets/images/projects/sabroso-logo.jpg",
      role: "Fullstack .Net/Angular Developer",
      achievements: "Improve the use of unit test by 60%;"

    },
    {
        id: 6,
        name: " Santé Lac ",
        description: "SantéLac is a web application project for healthcare companies, enabling the reporting of interactions with practitioners.",
        tools: ["Angular 14", ".NET core 6", "Msal Library", "Unit Testing", "Entity Framework", "Sql Server", "Azure Devops", "Web Api App", "Visual Studio"],
        code: "",
        demo: "",
        image: "assets/images/projects/sigma-app.png",
      role: "Intern",
      achievements: "Improve the responsive design by 50%"

    },
    //{
    //    id: 7,
    //    name: "Daily Expense Manager",
    //    description: "Personal finance management application utilizing Firebase Firestore for data storage and Google Authentication for user management. Implemented Provider pattern for state management.",
    //    tools: ["Flutter", "Provider", "Firebase", "Google Auth"],
    //    code: "",
    //    demo: "https://play.google.com/store/apps/details?id=com.aqua.regalsystem.pocket.manager",
    //    image: "assets/images/projects/daily-expense-manager.png",
    //    role: "Flutter Developer",
    //},
    //{
    //    id: 8,
    //    name: "ABC Delivery",
    //    description: "Delivery management application featuring Google Maps integration, Firebase Firestore for data storage, and Google Authentication. Implemented Provider pattern for state management and location tracking features.",
    //    tools: ["Flutter", "Provider", "Google Maps", "Firebase", "Google Auth"],
    //    code: "",
    //    demo: "https://play.google.com/store/apps/details?id=com.eeizo.abcdelivery",
    //    image: "assets/images/projects/abcd.png",
    //    role: "Full Stack Developer",
    //}
];
