import React from "react";

function Pagination({ prev, next, onPrev, onNext }) {
  const handlePrevius = () => {
    onPrev();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      <nav className="my-5">
        <ul className="pagination justify-content-center">
          {prev ? (
            <li className="page-item">
              <button className="page-link" onClick={handlePrevius}>
                Prev
              </button>
            </li>
          ) : null}
          {next ? (
            <li className="page-item">
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
