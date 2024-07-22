
import styled from "@emotion/styled"
import { Search } from "@mui/icons-material"


// style
const Left=styled.div`
    border:2px solid yellow;
`
const Header = () => {
  return (
    <header>
        <div className="announcement text-center bg-teal-300">
            Super Deal! Free Shipping on Orders over $50
        </div>
        <div className="header-content">
            <nav
            className=" "
            >
                <Left>
                    <span>EN</span>
                    <div className="searchcontainer">
                        <input type="text" />
                        
                        <Search/>
                    </div>
                </Left>
            </nav>
        </div>
        
    </header>
  )
}

export default Header