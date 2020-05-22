import React from "react";
import { useRecoilState } from "recoil";
import { taskListFilterState } from "../../utils/recoil";
import "./Filter.css";

const filters = ["All", "Done", "Active"];

const Filter = () => {
  const [filter, setFilter] = useRecoilState(taskListFilterState);

  return (
    <div>
      <div className="filter">
        <h4 className="filter-title">Filters</h4>
        {filters.map((value, i) => (
          <button
            key={i.toString()}
            className={`filter-btn ${value === filter ? "active" : "deactive"}`}
            onClick={() => setFilter(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
