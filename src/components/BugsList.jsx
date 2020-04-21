import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getBugsList, resolveBug } from "../store/bugs";

const BugList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getBugsList);

  useEffect(() => {
    dispatch(loadBugs());
  });

  const handleResolveBug = (id) => {
    dispatch(resolveBug(id));
  };

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}

          {!bug.resolved && (
            <button onClick={() => handleResolveBug(bug.id)}>Resolve</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BugList;
