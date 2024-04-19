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
    title: "Safety & Security",
    path: "/safety-security",
    newTab: false,
  },
  {
    id: 6,
    title: "Get Involved",
    path: "/get-involved",
    newTab: false,
  },
  {
    id: 7,
    title: "Resources",
    path: "/resources",
    newTab: false,
  },
  {
    id: 8,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 9,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 91,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 92,
        title: "Campaigns Page",
        path: "/campaigns",
        newTab: false,
      },
      {
        id: 93,
        title: "How it Works Page",
        path: "/how-it-works",
        newTab: false,
      },
      {
        id: 94,
        title: "Safety & Security Page",
        path: "/safety-security",
        newTab: false,
      },
      {
        id: 95,
        title: "Get Involved Page",
        path: "/get-involved",
        newTab: false,
      },
      {
        id: 96,
        title: "Resources Page",
        path: "/resources",
        newTab: false,
      },
      {
        id: 97,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 98,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 99,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 90,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
