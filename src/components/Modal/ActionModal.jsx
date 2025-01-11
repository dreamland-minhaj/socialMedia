import { useDispatch, useSelector } from "react-redux";
import { actionModalClose } from "../../APP/Feature/Instagram/instagramSlice";
 const ActionModal = ({title,children}) => {
  const {actionModal} = useSelector((state)=>state.instagram);
  const dispatch = useDispatch();

   const handleActionModal=()=>{
      dispatch(actionModalClose());
     }

  if(!actionModal){return null};

    return(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={()=>handleActionModal()}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
        <div>
            {children}
        </div>
      </div>
    </div>
    );
 }

export default ActionModal;
