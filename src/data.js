import ProductImg1 from "./assests/img/product/website3.jpg"
import ProductImg2 from "./assests/img/product/website4.jpg"
import ProductImg3 from "./assests/img/product/website5.jpg"
import ProductImg4 from "./assests/img/product/website6.jpg"
import ProductImg5 from "./assests/img/product/website7.jpg"
import ProductImg6 from "./assests/img/product/website8.jpg"
import FacebookIcon from "./assests/img/copyright/facebook.svg"
import TwitterIcon from "./assests/img/copyright/linkedin.svg"
import LinkedinIcon from "./assests/img/copyright/twitter.svg"
import OverviewProductImg from "./assests/img/overview/product.svg"
import Facebook from "./assests/img/overview/brands/facebook.svg"
import Google from "./assests/img/overview/brands/google.svg"
import LinkedIn from "./assests/img/overview/brands/linkedin.svg"
export const nav = [
    { name: 'Home', image:Google, href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Resturant', href: '/' },
    { name: 'Shopping', href: '/' },
    { name: 'Real Estate', href: '/' },
    { name: 'Local Services', href: '/' },
    { name: 'Health & Medical', href: '/' },
    { name: 'All Categories', href: '/' },
  ];

export const header = {
    logo: "Mr Bayoh",
    btnText: 'SL Company',
  };

  export const pricing = {
    title: 'Featured Listing',
    cards: [
      {
        image: ProductImg1,
        title: 'Starter Plan',
        name: 'Store unlimited data' ,
        price: '$9.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 300,
      },
      {
        image: ProductImg2,
        title: 'Silver Plan',
        name: 'Store unlimited data' ,
        price: '$19.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 600,
      },
      {
        image: ProductImg3,
        title: 'Diamond Plan',
        name: 'Store unlimited data' ,
        price: '$29.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 900,
      },
      {
        image: ProductImg4,
        title: 'Diamond Plan',
        name: 'Store unlimited data' ,
        price: '$29.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 900,
      },
      {
        image: ProductImg5,
        title: 'Diamond Plan',
        name: 'Store unlimited data' ,
        price: '$29.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 900,
      },
      {
        image: ProductImg6,
        title: 'Diamond Plan',
        name: 'Store unlimited data' ,
        price: '$29.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 900,
      },
    ],
  };
  
  export const recent ={
    title:"Recent Listing",
    cards:[
       {
        image:ProductImg6,
        name:"First",
        account:ProductImg6,
        price: '$29.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 900,
       },
       {
        image:ProductImg6,
        name:"First",
        account:ProductImg6,
        price: '$29.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Open this',
        delay: 900,
       },
       {
        image:ProductImg6,
        name:"First",
        account:ProductImg6,
        price: '$29.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 900,
       },
       {
        image:ProductImg6,
        name:"First",
        account:ProductImg6,
        price: '$29.99',
        userAmount: 'up to 3 user + 1.99 per user',
        btnText: 'Get this',
        delay: 900,
       }
    ]
  }

  export const overview = {
    productImg: OverviewProductImg,
    brands: [
      {
        image: Facebook,
        name:Facebook,
        delay: 300,
      },
      {
        image: Google,
        name:Google,
        delay: 400,
      },
      {
        image: LinkedIn,
        name:LinkedIn,
        delay: 600,
      },
      {
        image: TwitterIcon,
        name :TwitterIcon,
        delay: 600,
      },
    ],
  };
  
  export const navs = [
    { name: 'Facebook',image:Facebook, href: '/' },
    { name: 'Resturant',image:Google, href: '/' },
    { name: 'LinkedIn',image:LinkedIn, href: '/' },
    { name: 'Twitter',image:TwitterIcon, href: '/' },
  ];

  export const copyright = {
    link2: {
      name: 'All Reserved',
    },
    copyText: 'Copyright @ 2023 SL Company',
    social: [
      { icon: FacebookIcon, href: '/' },
      { icon: TwitterIcon, href: '/' },
      { icon: LinkedinIcon, href: '/' },
    ],
  };