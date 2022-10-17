import {useState} from 'react' 
import {Home, Logo,ArrowLeft,ArrowRight,Icon,UserLogo,WorkOrder,Tech,Mach,Report,Inventory,FiMoreHorizontal} from '../../assets/icons'
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
    {
      text: 'Home',
      icon: <Icon src={Home}  className="w-8 h-8" />,
      path:'/'

    },
    {
      text: 'Work Order',
      icon: <img className="w-8 h-8" src={WorkOrder} />,
      path:'/workorders'
    },
    {
      text: 'Members',
      icon: <img className="w-8 h-8" src={Tech} />,
      path:'/memberlist'
    },
    {
      text: 'Equipments',
      icon: <img className="w-8 h-8" src={Mach} />,
      path:'/equipments'
    },
    {
      text: 'Reports',
      icon: <img className="w-8 h-8" src={Report} />,
      path:'/reports'

    },
    {
      text: 'Inventory',
      icon: <img className="w-8 h-8" src={Inventory} />,
      path:'/inventory'

    },
  ]
  



export const  Sidebar=()=> {
    const [isOpen, setIsOpen] = useState(true);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
   
  <nav style={{direction:'rtl'}} className={`${!isOpen ? 'w-32' : 'w-64 '}
  fixed      relative  h-screen  
 ease-in-out duration-500 bg-sidebar   rounded-tr-4xl rounded-br-4xl max-h-full	`}>
  <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer h-6 w-6 	 absolute mt-10 -mr-3 	z-[100]	 	">
          {isOpen ? (<img src={ArrowRight} />) : (<img src={ArrowLeft} />)}
        </div>

<div className="overflow-auto scrollbar h-screen">
    
        <div style={{direction:'ltr'}} className=" px-5 mt-5">
        <div  className={ `${isOpen?"text-lg ":"text-sm "}  text flex flex-row justify-center items-center`}>
        <div className="flex-1 text-textSidebar truncate">WORKSPACE</div>
        <div className="mr-auto flex"><FiMoreHorizontal color="white" /></div>
        </div>

       
        </div>

        <ul style={{direction:'ltr'}} className=" text-white space-y-4 mt-5 overflow-hidden   ">
          {sidebarItems.map((item, index) =>
          (isOpen ?
            <OpenSidebarItem key={index} onNavClick={()=>navigate(item.path)} selected={pathname === item.path} icon={item.icon} text={item.text} />
            : <CloseSidebarItem key={index} selected={pathname === item.path} icon={item.icon} text={item.text} />
          )
  
          )}
        </ul>

        </div>
  
  
  
  
      </nav >)
  }


  

  

const OpenSidebarItem = ({ selected, text, icon,onNavClick }) => {
    return (
      <li  className={`relative active:text-gray-400  cursor-pointer  flex  flex-row  m-auto px-5 py-3  justify-start items-center
      ${selected ? 'bg-selected' : ''}  `} onClick={onNavClick}>
        {icon}
        <span className="pl-4" >{text}</span>
      </li>
    )
  }
  
  const CloseSidebarItem = ({ selected, text, icon }) => {
    return (
      <li className={`text-xs pl-1 pr-1	  m-auto   py-1  items-centers}  `} >
        <div className={`${selected ? 'bg-selected' : ''}  text-center py-1  flex flex-col  overflow-hidden rounded-lg`}>
          <div className=" flex m-auto">
            {icon}
          </div>
          <span className="truncate" >{text}</span>
        </div>
      </li>
    )
  }