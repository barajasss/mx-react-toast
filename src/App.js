import logo from "./logo.svg"
import "./App.css"
import ReactToast from "./ReactToast"
import { useRef } from "react"

function App() {
    const toastRef = useRef()
    // const toastRef2 = useRef()

    function handleClick() {
        toastRef.current.showToast("Logged in succesfully")
        // toastRef2.current.showToast("Logged in succesfully")
    }
    return (
        <div className="App" style={{ padding: 30 }}>
            <ReactToast ref={toastRef} timeout={2000} />
            {/* <ReactToast ref={toastRef2} timeout={1500} /> */}
            <div style={{ height: 100 }} />
            <button onClick={handleClick}>Show Toast</button>
        </div>
    )
}

export default App
