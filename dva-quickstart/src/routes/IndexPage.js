import React from 'react';
import {useEffect} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';


const IndexPage = props => {
  const {example, loading, dispatch} = props

  const change_number = () => {
    dispatch({
        type:'example/change',payload:{}
    })
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>yingshaoxo! {example.number}</h1>
      <h1 onClick={change_number}>fake button</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({loading,example})=>({
    example:example
}))(IndexPage)
