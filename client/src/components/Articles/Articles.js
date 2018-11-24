import React, { Component } from 'react';
import { List, ListItem } from '../List';
import { Col, Row, Container } from '../Grid';
import axios from 'axios';

//the api key
// API_KEY = process.env.REACT_ART_API_KEY;
var API_KEY = '5a7b3ff72dcb4898b5c6ee2013105946';

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.callAxios();
  }

  callAxios = () => {
    axios
      .all([
        axios.get(
          'https://newsapi.org/v2/everything?q=web%20development&totalResults=15&apiKey=' +
            API_KEY
        )
      ])
      .then(
        axios.spread(res => {
          console.log('res =', res.data.articles);
          this.setState({
            articles: res.data.articles
          });
        })
        // do something with both responses
        //   .catch(err => console.log(err));
      );
  };

  // function to save aricle on favourites

  clickedToSave = () => {
    console.log('btn clicked url =', this.article);
    //if (LoggedIn) {
    // console.log('please log in before saving');
    // }
    // API.saveFav(id)
    //   .then(res => this.loadArticles())
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-9">
            <h4 className="linebr">Articles from Web Development</h4>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem>
                    <a href={article.url}>
                      <strong>{article.title} </strong>
                    </a>
                    <span> by {article.source.name}</span>
                    <button onClick={this.clickedToSave}>save</button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
