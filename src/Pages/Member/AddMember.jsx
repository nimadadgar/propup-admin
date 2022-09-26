import {useState,useEffect} from 'react'
import {Modal,Button,Tooltip,Input ,CustomAlert,ListBox, CheckedListBox} from '../../Component'
import {useForm,Controller} from 'react-hook-form'
import { ClipLoader } from "react-spinners";
import {useApi ,userCommand} from '../../Api'
import { useScroll } from 'framer-motion';
import {messageBox} from '../../Utils'
import MyListbox from '../../Component/CheckedListBox/MyListbox'
export function AddMember({isOpen,onClose}) {

    const { handleSubmit,watch,register,control,setValue ,getValues,formState: { isValid, errors }, reset } = useForm({
      defaultValues:{} });



      const [accessSelected,setAccessSelected]=useState([]);

    const [loading,callApi]=useApi();
    const [props,setProps]=useState({accessLevels:[],factories:[],jobs:[]})
    useEffect(()=>{
      initial();
    },[isOpen])

  async function initial()
  {
  var result= await callApi(userCommand.initialInvite());
  console.log(result);
  setProps({factories:result.data.factories,accessLevels:result.data.accessLevels,jobs:result.data.jobs})
  }

  const onSubmitHandler =async  (data) =>
   {
    data.accessLevels=accessSelected.map(d=>d.accessLevelName);

   var result= await callApi(userCommand.invite(data));
   if (!result.success)
   {
    messageBox("error",result.message);
  return; 
  }
  else
  {
    messageBox("success","invite user successfull");
  reset();

  }

   }

   const onChangeCheckAccessLevel=(data)=>{
    setAccessSelected(data);

   }


    return (
      <Modal
        autoWidth
        title="Add a technecian"
        isOpen={isOpen}
        onClose={onClose}
      >
                <form onSubmit={handleSubmit(onSubmitHandler)} className="overflow-hidden">

        <div className="grid   grid-col-10 gap-4 mx-2 space-y-2 pt-4 	 ">

       
          <Input
            options={{
              required: true,
            }} 
            msg="FirstName is required"
            hasError={errors.firstName}
            register={register}
            name="firstName"
            label="First Name"
            autoComplete="off"
            className=" col-span-2" />

          <Input
            label="Surname"
            options={{
              required: true,
            }} 
            msg="Surname is required"
            hasError={errors.surName}
            register={register}
            name="surName"
            autoComplete="off"
            className="  col-span-2"
          />
         
          <Input
            label="Email Address"
            options={{
              required: true,
            }} 
            msg="Email address is required"
            hasError={errors.emailAddress}
            register={register}
            name="email"
            autoComplete="off"
            className="  col-span-2"
          />
  
          <Input
            label="Mobile Number"
            register={register}
            name="mobileNumber"
            autoComplete="off"
            className="  col-span-2"
          />

<Controller
          name="JobTitle"
          control={control}
       
           render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (

            <ListBox label='Technician' selected={value} onChange={onChange} dataId={'jobTitle'} dataLabel={'jobTitle'} items={props.jobs}
             className="sm:block  col-span-2 z-[100]" />
          )}
        />


<Controller
          name="factoryName"
          control={control}
       
           render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (

            <ListBox   label='Location' selected={value} onChange={onChange} dataId={'factoryName'} dataLabel={'factoryName'} items={props.factories} 
            className=" sm:block col-span-2 z-[55] " />
          
          )}
        />

        <CheckedListBox label="AccessLevel" 
        onChange={onChangeCheckAccessLevel}
        checked={accessSelected}
        className=" sm:block col-span-2 z-[50] "
        items={props.accessLevels} dataLabel={"accessLevelName"} dataId={"accessLevelName"}/>

  
          
            <CustomAlert type="info" className="col-span-2">
              <span>By clicking on ‘Add’ a password will be gerated <br/>automatically, so the user can change it later. </span>
            </CustomAlert>
            <div className=' col-span-1 w-48'></div>
            <div className=' col-span-1 w-48'></div>
            <div className=' col-span-1 w-48'></div>
       
        
          <Button loading={loading} onClick={handleSubmit(onSubmitHandler)}  className=" mr-4 col-span-1" small={true} >
            Add
          </Button>
  
  
        </div>
        </form>
  
  
      </Modal>
    )
  
  }
  