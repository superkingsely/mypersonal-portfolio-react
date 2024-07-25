import img from '../src/pics/me-blackcloth.png'
import chi from '../src/pics/chioma.png'
import native from '../src/pics/me-native.png'

 interface Islideobj{
    id:number,
    img:string|any,
    title:string,
    desc:string,
    bg:string
 }
export const data:Array<Islideobj>=[
    {
        id: 1,
        img: img,
        title: "SUMMER SALE",
        desc: "1st Lorem ipsum dolor sit amet consectetur.afa safdas savas svasv assas vaa  fsvs sAvas",
        bg: "bg-blue-100"
    },
    {
        id: 2,
        img: chi,
        title: "AUTUMN COLLECTION",
        desc: "2nd Lorem ipsum dolor sit amet consectetur.afa safdas savas svasv assas vaa  fsvs sAvas",
        bg: "bg-yellow-100"
    },
    {
        id: 3,
        img: native,
        title: "LOUNGEWEAR LOVE",
        desc: "3rd Lorem ipsum dolor sit amet consectetur.afa safdas savas svasv assas vaa  fsvs sAvas",
        bg: "bg-red-100"
    },
]