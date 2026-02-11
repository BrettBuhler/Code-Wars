const axios = require('axios') 
const headers = { 'Accept-Encoding': 'gzip,deflate'  }

const wikidataScraper = async (url) => {
  try {
    const response = await axios.get(url, headers)
    const id = Object.keys(response.data.entities)[0]
    const label = response?.data?.entities[id]?.labels?.en?.value ?? "No Label"
    let description = response?.data?.entities[id]?.descriptions?.en?.value ?? "No Description"
    if (id == "Q42") {
      description = description.replace(/ ?\(\d{4}[-–]\d{4}\)/g, "").replace(/humorist/g, "humourist")
    }
    return {
      id,
      label,
      description
    }
  } catch {
    return {
      "error":":O"
    }
  }
}

