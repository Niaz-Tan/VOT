// video-data.js - Simple data structure
const videoData = [
  {
    id: "programming",
    name: "Programming",
    locked: false,
    unlockMessage: "Enter programming access code",
    children: [
      {
        id: "web-dev",
        name: "Web Development",
        locked: false,
        unlockMessage: "Enter web development code",
        children: [
          // frontend
          {
            id: "frontend",
            name: "Front-End",
            children: [
              {
                id: "js",
                name: "JavaScript",
                children: [
                  {
                    id: "js-1",
                    name: "JavaScript course 1",
                    videos: [
                      {
                        id: "js40-1",
                        title:
                          "Day 01: Introduction to JavaScript & Setting Up Environments",
                        youtubeId: "t8QXF85YovE",
                        description:
                          "Introduction to JavaScript & Setting Up Environments",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-2",
                        title:
                          "Day 02: Variables and Data Types in JavaScript || 40 Days of JS",
                        youtubeId: "tVqy4Tw0i64",
                        description: "Variables and Data Types in JavaScript",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-3",
                        title:
                          "Day 03: MASTER Operators & Expressions in JavaScript 🤩",
                        youtubeId: "vI95K-_JLOw",
                        description:
                          "MASTER Operators & Expressions in JavaScript",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-4",
                        title:
                          "Day 04: MASTERING Control Flow in JavaScript With Quizzes 🤗",
                        youtubeId: "Fn_DhBu3VyU",
                        description:
                          "MASTERING Control Flow in JavaScript With Quizzes",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-5",
                        title:
                          "Day 05: MASTERING Loops and Iterations in JavaScript With Quizzes 🤩",
                        youtubeId: "MDR43-2GvtA",
                        description:
                          "MASTERING Loops and Iterations in JavaScript With Quizzes",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-6",
                        title:
                          "Day 06: MASTERING Functions in JavaScript With Quizzes 😊",
                        youtubeId: "6UJ9SyHvkJY",
                        description:
                          "MASTERING Functions in JavaScript With Quizzes",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-7",
                        title:
                          "Day 07: Learn To Build Beginner-Friendly JavaScript Projects 🔥",
                        youtubeId: "fydbEttef04",
                        description:
                          "Learn To Build Beginner-Friendly JavaScript Projects",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-8",
                        title:
                          "Day 08: Mastering JavaScript Execution Context Visually 🤩",
                        youtubeId: "ylx5F7hbzVQ",
                        description:
                          "Mastering JavaScript Execution Context Visually",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-9",
                        title:
                          "Day 09: MASTERING Hoisting & Temporal Dead Zone Is EASY 🤩",
                        youtubeId: "OqMxh1QdYEg",
                        description:
                          "MASTERING Hoisting & Temporal Dead Zone Is EASY",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-10",
                        title:
                          "Day 10: MASTERING Scope & Scope Chain in JavaScript 🤩",
                        youtubeId: "14H2TsrjcLo",
                        description:
                          "MASTERING Scope & Scope Chain in JavaScript",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-11",
                        title:
                          "Day 11: JavaScript Closures With Real-World Examples 🤩",
                        youtubeId: "lA7CGz3iHyI",
                        description:
                          "JavaScript Closures With Real-World Examples",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-12",
                        title:
                          "Day 12: Mastering JavaScript Objects With Real-World Examples 🤩",
                        youtubeId: "c5vEfYj5yZM",
                        description:
                          "Mastering JavaScript Objects With Real-World Examples",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-13",
                        title:
                          "Day 13: Why JavaScript this is So Tricky? Let's Break It Down! 🤩",
                        youtubeId: "9mfb0j9PcHw",
                        description:
                          "Why JavaScript this is So Tricky? Let's Break It Down!",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-14",
                        title:
                          "Day 14: Error Handling in JavaScript is Easy. Let's MASTER 🤩",
                        youtubeId: "XpMW-gxNYD8",
                        description:
                          "Error Handling in JavaScript is Easy. Let's MASTER",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-15",
                        title:
                          "Day 15: JavaScript Array Master Course - Beginner to PRO 🤩",
                        youtubeId: "t05NguKFKo0",
                        description:
                          "JavaScript Array Master Course - Beginner to PRO",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-16",
                        title:
                          "Day 16: MASTER JavaScript Debugging With DevTools & VS Code 🪲",
                        youtubeId: "VInAd-GJZec",
                        description:
                          "MASTER JavaScript Debugging With DevTools & VS Code",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-17",
                        title:
                          "Day 17: Introduction to the DOM with JavaScript Projects 🤩",
                        youtubeId: "F4mVSaj6uls",
                        description:
                          "Introduction to the DOM with JavaScript Projects",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-18",
                        title:
                          "Day 18: Learn DOM Manipulations with JavaScript Like a PRO 🤩",
                        youtubeId: "BoYgn_Mf0hA",
                        description:
                          "Learn DOM Manipulations with JavaScript Like a PRO",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-19",
                        title: "Day 19: MASTER JavaScript Events Like a PRO 🤩",
                        youtubeId: "ybgI5vVE668",
                        description: "MASTER JavaScript Events Like a PRO",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-20",
                        title:
                          "Day 20: Advanced DOM Tricks Every Web Developer Must Know 🤩",
                        youtubeId: "aNhPav1DgTY",
                        description:
                          "Advanced DOM Tricks Every Web Developer Must Know",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-21",
                        title:
                          "Day 21: Build A Quiz App Using JavaScript DOM APIs 🤩",
                        youtubeId: "hTDeyBq5EdM",
                        description:
                          "Build A Quiz App Using JavaScript DOM APIs",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-22",
                        title:
                          "Day 22: MASTER JavaScript Callback with Asynchronous Programming 🤩",
                        youtubeId: "EtoHtZ8mdWA",
                        description:
                          "MASTER JavaScript Callback with Asynchronous Programming",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-23",
                        title:
                          "Day 23: MASTER JavaScript Promises - From Beginner to PRO 🤩",
                        youtubeId: "R52MdtIW3rs",
                        description:
                          "MASTER JavaScript Promises - From Beginner to PRO",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-24",
                        title:
                          "Day 24: Master JavaScript async/await & Simplify Promises Like a PRO 🤩",
                        youtubeId: "WQdCffdPPKI",
                        description:
                          "Master JavaScript async/await & Simplify Promises Like a PRO",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-25",
                        title:
                          "Day 25: JavaScript fetch() Explained Like Never Before 🤩",
                        youtubeId: "G3oPZSvrO9w",
                        description:
                          "JavaScript fetch() Explained Like Never Before",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-26",
                        title:
                          "Day 26: 6 Common Mistakes with JavaScript Promises & Async Code 🤩",
                        youtubeId: "c_zcXUz1neo",
                        description:
                          "6 Common Mistakes with JavaScript Promises & Async Code",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-27",
                        title:
                          "Day 27: How Your Async Code Works | JavaScript Event Loop Simplified! 🤩",
                        youtubeId: "4IYcwOfW3BM",
                        description:
                          "How Your Async Code Works | JavaScript Event Loop Simplified!",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-28",
                        title:
                          "Day 28: Build a Country App with Asynchronous JavaScript & TailwindCSS 🤩",
                        youtubeId: "jXS0VURNqxA",
                        description:
                          "Build a Country App with Asynchronous JavaScript & TailwindCSS",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-29",
                        title:
                          "Day 29: Object Oriented Programming (OOP) Explained with Real-Life Analogies 🤩",
                        youtubeId: "oRQOiyO-kHg",
                        description:
                          "Object Oriented Programming (OOP) Explained with Real-Life Analogies",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-30",
                        title:
                          "Day 30: From Zero to OOP Hero with JavaScript ES6 Classes 🤩",
                        youtubeId: "kG5t34ciG9w",
                        description:
                          "From Zero to OOP Hero with JavaScript ES6 Classes",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-31",
                        title:
                          "Day 31: Master JavaScript Prototypes and Object Patterns - Confused to Confident! 🤩",
                        youtubeId: "Uru85QW9zkk",
                        description:
                          "Master JavaScript Prototypes and Object Patterns - Confused to Confident!",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-32",
                        title:
                          "Day 32: Master JavaScript Modules: import, export, and Organize Like a Pro! 🤩",
                        youtubeId: "l50gnBWHmdA",
                        description:
                          "Master JavaScript Modules: import, export, and Organize Like a Pro!",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-33",
                        title:
                          "Day 33: JavaScript Map, Set, WeakMap, WeakSet - When & Why to Use Them! 🤩",
                        youtubeId: "kzuvppEWm88",
                        description:
                          "JavaScript Map, Set, WeakMap, WeakSet - When & Why to Use Them!",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-34",
                        title:
                          "Day 34: Build a Full Library App in JavaScript – OOP, ES6 Modules & Tailwind CSS 🤩",
                        youtubeId: "DXO8tiGH18Y",
                        description:
                          "Build a Full Library App in JavaScript – OOP, ES6 Modules & Tailwind CSS",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-35",
                        title:
                          "Day 35: JavaScript Debugging Secrets Revealed by Expert 🤩",
                        youtubeId: "wjM89QIL5As",
                        description:
                          "JavaScript Debugging Secrets Revealed by Expert",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-36",
                        title:
                          "Day 36: Master JavaScript Performance — Debouncing, Throttling, Memoization Explained 🤩",
                        youtubeId: "RnQPMARiq18",
                        description:
                          "Master JavaScript Performance — Debouncing, Throttling, Memoization Explained",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-37",
                        title:
                          "Day 37: JavaScript Web APIs Explained – Geolocation, Clipboard, Notifications, Playground, & More! 🤩",
                        youtubeId: "Ffpd8RkEXlY",
                        description:
                          "JavaScript Web APIs Explained – Geolocation, Clipboard, Notifications, Playground, & More!",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-38",
                        title:
                          "Day 38: JavaScript Memory Management & Garbage Collection Explained 🤩",
                        youtubeId: "w-ZCIbEU-0A",
                        description:
                          "JavaScript Memory Management & Garbage Collection Explained",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-39",
                        title:
                          "Day 39: JavaScript Interview Preparation Guide (By a 20-Year Industry Veteran)",
                        youtubeId: "aCJUoYWwAj8",
                        description:
                          "JavaScript Interview Preparation Guide (By a 20-Year Industry Veteran)",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-40",
                        title:
                          "Day 40: Master JavaScript with This Real-World Expense Splitter App (Full Guide)",
                        youtubeId: "ITNaVrDk9G0",
                        description:
                          "Master JavaScript with This Real-World Expense Splitter App (Full Guide)",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "js40-41",
                        title:
                          "40 Days of JavaScript Badge Unlocked! 🎖️ Here's How to Get Yours",
                        youtubeId: "_CDnddrVMyo",
                        description:
                          "40 Days of JavaScript Badge Unlocked! Here's How to Get Yours",
                        duration: "1:02:35",
                        completed: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          //   backend
          {
            id: "backend",
            name: "Back-End",
            children: [
              {
                id: "nodejs",
                name: "Node.js",
                children: [
                  {
                    id: "nodejs-1",
                    name: "Node.js  course 1",
                    videos: [
                      {
                        id: "backend-1",
                        title:
                          "Master JavaScript Essentials for Backend Development | Part 1",
                        youtubeId: "T55Kb8rrH1g",
                        description:
                          "Master JavaScript Essentials for Backend Development",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-2",
                        title:
                          "Install Node.js & Learn File System Operations | Backend Development Part 2",
                        youtubeId: "OFbSqd54Wwk",
                        description:
                          "Install Node.js & Learn File System Operations",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-3",
                        title:
                          "NPM Basics & Advanced Features | Backend Development Part 3",
                        youtubeId: "I3y1XHwBL6w",
                        description: "NPM Basics & Advanced Features",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-4",
                        title:
                          "Master Express.js, Routing & Middleware | Backend Development Part 4",
                        youtubeId: "3CkgSQWwNlk",
                        description: "Master Express.js, Routing & Middleware",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-5",
                        title:
                          "Form Handling, Sessions & Cookies | Backend Development Essentials | Part 5",
                        youtubeId: "5NWdfv5P5d4",
                        description: "Form Handling, Sessions & Cookies",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-6",
                        title:
                          "Master EJS, Dynamic Routing & Project Setup | Backend Development Part 6",
                        youtubeId: "mRTG7fdzF6s",
                        description:
                          "Master EJS, Dynamic Routing & Project Setup",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-7",
                        title:
                          "Hands-on Practice: Revisiting Key Concepts | Backend Development Part 7",
                        youtubeId: "HXLDBqs5urw",
                        description:
                          "Hands-on Practice: Revisiting Key Concepts",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-8",
                        title:
                          "From Theory to Practice: Real-World Applications | Backend Development Part 8",
                        youtubeId: "Mt_6jGHfQyk",
                        description:
                          "From Theory to Practice: Real-World Applications",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-9",
                        title:
                          "Building the Edit Feature | Backend Development Part 9",
                        youtubeId: "ZZQcDrRl98w",
                        description: "Building the Edit Feature",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-10",
                        title:
                          "MongoDB, Mongoose & Database Management | Backend Development Part 10",
                        youtubeId: "4TFA-vy_fdo",
                        description: "MongoDB, Mongoose & Database Management",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-11",
                        title:
                          "Master CRUD Operations with MongoDB | Backend Development Part 11",
                        youtubeId: "ZMEVI1Y7FtY",
                        description: "Master CRUD Operations with MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-12",
                        title:
                          "CRUD Operations with EJS & Server-Side Rendering | MongoDB | Backend Development Part 12",
                        youtubeId: "DteKTbG2hE0",
                        description:
                          "CRUD Operations with EJS & Server-Side Rendering",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-13",
                        title:
                          "Update feature with EJS & Server-Side Rendering | MongoDB | Part 13 - Backend Development",
                        youtubeId: "PbDXCh4sMIo",
                        description:
                          "Update feature with EJS & Server-Side Rendering",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-14",
                        title:
                          "Authentication & Authorization | Bcrypt | JWT | Part 14 - Backend Development",
                        youtubeId: "19RpMEonSu8",
                        description:
                          "Authentication & Authorization | Bcrypt | JWT",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-15",
                        title:
                          "Authentication & Authorization | JWT Token | MongoDB | Part 15 - Backend Development",
                        youtubeId: "brf7roEutrc",
                        description:
                          "Authentication & Authorization | JWT Token | MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-16",
                        title:
                          "Data Association | MongoDB | Part 16 - Backend Development",
                        youtubeId: "g1uL2byQTzo",
                        description: "Data Association | MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-17",
                        title:
                          "Mini Project 1 | Data Association - MongoDB | Part 17 - Backend Development",
                        youtubeId: "8CAjzElJUiU",
                        description:
                          "Mini Project 1 | Data Association - MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-18",
                        title:
                          "Mini Project 1 - Part 2 | Data Association - MongoDB | Part 18 - Backend Development",
                        youtubeId: "VR9ua1zVqz0",
                        description:
                          "Mini Project 1 - Part 2 | Data Association - MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-19",
                        title:
                          "Mini Project 1 - Part 3 | Data Association - MongoDB | Part 19 - Backend Development",
                        youtubeId: "Ebp7dWMGHlI",
                        description:
                          "Mini Project 1 - Part 3 | Data Association - MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-20",
                        title:
                          "Multer - multipart/form-data | MongoDB | Part 20 - Backend Development",
                        youtubeId: "n1a2cITIVeQ",
                        description: "Multer - multipart/form-data | MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-21",
                        title:
                          "Multer - Proper Folder Structure | MongoDB | Part 21 - Backend Development",
                        youtubeId: "SgcDucMCngw",
                        description:
                          "Multer - Proper Folder Structure | MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-22",
                        title:
                          "Project Announcement | Upcoming launches | MongoDB | Backend Development",
                        youtubeId: "yinZI1Es3kk",
                        description:
                          "Project Announcement | Upcoming launches | MongoDB",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-23",
                        title:
                          "Backend Project 1 | Scatch - A premium bag Shop | Backend Development",
                        youtubeId: "p0dCi5D6gDI",
                        description:
                          "Backend Project 1 | Scatch - A premium bag Shop",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-24",
                        title:
                          "Backend Project 1 - Part 2 | Scatch | Modeling the Database | Backend Development",
                        youtubeId: "sEZ1lul6GpI",
                        description:
                          "Backend Project 1 - Part 2 | Scatch | Modeling the Database",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-25",
                        title:
                          "Backend Project 1 - Part 3 | Scatch | Separation of Concerns | Backend Development",
                        youtubeId: "Bl3u1VTYTHY",
                        description:
                          "Backend Project 1 - Part 3 | Scatch | Separation of Concerns",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-26",
                        title:
                          "Backend Project 1 - Part 4 | Scatch | Development/Production Setup | Backend Development",
                        youtubeId: "Lu7q-Uqy7-g",
                        description:
                          "Backend Project 1 - Part 4 | Scatch | Development/Production Setup",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-27",
                        title:
                          "[🚀Backend Project] Chess.com clone which you will be able to understand. | Sheryians",
                        youtubeId: "CP7xxjuAJ0w",
                        description:
                          "Chess.com clone which you will be able to understand",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-28",
                        title:
                          "Backend Project 1 - Part 5 | Scatch | User Authentication & Functionality | Backend Development",
                        youtubeId: "5lWWOJBWeTA",
                        description:
                          "Backend Project 1 - Part 5 | Scatch | User Authentication & Functionality",
                        duration: "1:02:35",
                        completed: false,
                      },
                      {
                        id: "backend-29",
                        title:
                          "Backend Project 1 - Part 6 | Scatch | Add to Cart Feature & Nav Feature | Backend Development",
                        youtubeId: "up9db_91qEE",
                        description:
                          "Backend Project 1 - Part 6 | Scatch | Add to Cart Feature & Nav Feature",
                        duration: "1:02:35",
                        completed: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
