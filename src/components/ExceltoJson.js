import React, { useState } from "react"
import { ReactExcel, readFile, generateObjects } from "@ramonak/react-excel"
import { Button } from "react-bootstrap"
import axios from "axios"
function ExceltoJson() {
  const [initialData, setInitialData] = useState(undefined)
  const [currentSheet, setCurrentSheet] = useState({})
  const handleUpload = (event) => {
    const file = event.target.files[0]
    readFile(file)
      .then((readedData) => {
        setInitialData(readedData)
      })
      .catch((error) => console.error(error))
  }
  let successCount = 0
  let ErrorCount = 0

  const requests = async (
    phoneName,
    age,
    phoneNumber,
    phoneDetail,
    isIphone
  ) => {
    console.log("in request")
    if (
      phoneName !== "" &&
      phoneName.length > 3 &&
      age !== "" &&
      age > 12 &&
      phoneNumber !== "" &&
      phoneDetail !== "" &&
      phoneDetail.length > 12 &&
      isIphone !== ""
    ) {
      successCount++
      axios.post(
        `https://mycontacts-api.herokuapp.com/bulkupload/api/addContact`,
        {
          phoneName: phoneName,
          age: age,
          phoneNumber: "" + phoneNumber,
          phoneDetail: phoneDetail,
          isIphone: Boolean(isIphone),
        }
      )
    } else {
      ErrorCount++
      console.log("in Else")
    }
  }

  const handleClick = () => {
    const result = generateObjects(currentSheet)

    Promise.all(
      result.map((data) =>
        requests(
          data.phoneName,
          data.age,
          data.phoneNumber,
          data.phoneDetail,
          data.isIphone
        )
      )
    )
      .then((response) => {
        console.log(
          "total request successful",
          successCount,
          "total request unsuccessful",
          ErrorCount
        )
      })
      .catch(() => {
        console.log("no")
      })
  }
  return (
    <div className="space1">
      <input
        type="file"
        accept=".xlsx"
        onChange={handleUpload}
        id="upload"
        className="input"
      />

      <div className="space1">
        {initialData && <h3>Your Excel Data is :</h3>}
        <ReactExcel
          initialData={initialData}
          onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
          activeSheetClassName=""
          reactExcelClassName="react-excel"
        />
      </div>
      <br />
      <br />
      {initialData && (
        <Button variant="primary" onClick={handleClick}>
          Insert into Data base
        </Button>
      )}
    </div>
  )
}

export default ExceltoJson
