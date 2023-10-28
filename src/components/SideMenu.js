import React, {useState, useEffect} from 'react'
import logo from '../assets/CueIcon.PNG'
import fulllogo from '../assets/CuesIcon.PNG'
import MenuItem from './MenuItem'
import userIcon from '../assets/user.jpg'
import DashboardIcon from '@mui/icons-material'


const menuItems = [
    {"name": "Dashboard", exact:true, "to":"/dashboard", iconClassName:"bi bi-speedometer2"},
    {"name": "Services Provided",
        to:false,
        iconClassName:"bi bi-tools",
        "subMenus":[{"name": "Vehicle", "to":"/services/vehicle", iconClassName:"bi bi-truck"}, 
                    {"name": "Face Recognition", "to":"/services/face", iconClassName:"bi bi-person"}]},
    {"name": "Contact Us", "to":"/contact", iconClassName:"bi bi-telephone",}
]

const SideMenu = function SideMenu({onCollapse}) {
    const [inactive, setInactive] = useState(false);
    
    useEffect(() => {
        if (inactive){
            document.querySelectorAll('.active').forEach(function(el){
                el.classList.remove('active');
            })
        }
        onCollapse(inactive);
         
    }, [inactive, onCollapse])

    return (
        <div className={`side-menu ${inactive ? "inactive": ""}`}>
            <div className="top-section">
                <div className="logo">
                    {inactive ? <img src={logo} alt="logo"/> : <img src={fulllogo} alt="logo"/>}
                    
                </div>
                <div onClick={()=>{
                        setInactive(!inactive);
                    }}  
                    className="toggle-menu-btn" >
                   {inactive?  <i className="bi bi-list"></i>: <i className="bi bi-list"></i>}
                </div>
            </div>
            <div className="search-controller">
                <div className="search-btn">
                    <i className="bi bi-search"></i>
                </div>
                <input type="search" placeholder="Search" />
            </div>
            <div className="divider"></div>
             <div className="main-menu"> 
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItem 
                                key={index}
                                name={menuItem.name} 
                                exact={menuItem.exact}
                                to={menuItem.to}
                                subMenus={menuItem.subMenus}
                                iconClassName={menuItem.iconClassName}
                                inactive={inactive}
                               
                                />
                            
                        ))
                    } 
                   
                </ul>
             </div>

        <div className="side-menu-footer">
            <div className="divider"></div>
            <div className="footer-avtaar">
                <img src={userIcon} alt="Footer-logo" />
            </div>
            <div className="side-text">
                <h5>Admin</h5>
                <p>admin@gmail.com</p>
            </div>
        </div>

        </div>
    )
}

export default SideMenu;