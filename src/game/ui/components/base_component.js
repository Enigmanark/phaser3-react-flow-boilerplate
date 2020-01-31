import React from 'react';

export default class BaseComponent extends React.Component {
    constructor(props) {
      super(props);
      this.sm = props.sm;
    }
}