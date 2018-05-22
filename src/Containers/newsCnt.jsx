import React, { Component } from "react";
import { connect } from "react-redux";
import { News } from "./../Components/News/news.jsx";
import { getNews } from "./../Actions/actions";

//https://newsapi.org/v2/everything?q=odessa&from=2017-11-16&to=2017-11-16&sortBy=popularity&apiKey=0ba06516a35b4e57a43ee92c9a4b229c
class NewsCnt extends Component {
  checkNews = () => {
    let { name, isCorrect, isNew } = this.props.store.city;
    if (name && isCorrect && isNew) {
      this.props.fetchNews(name);
      //this.getNews(name)
    }
  };

  componentWillReceiveProps(nextProps) {
    let newCity = nextProps.store.city.name;
    let oldCity = this.props.store.city.name;
    oldCity !== newCity ? this.props.getNews(newCity) : null;
  }

  marker = 0;
  forDel = () => {
    this.marker++;
    this.forDelTest();
  };

  forDelTest() {
    class Foo {
      constructor(props) {
        this.name = props.name;
        Foo.counter++;
      }
      static counter = 0 
      sayName() {
        return this.name;
      }
      sayNameOwn = () => {
        return this.name;
      };
      static sayNameStatic = () => {
        return 'this.name';
      };
    }

    let foo = new Foo({ name: "HUY" });
    let foo1 = new Foo({name : 'PIZDA'})
    console.dir(foo);
    console.log(Foo.counter);
  }

  render() {
    if (this.marker === 0) this.forDel();
    let articles = this.props.store.dayNews;
    return articles.length === 0 ? null : <News articles={articles} />;
  }
}
export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    getNews: city => dispatch(getNews(city))
  })
)(NewsCnt);
