
import styled from "@emotion/styled"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"


// style
const Left=styled.div`
    display:flex;
`
const Header = () => {
  return (
    <header>
        <div className="announcement text-center bg-teal-300 text-white font-bold">
            Super Deal! Free Shipping on Orders over $50
        </div>
        <div className="header-content max-w-[1200px]  mx-auto">
            <nav
            className=" flex width-[100%] justify-between  items-center "
            >
                <Left>
                    <span>EN</span>
                    <div className="searchcontainer border ms-2">
                        <input
                        className="outline-none  "
                         type="text" />
                        <Search
                        className="  text-gray-400 "
                        sx={{fontSize:16}}
                        />
                    </div>
                </Left>

                <div className="logo">
                    <a href="#">
                        Logo
                    </a>
                </div>

                <div className="right  flex gap-2 items-center">
                    <span>REGISTER</span>
                    <span>SIGN IN</span>
                    <div className="">
                        <Badge
                        badgeContent={4}
                        color="primary"
                        >
                            <ShoppingCartOutlined/>
                        </Badge>
                    </div>
                </div>
            </nav>
        </div>
        
    </header>
  )
}

export default Header