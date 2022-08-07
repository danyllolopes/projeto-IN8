import React from 'react'

const useFetch = () => {

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

 
  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);     
      response = await fetch(url, options);   
      json = await response.json();           
        if (response.ok === false) {
          setError(json.error)         
          throw new Error(json.error);
        } else {
          setData(json)
        
        }   
      } catch (err) {          
        json = null;      
       
        setData(json);  
       }
      return { response, json };
    
  }, []);
  return {
    data,
    error, 
    request,
 
  };
}

export default useFetch