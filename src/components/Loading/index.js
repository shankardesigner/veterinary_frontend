import React, {useEffect} from 'react'

function Loading() {
    useEffect(() =>{
        let loadingHolder = document.querySelector('.loading-holder').parentElement;
        loadingHolder.classList.add('loading-active');
        
        return () => {
            loadingHolder.classList.remove('loading-active');
        }
        
    },[]);
    return (
        <div className="loading-holder">
            <i className="mdi mdi-autorenew"></i>
        </div>
    )
}

export default Loading
