function withLoader(WrappedComponent) {
  class Enhanced extends React.Component {
    render() {
      const { loading, ...others } = this.props;
      return (
        <>
          {!loading && <WrappedComponent {...others} />}
          {loading && <span>Loading ...</span>}
        </>
      );
    }
  }

  return Enhanced;
}
