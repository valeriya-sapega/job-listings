import React, { useEffect, useState } from "react";
import data from "./data";
import "./App.css";
import JobCard from "./components/JobCard";
import Filter from "./components/Filter";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  // NOT WORKING PROPERLY - CHANGING ARRAY DIRECTLY

  // useEffect(() => {
  //   if (filters.length === 0) {
  //     setJobs(data);
  //   } else {
  //     const newJobs = jobs.filter(({ languages, tools }) =>
  //       filters.every(
  //         (filter) => languages.includes(filter) || tools.includes(filter)
  //       )
  //     );
  //     setJobs(newJobs);
  //   }
  // }, [filters]);

  useEffect(() => {
    let newJobs;

    if (filters.length === 0) {
      newJobs = data;
    } else {
      newJobs = data.filter(({ languages, tools }) =>
        filters.every(
          (filter) => languages.includes(filter) || tools.includes(filter)
        )
      );
    }

    setJobs(newJobs);
  }, [filters]);

  const handleFilter = (e) => {
    if (!filters.includes(e.target.value)) {
      setFilters((prev) => [...prev, e.target.value]);
    }
  };

  const removeFilter = (e) => {
    setFilters((prev) => prev.filter((item) => item !== e.target.value));
  };

  const clearAll = () => {
    setFilters([]);
  };

  const jobCards = jobs.map((job) => {
    console.log(job.logo);
    return (
      <JobCard
        myKey={job.id}
        logo={job.logo}
        company={job.company}
        new={job.new}
        featured={job.featured}
        position={job.position}
        postedAt={job.postedAt}
        contract={job.contract}
        location={job.location}
        languages={job.languages}
        tools={job.tools}
        handleFilter={handleFilter}
      />
    );
  });

  return (
    <>
      <header></header>
      <main>
        {filters.length > 0 && (
          <div className="filter">
            <div className="filter--nav">
              <div className="filter--list">
                {filters.map((filter) => (
                  <Filter
                    filteredItem={filter}
                    filter={filter}
                    removeFilter={removeFilter}
                  />
                ))}
              </div>
              <button className="btn" onClick={clearAll}>
                Clear All
              </button>
            </div>
          </div>
        )}
        <div className="jobListing">{jobCards}</div>
      </main>
    </>
  );
}

export default App;
