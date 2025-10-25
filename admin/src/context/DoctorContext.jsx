import { createContext} from "react";

export const DoctorContext = createContext(null)

const DoctorContextProvider = (props) => {

  const value = {


  }

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  )

}

export default DoctorContextProvider;
