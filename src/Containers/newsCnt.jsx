import React, { Component } from 'react';
import { connect } from 'react-redux';
import { News } from './../Components/News/news.jsx'
import { getNews } from './../Actions/actions'


//https://newsapi.org/v2/everything?q=odessa&from=2017-11-16&to=2017-11-16&sortBy=popularity&apiKey=0ba06516a35b4e57a43ee92c9a4b229c
class NewsCnt extends Component {
 
    checkNews = ()=>{
        let { name, isCorrect, isNew } = this.props.store.city;
        if (name && isCorrect && isNew) {
            this.props.fetchNews(name)
            //this.getNews(name)          
        }
 }
 
 componentWillReceiveProps() {     
        this.checkNews(); 
    }


    render() {
        let articles = this.props.store.dayNews;
        if (articles.length ===0) return null

        return (        
                <News
                   articles={this.props.store.dayNews}
                />
           

        )
    }
}
export default connect(
    state => ({
        store: state
    }),
    dispatch => ({fetchNews: (city) => dispatch(getNews(city))  
      }))(NewsCnt)
