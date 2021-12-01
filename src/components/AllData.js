import axios from "axios"
import React, { useEffect, useState } from "react"

function AllData() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(`https://mycontacts-api.herokuapp.com/bulkupload/api/getContacts`)
      .then((response) => {
        setData(response.data.contacts)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="space1">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>Phone Number</th>
            <th>phoneDetail</th>
            <th>isIphone</th>
          </tr>
          {data.map((data) => (
            <tr key={data._id}>
              <th>{data.phoneName}</th>
              <th>{data.age}</th>
              <th>{data.phoneNumber}</th>
              <th>{data.phoneDetail}</th>
              <th>{data.isIphone ? "yes" : "no"}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllData
