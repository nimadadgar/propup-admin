import {AddMember,BriefcasehealthIcon,Logo,SettingIcon,Bell,IconMessage} from '../../assets/icons'
import {Button,Tooltip,Input,CustomInput } from '../../Component'
import { FiChevronDown,FiUser } from "react-icons/fi";
import {FactoryComboBox} from '../../Component/ComboBox/FactoryComboBox'
export function Header({instance}) {
  
    return <div className=" bg-white py-2 pr-6 shadow-lg  w-full ">
      <div className="flex  justify-center  items-center  h-full ">
        
      <div className="w-64   border 	border-0 border-b-2 border-white/[.25]  flex items-center justify-center" >
            <img src={Logo} />
          </div>

          <div className="w-48">
        <FactoryComboBox  />
          </div>
          <div className=" mx-2 flex-1	">
          <CustomInput
            name="firstName"
            label="First Name"
            autoComplete="off"
            className=" px-4" />
          </div>
        <div className="flex-1  ">
  
          <div className="flex h-full items-center justify-end m-atuo text-center ">
         
            <div className="space-x-1 flex flex-row mx-4">
              <Button variant='icon'
                leftIcon={<img src={Bell} className="w-6 h-6" ></img>} className="">
              </Button>
              <Button variant='icon'
                leftIcon={<img src={SettingIcon} className="w-6 h-6" ></img>} className="">
              </Button>
              <Button variant='icon'
                leftIcon={<img src={IconMessage} className="w-6 h-6" ></img>} className="">
              </Button>
            </div>
  
            <Tooltip
              appendTo={document.body}
              interactive={true}
              trigger="click"
              content={
                <div className="flex flex-col gap-1">
  
                  <Button  onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })} variant='hidden' contentClassName="text-red-500" className="  text-red-500 mr-4 col-span-1" small={true} >
                    Sing out
                  </Button>
  
                </div>
              }
            >
              <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 duration-100">
                <FiUser size={22} />
                <p className="font-normal"> </p>
                <FiChevronDown />
              </div>
  
            </Tooltip>
  
          </div>
        </div>
      </div>
    </div>
  }
  