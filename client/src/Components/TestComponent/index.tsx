import React, { Component } from "react";

interface TestProps {

}

class TestComponent extends Component<TestProps,any> {
    constructor(props: Readonly<TestProps>) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }
    componentWillMount() {
        this.callAPI();
    }
  render() {
    return (
      <div>
        <h2>API Test Response: {this.state.apiResponse}</h2>
      </div>
    );
  }
}

export default TestComponent;