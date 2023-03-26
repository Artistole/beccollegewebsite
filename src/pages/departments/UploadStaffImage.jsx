import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { getStaffImage, uploadImage } from '../../config/services'


const UploadStaffImage = () => {
    const [file, setFile] = useState("")
    const [staffId, setStaffId] = useState("")
    const [data, setData] = useState([{
        id: "",
        staffId: "",
        file: "",
        fileName: ""
    }])

    const onFormSubmit = () => {
        var formData = new FormData();
        formData.append("file", file);
        formData.append("staffId",staffId)
        uploadImage(formData).then(res => {
            setStaffId("")
            setFile("")
            alert('Upload Sucess')
        })
            .catch(err => {
                alert('Somethingwent wrong')
                console.log(err)
            }
            )
    }

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
            console.log(res.data)
            setData(res.data)
        })
    }, [])


    return (
        <div>
            <form>
                <label htmlFor="staff-img">Upload</label>
                <input name="file" type={"file"} id="staff-img" onChange={(e) => setFile(e.target.files[0])} />
                <input placeholder='staff id' value={staffId} type="text" name="staffId" onChange={(e) => setStaffId(e.target.value)} />
                <Button variant="primary" className='text-info' onClick={onFormSubmit}>Submit</Button>
            </form>
            <div className='d-flex'>
                {data.map(x =>
                    <div key={x.id} className='d-flex flex-column'>
                        <div>{x.fileName}</div>
                        <div>{x.staffId}</div>
                        <div>
                        <img src={`data:image/png;base64,${arrayBufferToBase64(x.file.data)}`} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UploadStaffImage