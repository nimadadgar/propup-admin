export const WorkOrderStatus=({status,className})=>{
    return (
        <div className={`${className}  text-center
        ${status==='todo'?' bg-statusYellow':status==='working'?'bg-statusGreen':'bg-error'}
        mx-2 rounded-3xl py-1  text-white m-auto `} >
         {status}
        </div>

    )
}