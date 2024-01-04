import { useState, useEffect } from "react";


// custom hook : DeBounce
function useDebounce(value, delay) {
    const [debounceValue, setDebounce] = useState(value)

    useEffect(()=> {
        const timerId = setTimeout(()=> {
            setDebounce(value)
        },delay)

        return ()=> clearTimeout(timerId)
    })

    return debounceValue;
}



export default useDebounce;