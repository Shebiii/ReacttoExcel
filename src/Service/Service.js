import axios from "axios"
const BASE_URL = `https://mycontacts-api.herokuapp.com/bulkupload/api/addContact`

export const singleAdd = async (
  phoneName,
  age,
  phoneNumber,
  phoneDetail,
  isIphone
) => {
  try {
    return await axios.post(`${BASE_URL}`, {
      phoneName,
      age,
      phoneNumber,
      phoneDetail,
      isIphone,
    })
  } catch (error) {
    return error
  }
}
