'use client'

import {useEffect} from 'react'

export default function Error({
    error,
    reset
                              }:{
    error: Error
    reset: () => void
}){
    useEffect(() => {
        return () => {
            console.error(error)
        };
    }, [error]);

    return (
        <>
            <div className="">
                <h2>Something went wrong!</h2>
                <button onClick={
                    // Attempt to recover by trying to re-render the segment
                    ()=> reset()
                }>Try Again</button>
            </div>
        </>
    )

}
