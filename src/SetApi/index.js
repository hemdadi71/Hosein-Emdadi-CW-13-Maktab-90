export async function SetData(url, endpoint, item) {
  try {
    let response = await fetch(`http://localhost:3000/nobat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    response = await response.json()
    return response
  } catch (error) {
    console.log(error)
  }
}
