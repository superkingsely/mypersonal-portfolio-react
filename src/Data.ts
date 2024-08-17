import img from '../src/pics/me-blackcloth.png'
import chi from '../src/pics/chioma.png'
import native from '../src/pics/me-native.png'
import cat from '../src/assets/portfolio1.jpg'
import prod from '../src/assets/portfolio2.jpg'

 interface Islideobj{
    id:number,
    img:string|any,
    title:string,
    desc:string,
    bg:string
 }
const isonline=false;

export const data:Array<Islideobj>=[
    {
      id: 1,
      img: `${isonline?'https://i.ibb.co/XsdmR2c/1.png':img}`,
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: `${isonline?'https://i.ibb.co/DG69bQ4/2.png':chi}`,
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: `${isonline?'https://i.ibb.co/cXFnLLV/3.png':native}`,
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
  ];
  export const categories = [
    {
      id: 1,
      img:`${isonline?'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940':cat}`,
      title: "SHIRT STYLE!",
      cat:'women'
    },
    {
      id: 2,
      img: `${isonline?'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940':cat}`,
      title: "LOUNGEWEAR LOVE",
      cat:'coat'
    },
    {
      id: 3,
      img: `${isonline?'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500':cat}`,
      title: "LIGHT JACKETS",
      cat:'jeans'
    },
  ];

  export const popularProducts = [
    {
      id:1,
      img:`${isonline?"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png":prod}`,
    },
    {
      id:2,
      img:`${isonline?"https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388":prod}`,
    },
    {
      id:3,
      img:`${isonline?"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png":prod}`,
    },
    {
      id:4,
      img:`${isonline?"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png":prod}`,
    },
    {
      id:5,
      img:`${isonline?"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png":prod}`,
    },
    {
      id:6,
      img:`${isonline?"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png":prod}`,
    },
    {
      id:7,
      img:`${isonline?"https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png":prod}`,
    },
    {
      id:8,
      img:`${isonline?"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png":prod}`,
    },
  ]