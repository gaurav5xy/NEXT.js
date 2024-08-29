// Define the type for a theme
export interface Theme {
    value: string;
    label: string;
    icon: string;
}

export const themes: Theme[] = [
    { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
    { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
    { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
];

export interface Tags {
    name: string;
    count: number;
}

export const tags: Tags[] = [
    { name: "NEXTJS", count: 32 },
    { name: "TEST", count: 19 },
    { name: "REACT", count: 18 },
    { name: "CSS", count: 13 },
    { name: "TAILWIND", count: 8 },
]

// Define the interface for a question
export interface Question {
    que: string;
}

export const topQuestion: Question[] = [
    { que: "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?" },
    { que: "Is it only me or the font is bolder than necessary?" },
    { que: "Redux Toolkit Not Updating State as Expected" },
    { que: "Async/Await Function Not Handling Errors Properly" },
    { que: "Can I get the course for free?" },
];

// Define the interface for a sidebar link
export interface SidebarLink {
    imagURL: string;
    route: string;
    label: string;
}

export const sidebarLinks: SidebarLink[] = [
    { imagURL: "/assets/icons/home.svg", route: "/", label: "Home" },
    { imagURL: "/assets/icons/users.svg", route: "/community", label: "Community" },
    { imagURL: "/assets/icons/star.svg", route: "/collection", label: "Collection" },
    { imagURL: "/assets/icons/suitcase.svg", route: "/jobs", label: "Find jobs" },
    { imagURL: "/assets/icons/tag.svg", route: "/tags", label: "Tags" },
    { imagURL: "/assets/icons/user.svg", route: "/profile", label: "Profile" },
    { imagURL: "/assets/icons/question.svg", route: "/ask-question", label: "Ask a question" },
];

// Define the interface for badge criteria
export interface BadgeLevel {
    BRONZE: number;
    SILVER: number;
    GOLD: number;
}

export interface BadgeCriteria {
    QUESTION_COUNT: BadgeLevel;
    ANSWER_COUNT: BadgeLevel;
    QUESTION_UPVOTES: BadgeLevel;
    ANSWER_UPVOTES: BadgeLevel;
    TOTAL_VIEWS: BadgeLevel;
}

export const BADGE_CRITERIA: BadgeCriteria = {
    QUESTION_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    QUESTION_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    TOTAL_VIEWS: {
        BRONZE: 1000,
        SILVER: 10000,
        GOLD: 100000,
    },
};
