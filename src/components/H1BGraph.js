import React, { Component } from 'react';
import d3 from 'd3';

class H1BGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: []
    };

    this.loadRawData = this.loadRawData.bind(this);
  }

  componentWillMount() {
    this.loadRawData();
  }

  loadRawData() {
    let dateFormat = d3.time.format('%m/%d/%Y');
    d3.csv(this.props.url)
      .row((d) => {
        if(!d['base salary']) {
          return null;
        }
        return {
          employer: d.employer,
          submit_date: dateFormat.parse(d['submit date']),
          start_date: dateFormat.parse(d['start date']),
          case_status: d['case status'],
          job_title: d['job title'],
          clean_job_title: this.cleanJobs(d['job title']),
          base_salary: Number(d['base salary']),
          salary_to: d['salary to'] ? Number(d['salary to']) : null,
          city: d.city,
          state: d.state
        }
      })
      .get((error, rows) => {
        if(error) {
          console.log(error);
          console.error(error.stack);
        } else {
            this.setState({rawData: rows})
        }
      });
  }

  render() {
    if(!this.state.rawData.length) {
      return (
        <h2>Loading data! Did you know there's about 81,000 H1B visas in the software industry?</h2>
      );
    }
    return(
      <div>
        <svg>
        </svg>
      </div>
    );
  }
}

export default H1BGraph;
