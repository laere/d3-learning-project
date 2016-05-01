import React, { Component } from 'react';
import d3 from 'd3';

class Histogram extends Component {
  constructor(props) {
    super(props)

      this.histogram = d3.layout.histogram();
      this.widthScale = d3.scale.linear();
      this.yScale = d3.scale.linear();

      this.update_d3(props);
    }

    componentWillReceiveProps(newProps) {
      this.update_d3(newProps);
    }

    update_d3(props) {
      this.histogram
        .bins(props.bins)
        .value(props.value)

        let bars = this.histogram(props.data),
            counts = bars.map((d) => d.y);

        this.widthScale
          .domain([d3.min(counts), d3.max(counts)])
          .range([9, props.width-props.axisMargin]);

        this.yScale
          .domain([0, d3.max(bars.map((d) => d.x + d.dx))])
          .range([0, props.height-props.topMargin-props.bottomMargin]);
    }

    makeBar(bar) {
      let percent = bare.y/this.props.data.length * 100;

      let props = {
        percent: percent,
        x: this.props.axisMargin,
        y: this.yScale(bar.x),
        width: this.widthScale(bar.y),
        height: this.yScale(bar.dx),
        key: 'histogram-bar'+ bar.x + '-' + bar.y
      }
      return (
        <HistogramBar {...props} />
      );
    }

  render() {
    let translate = `translate(0, ${this.props.topMargin})`,
        bars = this.histogram(this.props.data);
    return (
      <g className="histogram" transform={translate}>
        <g className="bars">
          {bars.map(::this.makeBar)}
        </g>
      </g>
    );
  }
}

export default Histogram;
