import { connect } from "react-redux";
import { suggestBeers } from "../actions";
import { getQueryText } from "../selectors";
import QueryField from "./QueryField";

const mapDispatchToProps = {
  onChange: suggestBeers
};

const mapStateToProps = state => ({
  value: getQueryText(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryField);
