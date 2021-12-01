import axios from "axios"
import React, { useState } from "react"
import { Row, Form, Container, Button } from "react-bootstrap"

import "./Form.css"

function Formxy() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [age, setAge] = useState("")
  const [phoneName, setPhoneName] = useState("")
  const [phoneDetail, setPhoneDetail] = useState("")
  const [type, setType] = useState("false")

  const [submitButton, setSubmitButton] = useState(false)

  const [phoneNumberError, setPhoneNumberError] = useState("")
  const [ageError, setAgeError] = useState("")
  const [phoneNameError, setPhoneNameError] = useState("")
  const [phoneDetailError, setPhoneDetailError] = useState("")

  const submitHandler = async () => {
    setSubmitButton(true)
    setPhoneNumberError("")
    setAgeError("")
    setPhoneNameError("")
    setPhoneDetailError("")
    axios
      .post(`https://mycontacts-api.herokuapp.com/bulkupload/api/addContact`, {
        phoneName,
        age,
        phoneNumber,
        phoneDetail,
        isIphone: "true",
      })
      .then((response) => {
        console.log("repsonse", response)
      })
      .catch((error) => {
        setSubmitButton(false)
        console.log(error.response)
        if (error.response.data.message.match("phoneName")) {
          setPhoneNameError(error.response.data.message)
        }
        if (error.response.data.message.match("age")) {
          setAgeError(error.response.data.message)
        }
        if (error.response.data.message.match("phoneNumber")) {
          setPhoneNumberError(error.response.data.message)
        }
        if (error.response.data.message.match("phoneDetail")) {
          setPhoneDetailError(error.response.data.message)
        }
      })
  }
  return (
    <div className="space">
      <Container>
        <h3 style={{ textAlign: "center" }}>Add to Data</h3>
        <Row className="justify-content-md-center">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>phoneName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setPhoneName(e.target.value)}
                value={phoneName}
              />
              {phoneNameError && (
                <span className="error">{phoneNameError}</span>
              )}
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
              {ageError && <span className="error">{ageError}</span>}
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />

              {phoneNumberError && (
                <span className="error">{phoneNumberError}</span>
              )}
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>PhoneDetail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Detail"
                onChange={(e) => setPhoneDetail(e.target.value)}
                value={phoneDetail}
              />

              {phoneDetailError && (
                <span className="error">{phoneDetailError}</span>
              )}
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Check
                inline
                label="ISIPHONE"
                name="checkBox"
                type="checkBox"
                value={type}
                onChange={() => setType(!type)}
              />
            </Form.Group>
          </Form>
          <Button
            variant="primary"
            type="submit"
            onClick={submitHandler}
            disabled={submitButton}
          >
            Submit
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Formxy
