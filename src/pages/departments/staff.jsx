import React, { useState, useEffect } from "react";
import { getDepartmentsData } from "/src/config/services.js";
import Staff from "/src/components/staff/staff.jsx";
import { getStaffImage } from "../../config/services";

let staff = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    getDepartmentsData()
      .then((res) => setData(res.data))
      .catch((err) => console.log("something went wrong", err));
  };

  useEffect(() => {
    getData();
  }, []);
  const StaffD = data.map((dataArg) => {
    return <Staff item={dataArg} />;
  });
  const [imagedata, setimageData] = useState([{
    id: "",
    staffId: "",
    file: "",
    fileName: ""
}])


const arrayBufferToBase64 = buffer => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
};


useEffect(() => {
    getStaffImage().then((res) => {
        setimageData(res.data)
    })
}, [])

const getImgsrc = (id) => {
  if(!!imagedata.length){
  let imgS = imagedata.filter(y => y.staffId == id).map(z => z.file)
  return `data:image/png;base64,${arrayBufferToBase64(imgS[0]?.data)}`}
}
  return (
    <>
      {data.map((c) => (
        <>
          <div className="mt-10 flex  justify-evenly flex-wrap ">
            {c.staffdata.map((x) => (
              <div className="staff-wrapper flex">
                <div className="staff-pic ml-2">
				        <img className="h-36" src={getImgsrc(x.staffid)} alt="staff picture"></img>
			          </div>
                <div className="staff-text flex flex-col ml-2 justify-around">
                  <div className="staff-name font-bold">{x.name}</div>
                  <div className="staff-designation">{x.designation}</div>
                  <div className="staff-breaker flex flex-row items-center">
                    <div className="staff-line h-1 w-11/12 md:w-52 bg-primaryColor"></div>
                    <div className="staff-circle h-3 -ml-1 w-3 bg-primaryColor rounded-full"></div>
                  </div>
                  <div className="Department">{x.department}</div>
                  <div className="Date of Joining">{x.doj}</div>
                  <div className="Qualifification">{x.qul}</div>
                  <div className="Email">{x.email}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
};
export default staff;
