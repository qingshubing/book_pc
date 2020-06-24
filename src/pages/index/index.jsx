import React from 'react';
import { connect } from 'umi';
import styles from './index.less';
import { Button } from 'antd';

@connect(({ global, index }) => {
  return {
    global,
    index,
  };
})
export default class Index extends React.Component {
  render() {
    let { global, index } = this.props;
    console.log(global);
    console.log(index);
    return (
      <div className={styles.Index}>
        <span>Index</span>
        <Button type="primary">111</Button>
      </div>
    );
  }
}
