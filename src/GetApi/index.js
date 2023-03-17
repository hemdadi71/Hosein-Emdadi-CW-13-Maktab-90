export async function GetData(url, endpoint, id) {
  try {
    let response = ''
    if (id) {
      response = await fetch(`${url}/${endpoint}/${id}`)
    } else {
      response = await fetch(`${url}/${endpoint}`)
    }
    response = await response.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
