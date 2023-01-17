import React, {useEffect, useState} from "react";


function ServerRequest() {

    const [link, setLink] = useState({});
    const [loading, setLoading] = useState(false)



    function onClick() {
        const convertingObj = Object.keys(link);
        if (convertingObj.length !== 0){
            setLink({})
        }


        setLoading(true);
        fetch('https://www.boredapi.com/api/activity')
            .then(data =>{
                setLoading(false)
                return data.json()
            })
            .then(data =>{
                setLink({link: data.link, activity: data.activity})
                console.log('fetch',link)
                })
    }

    return(
        <>
            <button onClick={onClick} >Запрос</button>
            <div>{link.link === '' ? link.activity: <a href={link.link} >{link.activity}</a>}</div>
            {loading === true? <div>Загрузка</div>: null}
         </>

    )
}

export default ServerRequest