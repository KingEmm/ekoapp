import React, {useState, useEffect} from 'react'

function Count() {
    const [count, setCount] = useState(0)
    const [info , setInfo] = useState({name:'', email:''})
    const [articles, setArticle] = useState(['Emma','Abel','Favour','Angel'])
    const addArticle = () =>{
        setArticle([...articles, 'New Article'])
    }
    // useEffect(() =>{
    //     console.log('Use effect called')
    // }, [count])

    useEffect(() => {
        console.log('Use effect called')
        document.title = `You have clicked ${count} times`
    })
    

  return (
    <div>
        <h4>
            how far {count}
        </h4>
        <button className='btn btn-success' onClick={() => setCount(count+1)}>Click</button>
        <br />
        <button className='btn btn-secondary' onClick={() => setCount(0)}>Reset</button>
        <br />
        <input type="text" value={info.name} className='form-control' onChange={e => setInfo({...info, name:e.target.value})} />
        <hr />
        <input type="email" value={info.email} className='form-control' onChange={e => setInfo({...info, email:e.target.value})} />
        <br />

        <h5> My name is : {info.name}</h5>
        <h5> This is my email: {info.email}</h5>
        <hr />
        {articles.map(articles => {
            return <h2 key={articles}>{articles}</h2>
        })}
        <button onClick={addArticle} className='btn btn-danger' >Add Article</button>

        <button onClick={() => setCount(count + 2)} className='btn btn-danger'>Change title</button>
    </div>
  )
}

export default Count