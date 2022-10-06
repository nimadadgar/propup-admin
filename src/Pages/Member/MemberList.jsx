import {useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {Modal,Button,Card,Tooltip,Input ,CustomAlert,Table} from '../../Component'
import Tippy from '@tippyjs/react/headless'; // different import path!
import {Available,Busy,FiMoreHorizontal,Tel,Mail,Remove } from '../../assets/icons'
import {useApi ,userCommand} from '../../Api'

export function MemberList() {
    const { register } = useForm();
    const [list, setList] = useState([]);
    const [loading,callApi]=useApi();

  
    const columns = [
      {
  
        id: 'Display Name',
        width:'20%',
        Header: () => <span className="pl-4">Display Name</span>,
  
        accessor: (row) => (
          <div className="flex pl-4 flex-row items-center justify-start font-bold text-1xl">
            <div className="pr-4">
              <img className="rounded-full" src={row.picture} width={40} height={40} />
            </div>
            <span>{row.displayName}</span>
          </div>
        )
  
  
      },
      {
        id: 'jobtitle',
        width:'15%',
        Header: () => <div className="m-auto">Job Title</div>,
  
        accessor: (row) => (
          <div className="text-center text-gridTextColor">{row.jobTitle}</div>),
  
      },
      {
        Header: () => <div className="m-auto">Status</div>,
        id:"status",
        width:'15%',
        accessor: (row) => {
          var img = row.status === 'Available' ? Available : Busy
          return (
            <div className='group  hover:rounded-full pl-4  hover:mr-2 hover:py-2 hover:bg-statusSelectColor flex flex-row items-center justify-start		'>
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
        id: 'Location',
        width:'15%',
        Header: () => <div className="m-auto">Location</div>,
  
        accessor: (row) => (
          <div className="text-center text-gridTextColor">{row.location}</div>),
  
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
                  <span className='pl-2 font-bold'>{row.mobilePhone}</span>
                </div>
                <div className="flex items-center justify-start pt-4 ">
                  <img src={Mail} width={16} height={16} />
                  <span className='pl-4'>Email Address:</span>
                </div>
                <span className='mt-2 font-bold'>{row.email}</span>
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
  
  
  
    const onChangeTable =async () => {
      var result=await callApi(userCommand.memberList({pageSize:100}))


  setList(result.data.list)
    }
  
    return (
      <Card>
        <div className="flex flex-row">
          <div className="text-xl font-bold flex-1">Technecians</div>
          <Input
            placeholder="Search"
            register={register}
            name="search"
            autoComplete="off"
            className="w-1/3 hidden sm:block"
          />
        </div>
        <div className=" mt-4 overflow-auto scrollbar">
          <Table loading={loading} showFilter={true}
            data={list} onChange={onChangeTable} columns={columns}
  
            pagination={true}
          />
        </div>
  
      </Card>
  
  
    )
  }

