import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filter, getFilter } from "../redux/reducers/filterSlice";
// import { getFilter } from '../selectors/contacts-selector';
import PropTypes from "prop-types";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => getFilter(state));
  const onChange = (e) => {
    dispatch(filter(e.target.value));
  };

   return (
   <label>
        Find contacts by name <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;