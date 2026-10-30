import React from 'react';

// Higher-Order Component to add a loading spinner
const withLoading = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { isLoading, ...otherProps } = this.props;
      if (isLoading) {
        return <div>Loading...</div>;
      }
      return <WrappedComponent {...otherProps} />;
    }
  };
};

// Regular component to display data
const DataDisplay = ({ data }) => {
  return <div>{data}</div>;
};

// Enhance the DataDisplay component with loading functionality
const EnhancedDataDisplay = withLoading(DataDisplay);

class Higher_order_component extends React.Component {
  state = {
    isLoading: true,
    data: null,
  };

  componentDidMount() {
    // Simulating a data fetch
    setTimeout(() => {
      this.setState({
        isLoading: false,
        data: 'Here is the data!',
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>Higher Order Component Example</h1>
        <EnhancedDataDisplay isLoading={this.state.isLoading} data={this.state.data} />
      </div>
    );
  }
}

export default Higher_order_component;

// A Higher-Order Component (HOC) is a function in React that takes a component and returns a new component with additional props or behavior. 