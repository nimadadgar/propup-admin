import React,{useState} from 'react'
import {Modal,Button,Card,Tooltip,Input ,CustomAlert,Table} from '../../Component'

import {ICircularAlert,Icon,
    INormalAlert,
    IWarningAlert,IArrowrightorganic,Available,Busy,FiMoreHorizontal,Tel,Mail,Remove} from '../../assets/icons'

    import {useForm} from 'react-hook-form'
    import Tippy from '@tippyjs/react/headless'; // different import path!


export const Home=()=>{
    
    const StatusCard=({text,icon,iconColor})=>{
        return (
            <Card className=" ">
                <div className="flex flex-row ">
                <div className="flex-1 flex flex-row items-center ">
                <span className={` ${iconColor}  mr-4  rounded-full w-10 h-10 flex justify-center items-center`}>
                    <Icon className="" src={icon}  />
                    </span>
                <div className="text-xl  font-bold  ">{text}</div>
                </div>
                <Icon src={IArrowrightorganic} />
                </div>
                <div className='border border-b-1 border-gray-100 mt-4 '></div>
                <div className='font-black text-3xl mt-6 '>21 Works</div>
                <div className='font-normal text-1xl mt-2 '><span className="text-green-400">16%</span> from last week</div>

            </Card>


        )
    }

    return (
       
        <div className="h-full  flex  flex-col" >
            <div className="grid grid-cols-3 gap-3">
                <StatusCard iconColor="bg-red-100" text="Technecians" icon={ICircularAlert}/>
                <StatusCard  iconColor="bg-blue-100" text="Normal" icon={INormalAlert}/>
                <StatusCard  iconColor="bg-green-100" text="Fixed Jobs" icon={IWarningAlert}/>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-3 mt-4 max-h-full scrollbar overflow-scroll		">
            <div className='col-span-2 mt-4 		'>
            <WorkOrderList />
            </div>
            <div className='col-span-1 mt-4 		'>
            <TechnecianList />
            </div>
           
      
            </div>
            
           
            
                </div>

    )

}

const WorkOrderList=()=>{
    const { register } = useForm();

    
    const columns = [
        {
    
          id: 'Name',
          width:'20%',
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
          id: 'jobtitle',
          width:'15%',
          Header: () => <div className="">Job Title</div>,
    
          accessor: (row) => (
            <div className="text-left text-gridTextColor">{row.jobTitle}</div>),
    
        },
        {
          Header: "Status",
          
          width:'15%',
          accessor: (row) => {
            var img = row.status === 'Available' ? Available : Busy
            return (
              <div className='group   hover:rounded-full hover:pl-2 hover:mr-2 hover:py-2 hover:bg-statusSelectColor flex flex-row items-center justify-start		'>
                <img src={img} width={20} height={20} />
                <span className="ml-2">{row.status}</span>
                <div className="group-hover:block hidden  pl-4 font-bold cursor-pointer">
    
    
                  <Tippy
                    placement="bottom"
    
                    delay={50}
                    interactive={true} interactiveBorder={20}
                    theme="light"
                    trigger="click"
    
                    render={attrs => (
                      <Card>
                        <div className="flex items-center mb-4">
                          <input  id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="disabled-radio-1" className="ml-2 text-sm font-medium text-black dark:text-gray-500">Busy</label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input  id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="disabled-radio-1" className="ml-2 text-sm font-medium text-black dark:text-gray-500">On leave</label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input  id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="disabled-radio-1" className="ml-2 text-sm font-medium text-black dark:text-gray-500">Out sick</label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input  id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="disabled-radio-1" className="ml-2 text-sm font-medium text-black dark:text-gray-500">Working outside</label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input  id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="disabled-radio-1" className="ml-2 text-sm font-medium text-black dark:text-gray-500">Do not disturb</label>
                        </div>
                      </Card>
                    )}
                  >
    
                    <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 duration-100">
                      <p className="font-normal"> </p>
                      <FiMoreHorizontal />
                    </div>
                  </Tippy>
                </div>
              </div>)
          }
    
        },
        {
          Header: "Order in progress",
          width: '15%',
          accessor: (row) => (
            <div className='text-gridBlueColor text-left font-bold'>{row.currentWorkOrder === '' ? 'Assign work order' : row.currentWorkOrder}</div>
    
          )
        }
        ,
        {
          id: "workOrder",
     
          width: '25%',
    
          Header: () => <span className="m-auto">Completed work orders</span>,
    
          accessor: (row) => (
            <div className='text-gridTextColor'>{row.lastWorkOrder}</div>
    
          )
        }
    
        ,
        {
          id: "functions",
          Header: "",
          width: '5%',
          accessor: (row) => (
    
    
    
            <Tippy
              placement="bottom"
    
              delay={50}
              interactive={true} interactiveBorder={20}
              theme="light"
              trigger="click"
    
              render={attrs => (
                <Card>
                  <div className="flex ">
                    <img src={Tel} width={16} height={16} />
                    <span className='pl-4'>Mobile number:</span>
                    <span className='pl-2 font-bold'>0401 234 567</span>
                  </div>
                  <div className="flex items-center justify-start pt-4 ">
                    <img src={Mail} width={16} height={16} />
                    <span className='pl-4'>Email Address:</span>
                  </div>
                  <span className='mt-2 font-bold'>javad.zobeidi@gmail.com</span>
                  <div className="mt-4 border  border-gray-100"></div>
    
    
                  <div className="mt-4 flex items-center justify-start cursor-pointer	 ">
                    <img src={Remove} width={16} height={16} />
                    <span className='text-red-500 font-normal pl-4'>Remove this member</span>
    
                  </div>
    
                </Card>
              )}
            >
    
              <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 duration-100">
                <p className="font-normal"> </p>
                <FiMoreHorizontal />
              </div>
    
    
            </Tippy>
    
    
    
    
    
    
    
          )
        }
    
    
    
      ]

      const [list, setList] = useState(listPerson);
      const [loading, setLoading] = useState(false);
    
      const onChangeTable = () => {
    
      }
    

    return (
        
<Card className="" >
        <div className="flex flex-row items-center">
          <div className="text-xl font-bold flex-1">Technecians</div>
          <Input
            register={register}
            name="search"
            label="Search"
            autoComplete="off"
            className=" w-1/3 hidden sm:block" />
        
        
         
        </div>

   <div className=" mt-4    ">
   <Table loading={loading} showFilter={true}
          data={list} onChange={onChangeTable} columns={columns}
          pagination={true}
        />
    
    

      </div>
  
      </Card>


    )



}



const TechnecianList=()=>{
  const { register } = useForm();

  
  const columns = [
      {
  
        id: 'Name',
        width:'20%',
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
        
        width:'15%',
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
      <div className="flex flex-row items-center">
        <div className="text-xl font-bold flex-1">Technecians</div>
        <Input
            register={register}
            name="search"
            label="Search"
            autoComplete="off"
            className=" w-2/3 hidden sm:block" />
      </div>
      <div className=" mt-4 overflow-auto  relative">
      <Table loading={loading} showFilter={true}
          data={list} onChange={onChangeTable} columns={columns}
          pagination={true}
        />
      </div>

    </Card>


      </div>
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
  