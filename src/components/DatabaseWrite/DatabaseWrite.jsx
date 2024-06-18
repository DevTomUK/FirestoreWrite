import React, { useState } from 'react'
import addData from '../../api/addData'

export default function DatabaseWrite() {

    const [inputText, setInputText] = useState('')

    function handleChange(e) {
        setInputText(e.target.value)
    }

    async function handleSubmit() {
        try {
            await addData(inputText)
            console.log("Written to firestore database at: ", Date())
        }
        catch (e) {
            console.log("error: ", e)
        }
    }

  return (
    <>
    <p>Type in the text field and click the button to write to the Firebase Database.</p>
    <p>Ensure you have created a file called "config.js" in the "src" folder, and exported your firebaseConfig from it:</p>
    <hr></hr>
    <input onChange={(e)=>handleChange(e)} value={inputText} type='text'></input>
    <br></br>
        <button onClick={handleSubmit}>Database Write</button>
    </>
  )
}
