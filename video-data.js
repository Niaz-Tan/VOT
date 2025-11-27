// video-data.js - Simple data structure
const videoData = [
    {
        id: "programming",
        name: "Programming",
        locked: true,
        unlockMessage: "Enter programming access code",
        children: [
            {
                id: "web-dev",
                name: "Web Development", 
                locked: true,
                unlockMessage: "Enter web development code",
                children: [
                    {
                        id: "frontend",
                        name: "Front-End",
                        children: [
                            {
                                id: "html",
                                name: "HTML",
                                videos: [
                                    {
                                        id: "html-1",
                                        title: "HTML Crash Course",
                                        youtubeId: "UB1O30fR-EE",
                                        description: "Learn HTML basics quickly",
                                        duration: "1:02:35",
                                        completed: false
                                    }
                                ]
                            },
                            {
                                id: "css",
                                name: "CSS", 
                                videos: [
                                    {
                                        id: "css-1",
                                        title: "CSS Tutorial",
                                        youtubeId: "1Rs2ND1ryYc", 
                                        description: "Complete CSS guide",
                                        duration: "6:18:38",
                                        completed: false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "design",
        name: "Design",
        children: [
            {
                id: "ui-design",
                name: "UI Design",
                videos: [
                    {
                        id: "ui-1",
                        title: "UI Design Principles",
                        youtubeId: "9C8pxA7AecA",
                        description: "Learn UI design basics",
                        duration: "25:43",
                        completed: false
                    }
                ]
            }
        ]
    },
    {
        id: "business",
        name: "Business",
        locked: true,
        unlockMessage: "Enter business content code", 
        children: [
            {
                id: "marketing",
                name: "Marketing",
                videos: [
                    {
                        id: "marketing-1",
                        title: "Digital Marketing",
                        youtubeId: "abc123",
                        description: "Marketing strategies",
                        duration: "45:00",
                        completed: false
                    }
                ]
            }
        ]
    }
];