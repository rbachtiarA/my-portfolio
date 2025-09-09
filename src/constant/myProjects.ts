import { MyProjectItem } from "@/types/myProject";

export const MY_WORKS_ITEMS: MyProjectItem[] = [
  {
    title: "Kriibo Web App",
    type: "Personal Project",
    summary:
      "A community forum application for sharing moments and thoughts on interesting topics. This platform helps you connect with others, engage in discussions, and express your feelings through comments on friend's posts.The app is built with Next.js for both the frontend and backend, using Supabase for database management and authentication, and Pinata Cloud for image storage.",
    linkDemo: "https://kriibo.vercel.app/",
    linkGithub: "https://github.com/rbachtiarA/Forum-app",
    linkDetails: "",
    mainImage: "/underconstruction.png",
    tools: [
      "javascript",
      "typescript",
      "html",
      "css",
      "nextjs",
      "supabase",
      "prisma",
    ],
    images: ["/underconstruction.jpg"],
    features: [
      {
        label: "Register & Login",
        description: "User can login with registered email or Gmail account",
      },
      {
        label: "Post and Comment",
        description:
          "User can posting their moment with text and image, view others post, and can comment to other users posts",
      },
      {
        label: "Customize Profile",
        description:
          "User can custom the profile details, profile picture, and profile banner",
      },
      {
        label: "Message",
        description:
          "User can message user-to-user privately via message feature",
      },
    ],
  },
  {
    title: "Bermuda Store",
    type: "Collaboration",
    summary:
      "A modern web-based grocery store application designed to simplify and enhance the shopping experience for customers. Built with NextJS framework for a fast, responsive frontend, Express.js for a robust backend, and Prisma with MySQL for efficient database management, it ensures high performance and scalability. The platform offers user-friendly navigation, secure transactions, and features tailored for convenience, such as personalized shopping lists, real-time inventory updates, and seamless checkout. With a focus on reliability and customer satisfaction, Bermuda Store aims to revolutionize the online grocery shopping experience.",
    linkDemo: "https://bermuda-web.vercel.app/",
    linkGithub: "https://github.com/rbachtiarA/Bermuda-app",
    linkDetails: "/works/bermuda-store-app",
    mainImage: "/bermuda-homepage1.webp",
    tools: [
      "javascript",
      "typescript",
      "nextjs",
      "nextui",
      "nodejs",
      "mysql",
      "prisma",
      "supabase",
    ],
    images: ["/bermuda-homepage.jpg"],
    features: [
      {
        label: "Register & Login",
        description:
          "User can login with registered email or use third-party authentication (ex: Google email)",
      },
      {
        label: "Determinating location",
        description:
          "Our app will track your current location or your address, this ensures faster delivery by selecting the optimal branch store based on distance for better customer satisfaction",
      },
      {
        label: "Cart",
        description:
          "Our user can keep track their needed product by adding it to cart, so user can keep track their with their grocery daily list.",
      },
      {
        label: "Payment Gateway",
        description:
          "Our app support transaction with many supported payment method, with payment gateway transaction is much easier, quicker, and safe",
      },
      {
        label: "Tracking Order",
        description:
          "User can track their order status, which user can at ease to see when they expect their order to arrive.",
      },
    ],
  },
  {
    title: "Bandar Ticket",
    type: "Collaboration",
    summary:
      "A comprehensive event ticketing web application designed to cater to different user roles. Customers can easily browse, buy, or book tickets for various events, while organizers can efficiently create events, manage ticketing, and monitor sales performance. Administrators oversee all platform data, ensuring smooth operations and integrity. Built with NextJS for an intuitive and dynamic user interface, Express.js for a scalable backend, and Prisma with MySQL for reliable database management, Bandar Tiket offers a seamless and secure platform for event management and ticket purchasing.",
    linkGithub: "https://github.com/rbachtiarA/bandar-ticket-app",
    linkDetails: "/works/bandar-ticket-app",
    mainImage: "/bandar-home.webp",
    tools: [
      "javascript",
      "typescript",
      "html",
      "css",
      "nextjs",
      "expressjs",
      "prisma",
      "mysql",
    ],
    images: ["/bandar-home.png"],
    features: [
      {
        label: "Register & Login",
        description: "User can login with registered email",
      },
      {
        label: "Organizer Roles",
        description:
          "You can become organizer, which can create your own event and make your own ticket & promo for your events, confirm user payment, and track ticket sales",
      },
      {
        label: "Browse Event & Buy ticket",
        description:
          "User can browse available event & buy ticket. User also can invite their friend to get our special promo",
      },
      {
        label: "Review & Rating",
        description:
          "User can leave their impression or review on event they already attended",
      },
      {
        label: "Tracking ticket",
        description:
          "User can track their ticket they already bought, so they cant be missed for their event",
      },
    ],
  },
];
