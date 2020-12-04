export const reserveImgUrl = "https://via.placeholder.com/150.jpg/";
export const defaultProfileImgUrl =
  "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg";
export const notFoundPageImg =
  "https://klondike-studio.ru/images/wiki/development/error-404-page.jpg";

export const loginIncorrectMessage =
  "The username or password you entered is incorrect";

export const authStorageKey = "news-isAuthorized";

export const routesLinks = {
  home: "/",
  news: "/news",
  profile: "/profile",
  login: "/login",
};

export const headerLinksList = [
  { label: "Home", linkTo: routesLinks.home, classes: "nav-item" },
  { label: "News", linkTo: routesLinks.news, classes: "nav-item" },
  {
    label: "Profile",
    linkTo: routesLinks.profile,
    classes: "nav-item profile-link",
  },
  { label: "Login", linkTo: routesLinks.login, classes: "nav-item" },
];
