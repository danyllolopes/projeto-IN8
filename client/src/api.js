export const API_URL = "http://localhost:3001"

export function POST_USER(body){
    return {
      url: API_URL + "/api/user",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      }
    }
}


export function GET_USER(){
  return {
    url: API_URL + "/api/users",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },   
    }
  }
}