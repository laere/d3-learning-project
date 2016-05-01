import React, { Component } from 'react';
import d3 from 'd3';

class HistogramBar extends Component {

  render() {

    let translate = `translate(${this.props.x}, ${this.props.y})`,
        label = this.props.percent.toFixed(0) + '%';

    return (
      <g transform={translate} className="bar">
        <rect width ={this.props.width}
              height={this.props.height - 2}
              transform="translate(0,1)">
        </rect>
        <text textAnchor="end"
              y={this.props.width - 5}
              x={this.props.height / 2 + 3}>
                {label}
        </text>
      </g>
    );
  }
}

export default HistogramBar;
