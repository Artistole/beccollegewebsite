import React from 'react'
const TableComponentRti = (props) => {
    return (
        <div className='d-flex flex-column p-2'>
            <h2 className='text-danger mt-1 mb-4'>{props.cardTitle}</h2>
            <table className="table table-striped shared-table">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Designation</th>
                        <th>Member Name</th>
                    </tr>
                </thead>
                <tbody id="naaclist-sroll">
                    {props.data.map(x => <tr>
                        <td>{x.sno}</td>
                        <td >{x.designation}</td>
                        <td style={{whiteSpace:"pre-wrap"}}>{x.memberName}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponentRti