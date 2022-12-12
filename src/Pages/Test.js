import React from 'react'
import axios from 'axios'

const Test = () => {
    const URL='https://jsonplaceholder.typicode.com/posts'
    axios.get(URL).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

  return (
    <div>Test</div>
  )
}

export default Test