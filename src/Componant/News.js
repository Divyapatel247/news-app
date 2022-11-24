import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import PropTypes from 'prop-types';

 
const News=(props)=>{
        const [articles, setArticles] = useState([])
        const [loading, setLoading] = useState(true)
        const [page, setPage] = useState(1)
        const [totalResults, setTotalResults] = useState(0)
        
        const capitalizeFirstLetter = (string)=>{
          return string.charAt(0).toUpperCase()+string.slice(1);
        }
        
        
        useEffect(() => {
      document.title =`${capitalizeFirstLetter(props.category)}-NewsMonkey`
      updateNews(props);
    }, [])
    
    const updateNews=async(props)=>{
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json()
      props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
  }


  const handlePrevClick = async () => {
    updateNews(props);
    setPage(page-1);
  }

 const handleNextClick = async () => {
   updateNews(props);
   setPage(page+1);
    }

    return (
       
      <div className="container my-3">
          <h2 className='text-center' style={{margin:"35px 0px",marginTop:'90px'}}>NewsMonkey-Top HeadLines from {capitalizeFirstLetter(props.category)}</h2>
          <div className="row">
            {/* {loading && <Spinner/>} */}
               {!loading && articles.map((element) => {
                 console.log("entry is: ", element);
                 return <div className="col-md-4" key={element.url}>
                   <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                   </div>
                 })}  

          </div>
          <hr />
          <div className='container d-flex justify-content-between'>
                 <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous </button>
                 <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>   
                 </div>    
      </div>

    )
                }

News.defaultProps = {
  country :'in',
  pageSize : 8,
  category : 'general',
  
}

News.propTypes = {
 country:PropTypes.string,
 pageSize:PropTypes.number,
 category:PropTypes.string,
 
}

export default News;