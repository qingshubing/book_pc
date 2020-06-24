import React from 'react';
import { connect } from 'umi';
import styles from './index.less';

@connect(({ global }) => {
  return {
    global,
  };
})
export default class LayoutIndex extends React.Component {
  render() {
    let { global } = this.props;
    console.log(global);
    return (
      <div className={styles.LayoutIndex}>
        <div className={styles.main}>{this.props.children}</div>
      </div>
    );
  }
}
