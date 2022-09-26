import {AddMember,BriefcasehealthIcon,SettingIcon,Bell,IconMessage} from '../../assets/icons'
import {Button,Tooltip } from '../../Component'
import { FiChevronDown,FiUser } from "react-icons/fi";

export function Header({addMemberEvent,instance}) {
  
    return <div className="py-4 bg-white px-8   w-full ">
      <div className="flex  justify-center  items-center  h-full ">
        <Button variant={'transparent'} onClick={()=>addMemberEvent()} className=" mr-4" small={true} leftIcon={<img src={AddMember} />}>
        Add a member
        </Button>
        <Button variant={'filledPrimary'} small={true} leftIcon={<img src={BriefcasehealthIcon} />}>
          New Work Order
        </Button>
  
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
  