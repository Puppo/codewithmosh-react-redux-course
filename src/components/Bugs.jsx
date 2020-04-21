import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBugs, resolveBug } from "../store/bugs";

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  handleResolveBug(id) {
    this.props.resolveBug(id);
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}

            {!bug.resolved && (
              <button onClick={() => this.handleResolveBug(bug.id)}>
                Resolve
              </button>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
