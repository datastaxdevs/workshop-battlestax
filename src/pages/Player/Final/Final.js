import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetGame } from "../../../store/gameSlice";

export default function Final() {
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetGame());
    history.push(`/`);
  }, [dispatch, history]);
  return <React.Fragment />;
}
