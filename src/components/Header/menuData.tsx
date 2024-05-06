import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Campaigns",
    path: "/campaigns",
    newTab: false,
  },
  {
    id: 4,
    title: "How it Works",
    path: "/how-it-works",
    newTab: false,
  },
  {
    id: 5,
    title: "Why üboost",
    path: "/why-uboost",
    newTab: false,
  },
  {
    id: 6,
    title: "Get in Touch",
    path: "/get-in-touch",
    newTab: false,
  },
  {
    id: 7,
    title: "More...",
    path: "/more",
    newTab: false,
  },
  {
    id: 8,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 81,
        title: "Home Page",
        path: "/",
        newTab: false,
      },
      {
        id: 82,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 83,
        title: "Campaigns Page",
        path: "/campaigns",
        newTab: false,
      },
      {
        id: 84,
        title: "How it Works Page",
        path: "/how-it-works",
        newTab: false,
      },
      {
        id: 85,
        title: "Why üboost Page",
        path: "/why-uboost",
        newTab: false,
      },
      {
        id: 86,
        title: "Get in Touch Page",
        path: "/get-in-touch",
        newTab: false,
      },
      {
        id: 87,
        title: "More... Page",
        path: "/more",
        newTab: false,
      },
      {
        id: 88,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 89,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 80,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
      {
        id: 90,
        title: "Fundraising Dashboard",
        path: "/fundraising-dashboard",
        newTab: false,
      },
      {
        id: 91,
        title: "Campaign Detail",
        path: "/campaign-detail",
        newTab: false,
      },
      {
        id: 91,
        title: "Membership Options",
        path: "/membership-options",
        newTab: false,
      },
    ],
  },
];
export default menuData;
