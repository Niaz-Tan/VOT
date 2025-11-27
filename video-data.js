// video-data.js - Main data file for the YouTube Video Organizer

// {
//  id: "html-video-3",
//  title: "Learn HTML in 1 hour 🌎",
//  youtubeId: "HD13eq_Pmp8",
//  description:
//  "HTML full course tutorial for beginners. Learn HTML in one hour with this crash course.",
//  duration: "1:00:00",
//  completed: false,
// },

const videoData = [
  {
    id: "programming",
    name: "Programming",
    children: [
      {
        id: "web-dev",
        name: "Web Development",
        children: [
          {
            id: "frontend",
            name: "Front-End",
            children: [
              {
                id: "path-to-learn",
                name: "Path to Learn",
                children: [
                  {
                    id: "html",
                    name: "HTML",
                    videos: [],
                  },
                  {
                    id: "css",
                    name: "CSS",
                    videos: [],
                  },
                  {
                    id: "js",
                    name: "JavaScript",
                    videos: [],
                  },
                ],
              },
            ],
          },
          {
            id: "backend",
            name: "Backend",
            children: [
              {
                id: "nodejs",
                name: "Node.js",
                videos: [],
              },
              {
                id: "python",
                name: "Python",
                videos: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
