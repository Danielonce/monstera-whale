import {useEffect, useState} from 'react'

const useFetch = (url, initialValue) => {
    
    const [state, setState] = useState(initialValue)

    useEffect(() => {
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    data
                })
            })
        
    }, [url])

    return state;
}

export default useFetch
