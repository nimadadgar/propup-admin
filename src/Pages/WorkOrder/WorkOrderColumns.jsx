import Tippy from '@tippyjs/react/headless'; // different import path!
import {Modal,Button,Card,Tooltip,Input ,CustomAlert,Table} from '../../Component'
import {ICircularAlert,Icon,
  INormalAlert,
  IWarningAlert,IArrowrightorganic,Available,Busy,FiMoreHorizontal,Tel,Mail,Remove} from '../../assets/icons'
 export function WorkOrderColumns(onClickWorkOrder) {

  return [
    {

      id: 'workorderNumber',
      width:'25%',
      Header: () => <span className="pl-4">Order Number</span>,
      accessor: (row) => (
        <div className="flex  flex-row items-center justify-start  text-xs" >
          <div className={` bg-red-100  mr-2  rounded-full w-10 h-10 flex justify-center items-center`}>
                    <Icon className="" src={ICircularAlert}  />
                    </div>
                    <div className="text-left">
          <div className="text-sm text-blue-700 font-black cursor-pointer" onClick={()=>onClickWorkOrder(row)}>{row.workorderNumber}</div>
          <div className="font-bold">{row.workorderTitle}</div>
          </div>
        </div>
      )


    },
    {
      id: 'owner',
      width:'20%',
      Header: () => <div className="m-auto">Owner</div>,
      accessor: (row) => (
        <div className=" text-sm ">
          {
            row.owner===''?<div className='text-blue-700 font-bold text-center'>Vacent</div>:(
              <div className="flex  flex-row items-center justify-start  ">
              <div className="pr-2 ">
              <img className="rounded-full" src={row.picture} width={40} height={40} />
            </div>
            <span>{row.owner}</span>
            </div>
              
            )
          }
      
      </div>
        
        ),

    },
    

    {
      id: 'area',
      width:'15%',
      Header: () => <div className="m-auto">Area</div>,
      accessor: (row) => (
        <div className="text-center text-gridTextColor">{row.area}</div>),

    },
    {
      id: 'status',
      width:'15%',
      Header: () => <div className="m-auto">Status</div>,
      accessor: (row) => (
        <div className={`
        ${row.status==='todo'?' bg-statusYellow':row.status==='working'?'bg-statusGreen':'bg-error'}
        mx-2 rounded-3xl py-1  text-white m-auto `} >
          <div>{row.status}</div>
        </div>
        
        ),

    },
  
    
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

}

  

  export const WorkOrderData = [
    {
      workorderNumber: "w482952-2349",
      workorderTitle: "Heater doesn't work",
      area:'Buidling A-L1 Section 1A',
      owner:'',
      picture: 'https://i.pravatar.cc/300',
      status: 'todo',
      currentWorkOrder: '',
      lastWorkOrder: '405 from last year'
    },
    {
      workorderNumber: "w482952-2349",
      workorderTitle: "Heater doesn't work",
      area:'Buidling A-L1 Section 1A',

      owner:'Mark Smit',
      picture: 'https://i.pravatar.cc/300',
      area:'Buidling A-L1 Section 1A',

      status: 'stuck',
      currentWorkOrder: '',
      lastWorkOrder: '405 from last year'
    },
  
    {
      workorderNumber: "w482952-2349",
      workorderTitle: "Heater doesn't work",
      picture: 'https://i.pravatar.cc/300',
      area:'Buidling A-L1 Section 1A',

      owner:'Mark Smit',
      status: 'working',
      currentWorkOrder: '',
      lastWorkOrder: '405 from last year'
    },
  
    {
      workorderNumber: "w482952-2349",
      area:'Buidling A-L1 Section 1A',
      status:'working',
      workorderTitle: "Heater doesn't work",
      picture: 'https://i.pravatar.cc/300',
      status: 'Available',
      owner:'Mark Smit',

      currentWorkOrder: '',
      lastWorkOrder: '405 from last year'
    },
  
    {
      workorderNumber: "w482952-2349",
      area:'Buidling A-L1 Section 1A',
      status:'stuck',
      workorderTitle: "Heater doesn't work",
      picture: 'https://i.pravatar.cc/300',
      status: 'Available',
      owner:'Mark Smit',

      currentWorkOrder: '',
      lastWorkOrder: '405 from last year'
    },
  
   
 
  
  ]
  