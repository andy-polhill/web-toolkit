'use strict';
var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      addend1: 0,
      addend2: 0
    }
  },
  onChange: function(e) {
    this.setState({[e.target.name] : parseInt(e.target.value, 10)});
  },
  calculate: function(val1, val2) {
    var sum;
    switch (this.props.modifier) {
      case '+':
        sum = val1 + val2;
        break;
      case '-':
        sum = val1 - val2;
        break;
    }
    return sum;
  },
  render: function () {
    return (<div className="panel panel-default js-calculator" data-modifier="{this.props.modifier}">
      <div className="panel-heading">
        <h3 className="panel-title">{this.props.title}</h3>
      </div>
      <div className="panel-body">
        <div className="form-inline">
          <div className="form-group">
            <input type="text" name="addend1" onChange={this.onChange} value={this.state.addend1} className="form-control"/>
          </div>
          <span className="js-modifier"></span>
          <div className="form-group">
            <input type="text" name="addend2" onChange={this.onChange} value={this.state.addend2} className="form-control"/>
          </div>
          <span>=</span>
          <div className="form-group">
            <span className="js-result form-control-static">
              {this.calculate(this.state.addend1, this.state.addend2)}
            </span>
          </div>
        </div>
      </div>
    </div>);
  }
});
