import React from 'react';
import './news.css';
//import './../../fonts/font-awesome.css';

export const News = (props) => {
  let {articles} = props;

    return <div>
             <h3> 
                 News
             </h3>
             <div>
              { articles.filter(a=>a.urlToImage).slice(0, 4).map((a,i)=>(
                 <div 
                 key = {i}
                 className='article'
                 >
                 <div className = 'article'>
                 </div>
                 {a.title}
                 <img src= { a.urlToImage }/>
                   
                 <a href={a.url}>{a.source.name}</a>
                  </div>)              
                    )}
              </div>

                </div>
}
