import './Navbar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HandymanIcon from '@mui/icons-material/Handyman';

function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/"><HomeIcon></HomeIcon></Link>
            <Link to="/tool"><HandymanIcon></HandymanIcon></Link>
            <Link to="/detail"><PermIdentityIcon></PermIdentityIcon></Link>
            <Link to="/contact"><PhoneIcon color='red'></PhoneIcon></Link>
        </div>
    )
}

export default Navbar;

// Note: The above code is a simple navigation bar component using React Router for navigation.
// It includes icons for home, tools, details, and contact sections. Adjust the paths as necessary
// based on your application's routing structure.