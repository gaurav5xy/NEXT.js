export const themes = [
    {value: 'light', label: 'Light', icon: '/assets/icons/sun.svg'},
    {value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg'},
    {value: 'system', label: 'System', icon: '/assets/icons/computer.svg'},
]

export const sidebarLinks: SidebarLink[] = [
    {
        imagURL: "/assets/icons/home.svg",
        route: "/",
        label: "Home",
    },
    {
        imagURL: "/assets/icons/users.svg",
        route: "/community",
        label: "Community",
    },
    {
        imagURL: "/assets/icons/star.svg",
        route: "/collection",
        label: "Collection",
    },
    {
        imagURL: "/assets/icons/suitcase.svg",
        route: "/jobs",
        label: "Find jobs",
    },
    {
        imagURL: "/assets/icons/tag.svg",
        route: "/tags",
        label: "Tags",
    },
    {
        imagURL: "/assets/icons/user.svg",
        route: "/profile",
        label: "Profile",
    },
    {
        imagURL: "/assets/icons/question.svg",
        route: "/ask-question",
        label: "Ask a question",
    },
]

export const BADGE_CRITERIA = {
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
}