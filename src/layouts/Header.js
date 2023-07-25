import { Link } from 'react-router-dom'

const Header = () => {

let hello = "Im React.JS from"

 return(

    <header> 
           <Link to="/home"> Home </Link> 
           <Link to="/about"> About </Link> 
           <Link to="/contact"> Contact </Link> 


           <h1> { hello } WD74P </h1>
    </header>

   )
  

}

export default Header;