import {useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {Modal,Button,Card,Tooltip,Input ,CustomAlert,Table} from '../../Component'
import Tippy from '@tippyjs/react/headless'; // different import path!
import {AddMember as AddMeberIcon,Available,Busy,FiMoreHorizontal,Tel,Mail,Remove } from '../../assets/icons'
import {useApi ,userCommand} from '../../Api'
import {AddMember} from './AddMember'
import {MemberListColumns} from './MemberListColumns'
export function MemberList() {
   
    const { register } = useForm();
    const [list, setList] = useState([]);
    const [loading,callApi]=useApi();
    const [showAddMemberModal,setShowAddMemberModal]=useState(false);

  
    const onChangeTable =async () => {
      var result=await callApi(userCommand.memberList({pageSize:100}))
  setList(result.data.list)
    }
    
  
    return (
      <Card>
          <AddMember onClose={()=>setShowAddMemberModal(false)} isOpen={showAddMemberModal} />
        <div className="flex flex-row">
          <div className="flex-1 flex flex-col">
          <div className="text-xl font-bold pr-5 pb-2">Technecians</div>
          <Button variant={'filledPrimary'} onClick={()=>setShowAddMemberModal(true)} className=" mr-4 max-w-xs" small={true} leftIcon={<img src={AddMeberIcon} />}>
        Add a member
        </Button></div>
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
            data={list} onChange={onChangeTable} columns={MemberListColumns}
  
            pagination={true}
          />
        </div>
  
      </Card>
  
  
    )
  }

