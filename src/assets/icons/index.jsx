import  Home from './home.svg'
import WorkOrder from './workorder.svg'
import Tech from './tech.svg'
import Mach from './Mach.svg'
import ArrowRight from './arrowright.svg';
import ArrowLeft from './arrowleft.svg';
import Logo from './logo.svg'
import BriefcasehealthIcon from './briefcasehealth.svg'
import UserLogo from './userlogo.svg'
import AddMember from './addmember.svg';
import Bell from './BellRinging.svg'
import IconMessage  from './icon-message.svg'
import SettingIcon from './Cog.svg'
import Tel from './Tel.svg'
import Mail from './Mail.svg'
import Remove from './Remove.svg'
import ICircularAlert from './circularalert.svg'
import INormalAlert from './normalalert.svg'
import IWarningAlert from './warningalert.svg'

 import IArrowrightorganic from './arrowrightorganic.svg'



import Available from './available.svg'
import Busy from './Busy.svg'

import { FiChevronDown, FiMoreHorizontal, FiLock, FiSearch, FiUser, FiArrowLeft } from "react-icons/fi";




import Inventory from './inventory.svg'
import Report from './report.svg'


import Order from "./track-order.svg"
import Teachs from "./Seats.svg";


export const  Icon=({src,className})=>{
    return <img src={src} className={className} />
}

export {
    Home,WorkOrder,Tech,Mach,ArrowRight,ArrowLeft,Logo,BriefcasehealthIcon,
    UserLogo,AddMember,Bell,IconMessage,SettingIcon,Tel,Mail,Remove,
    Order,Teachs,Inventory,Report,Available,Busy,FiMoreHorizontal,ICircularAlert
    ,INormalAlert,IWarningAlert,IArrowrightorganic
}

export default Icon;