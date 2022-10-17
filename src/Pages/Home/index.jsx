import React, { useState, Fragment, Children } from 'react'
import { Modal, Button, Card, Tooltip, Input, CustomAlert, Table } from '../../Component'
import { FiX, FiChevronDown } from "react-icons/fi";
import { Disclosure,Tab  } from '@headlessui/react'
import { WorkOrderStatus } from '../WorkOrder/WorkOrderStatus'
import {
  ICircularAlert, Icon,
  INormalAlert,BriefcasehealthIcon,
  IWarningAlert, IArrowrightorganic, Available, Busy, FiMoreHorizontal, Tel, Mail, Remove
} from '../../assets/icons'

import { useForm } from 'react-hook-form'
import Tippy from '@tippyjs/react/headless'; // different import path!
import { WorkOrderColumns, WorkOrderData } from '../WorkOrder/WorkOrderColumns';
import { MemberListColumns } from '../Member/MemberListColumns'
import { Dialog, Transition } from '@headlessui/react'

export const Home = () => {

  const [workorderDetailModal,setWorkorderDetailModal]=useState(false);
  const StatusCard = ({ className, text, icon, iconColor }) => {
    return (
      <Card parentClass={`${className}`} className="h-full  flex flex-col">
        <div className="flex flex-row flex-1">
          <div className="flex-1 flex flex-row items-center ">
            <span className={` ${iconColor}  mr-4  rounded-full w-10 h-10 flex justify-center items-center`}>
              <Icon className="" src={icon} />
            </span>
            <div className="text-md  font-bold  ">{text}</div>

          </div>
          <span className='text-sm  m-auto'>
            <Icon src={IArrowrightorganic} />
          </span>
          <div>
          </div>
        </div>
        <div className='border border-b-1 border-gray-100 mt-4 '></div>

        <div className="flex-1">
          <div className='font-black text-3xl mt-6 '>21 Works</div>
          <div className='font-normal text-1xl mt-2 '><span className="text-green-400">16%</span> from last week</div>
        </div>
      </Card>


    )
  }

  const NotiCard = ({ className, text, icon, iconColor }) => {
    return (
      <Card parentClass={`${className}`} className="h-full flex flex-col">
        <div className="flex flex-row flex-1  ">
          <div className="flex-1 flex flex-row items-center ">
            <span className={` ${iconColor}  mr-4  rounded-full w-10 h-10 flex justify-center items-center`}>
              <Icon className="" src={icon} />
            </span>
            <div className="text-md  font-bold "><span className="font-black text-3xl">21 </span>Down equipments</div>
          </div>
          <span className='text-sm  m-auto'>
            <Icon src={IArrowrightorganic} />
          </span>

        </div>
        <div className='border border-b-1 border-gray-100 mt-4 '></div>

        <div className="flex flex-row  mt-4 flex-1">
          <div className="flex-1 flex flex-row items-center ">
            <span className={` ${iconColor}  mr-4  rounded-full w-10 h-10 flex justify-center items-center`}>
              <Icon className="" src={icon} />
            </span>
            <div className="text-md  font-bold "><span className="font-black text-3xl">21 </span>Down equipments</div>
          </div>
          <span className='text-sm  m-auto'>
            <Icon src={IArrowrightorganic} />
          </span>
        </div>


      </Card>


    )
  }

  const onClickWorkOrder=(item)=>{
    setWorkorderDetailModal(true);
  }


  return (

    <div className="h-full  flex  flex-col  scrollbar overflow-y-auto overflow-x-auto" >
      <WorkOrderDetail closeModal={setWorkorderDetailModal} show={workorderDetailModal} />
      <div className="grid grid-cols-5 gap-3">
        <StatusCard className="h-52	 col-span-5  md:col-span-2 lg:col-span-1" iconColor="bg-red-100" text="Overdue orders" icon={ICircularAlert} />
        <StatusCard className="h-52 col-span-5 md:col-span-2 lg:col-span-1" iconColor="bg-blue-100" text="Requests" icon={INormalAlert} />
        <StatusCard className="h-52 col-span-5 md:col-span-2 lg:col-span-1" iconColor="bg-green-100" text="Orders in progress" icon={IWarningAlert} />
        <NotiCard className="h-52 col-span-5 md:col-span-2 lg:col-span-2" icon={INormalAlert}></NotiCard>

      </div>
      <div className="flex-1 grid grid-cols-5 gap-3 mt-6 max-h-full scrollbar overflow-x-auto		">
        <div className='col-span-3 mt-4 '>
          <WorkOrderList onClickOrder={onClickWorkOrder} />
        </div>
        <div className='col-span-2 mt-4 		'>
          <TechnecianList />
        </div>
        <section className="h-4"></section>


      </div>



    </div>

  )

}

const WorkOrderList = ({onClickOrder}) => {
  const { register } = useForm();

  const [list, setList] = useState(WorkOrderData);
  const [loading, setLoading] = useState(false);

  const onChangeTable = () => {

  }
  
  const onClickWorkOrder=(item)=>{
    console.log("Clicked");
    onClickOrder(item);
  }
  
  return (

    <Card className="" >
      <div className="flex flex-row items-center">
        <div className="text-xl font-bold flex-1">Technecians</div>
       
      </div>
      <div className="flex flex-row items-center justify-center" >
      <Button variant={'filledSecondary'} onClick={()=>setShowAddMemberModal(true)} className=" mr-4 max-w-xs" small={true}
       leftIcon={<img className="" src={BriefcasehealthIcon} />} >
          New Work Order
            </Button>
            <Input
          register={register}
          name="search"
          label="Search"
          autoComplete="off"
          className=" w-full flex-1 px-6   hidden sm:block" />
</div>
      <div className=" mt-4   h-72 " >
        <Table loading={loading} showFilter={true} maxHeight="220px"
          data={list} onChange={onChangeTable} columns={WorkOrderColumns(onClickWorkOrder)}
          pagination={true}
        />
      </div>

    </Card>


  )



}



const TechnecianList = () => {
  const { register } = useForm();


  const columns = [
    {

      id: 'Name',
      width: '20%',
      Header: () => <span className="pl-4">Job Title</span>,

      accessor: (row) => (
        <div className="flex pl-4 flex-row items-center justify-start font-bold text-1xl">
          <div className="pr-4">
            <img className="rounded-full" src={row.picture} width={40} height={40} />
          </div>
          <span>{row.fullName}</span>
        </div>
      )


    },

    {
      Header: "Status",

      width: '15%',
      accessor: (row) => {
        var img = row.status === 'Available' ? Available : Busy
        return (
          <div className='group     flex flex-row items-center justify-end		'>
            <img src={img} width={20} height={20} />
            <span className="ml-2">{row.status}</span>

          </div>)
      }

    },


  ]

  const [list, setList] = useState(listPerson);
  const [loading, setLoading] = useState(false);

  const onChangeTable = () => {

  }


  return (
    <div >
      <Card>
       
          <div className="text-xl font-bold flex-1">Technecians</div>
        
        <div className="flex flex-row items-center justify-end">
        <Input
            register={register}
            name="search"
            label="Search"
            autoComplete="off"
            className=" w-2/3 hidden sm:block" />
            </div>
        <div className=" mt-4 h-72 ">
          <Table loading={loading} showFilter={true}
            data={list} onChange={onChangeTable} columns={columns}
            pagination={true}
          />
        </div>

      </Card>


    </div>
  )



}

const WorkOrderDetail = ({show,closeModal}) => {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => { }}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-end  text-center">
            <Transition.Child
              as={Fragment}
            
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-1/2"
              enterTo="translate-x-0"


              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"


             
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-1xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <button onClick={() =>closeModal(false)}>
                    <FiX
                      title="Close"
                      className="transform scale-100 transition duration-100 hover:opacity-80"
                    />
                  </button>

                </Dialog.Title>

                <div className="flex flex-row">

                  <div className="w-3/5		">
                    <div className="text-sm">w485952-52</div>
                    <div className="font-black text-lg">Heater doesn't work </div>
                    <DisclosureWrapper title="Details">
                      <div className=" ">
                        <div className="flex items-center justify-start">
                          <span>Status:</span>
                      <WorkOrderStatus className="px-8" status="todo" />
                      <div>Priority: <span className="font-black">Hight</span></div>

                      </div>

                      </div>
                    </DisclosureWrapper>
                    <DisclosureWrapper title="Description">
                      <p className="text-xs font-black">The heater suddenly stopped working. It seems there is something wrong with the power wire. We already restart it but it doesn’t work.</p>
                      </DisclosureWrapper>

                  </div>

                  <div className="">
                    <DisclosureWrapper title="People">
                      <div>Assigner</div>
                      <NameItem title="Mark Smit" picture="https://i.pravatar.cc/300" className="py-2" ></NameItem>

                      <div className="py-2">Partners</div>
                      <NameItem title="Mark Smit" picture="https://i.pravatar.cc/300" className="py-2" ></NameItem>
                      <NameItem title="Mark Smit" picture="https://i.pravatar.cc/300" ></NameItem>

                <div className="py-2">Reporter</div>
                      <NameItem title="Mark Smit" picture="https://i.pravatar.cc/300" className="py-2" ></NameItem>
                      <NameItem title="Mark Smit" picture="https://i.pravatar.cc/300" ></NameItem>
                    </DisclosureWrapper>
                    <DisclosureWrapper title="Dates">
                      <div className="text-xs">
                        <span>Created: </span>
                        <span className="font-black ">18/Aug/22 3:57 PM</span>
                      </div>
                      <div className="text-xs py-2">
                        <span>Updated: </span>
                        <span className="font-black ">18/Aug/22 3:57 PM</span>
                      </div>

                    </DisclosureWrapper>
                  </div>

                </div>

               
                <div className="mt-4">
                  <WorkOrderDetailTabs />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )

}

const NameItem=({title,picture,className})=>{
  return (
    <div>
                        <div className={`flex  flex-row items-center justify-start ${className}`}>
                          <div className="pr-2 ">
                            <img className="rounded-full" src={picture} width={25} height={25} />
                          </div>
                          <span>{title}</span>
                        </div>
                      </div>
  )
}

const DisclosureWrapper = ({ children, title }) => {
  return (

    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex  justify-between  py-2 
    text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500
     focus-visible:ring-opacity-75">
            <FiChevronDown
              className={`rounded-lg  bg-purple-100 ${open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-purple-500`}
            />
            <span className="mx-2 text-black font-black">{title}</span>
          </Disclosure.Button>

          <Disclosure.Panel className="px-4 pt-1 pb-2 text-sm text-gray-500">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>


  )
}

const WorkOrderDetailTabs=()=>{
  return (
    <Tab.Group>
    <Tab.List className="flex space-x-1     border-b">
      
    <Tab  className={({ selected }) =>
               `px-8  py-2.5 font-black  ${selected?'border-statusYellow':''}   border-b-2 text-sm font-medium  text-black focus:outline-none`
              }
            >
              Updated
            </Tab>

            <Tab  className={({ selected }) =>
               `px-8  py-2.5 font-black  ${selected?'border-statusYellow':''}   border-b-2 text-sm font-medium  text-black focus:outline-none`
              }
            >
              History
            </Tab>


            <Tab  className={({ selected }) =>
               `px-8  py-2.5 font-black  ${selected?'border-statusYellow':''}   border-b-2 text-sm font-medium  text-black focus:outline-none`
              }
            >
              Files
            </Tab>

    </Tab.List>
    <Tab.Panels className="pt-4">
      <Tab.Panel>Content 1</Tab.Panel>
      <Tab.Panel>Content 2</Tab.Panel>
      <Tab.Panel>Content 3</Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
  )
}

const listPerson = [
  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },
  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Busy',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },

  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },

  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },

  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },

  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },

  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },
  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },
  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },
  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },
  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },
  {
    fullName: "Mark Smit",
    jobTitle: "Electrician",
    picture: 'https://i.pravatar.cc/300',
    status: 'Available',
    currentWorkOrder: '',
    lastWorkOrder: '405 from last year'
  },


]
