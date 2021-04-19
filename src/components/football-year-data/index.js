import React from "react";
import "../football-data/index.css";

export const FootballYearData = ({ data }) => {
  return (
    <div>
      {data.page ? (
        data.data.length ? (
          <section className="content">
            <div className="total-matches" data-testid="total-matches">
              Total matches: {data.data.length}
            </div>
            <ul className="mr-20 matches styled" data-testid="match-list">
              {data.data.map((match, i) => {
                return (
                  <li key={i} className="slide-up-fade-in">
                    Match {match.name} won by {match.winner}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : (
          <section className="content-no-scroll">
            <div data-testid="no-result" className="slide-up-fade-in no-result">
              No Matches Found.
            </div>
          </section>
        )
      ) : (
        <section className="content-no-scroll">
          <div data-testid="loading" className="slide-up-fade-in loading">
            Loading...
          </div>
        </section>
      )}
    </div>
  );
};
