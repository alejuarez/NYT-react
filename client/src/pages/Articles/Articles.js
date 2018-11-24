import React from 'react';
import Articles from '../../components/Articles';

//import API from "../utils/API";
//import Footer from './src/components/Footer';

const ArticlePage = props => {
  return (
    <div>
      <Articles username={props.username} />
    </div>
  );
};

export default ArticlePage;
