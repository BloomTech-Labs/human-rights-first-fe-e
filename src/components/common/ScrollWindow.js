import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SWDiv = styled.div`
  height: 70vh;
  width: 100%;
  background-color: #d4d4d4;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  justify-content: flex-start;
  padding: 0 5% 0 5%;
  transition-delay: 5s;
  .article-container {
    padding-top: 5% 0 5% 0;
    margin: 2% 0 2% 0;
    padding: 2%;
    width: 50%;
    :hover {
      background-color: white;
    }
  }
  .source {
    font-family: 'Fjalla One', sans-serif;
  }
  h1 {
    font-family: 'Fjalla One', sans-serif;
    text-transform: uppercase;
    border-top: 2px solid black;
    margin-top: -2%;
  }
  .city-state {
    font-weight: 300;
    text-transform: uppercase;
    color: black;
  }
  .date {
    padding: -5px;
  }
`;

const ScrollWindow = props => {
  const { data } = props;
  return (
    <SWDiv>
      {data.length === 0 && (
        <p>
          Click a node on the graph to display instances of police violence per
          month
        </p>
      )}
      {data.map(incident => {
        const linksArr = incident.src.split('');
        linksArr.splice(0, 2);
        linksArr.splice(linksArr.length - 1, 2);
        let newLink = Array(linksArr.join('').split(','));

        const newDate = new Date(incident.date);
        const formattedDate = String(newDate).split(' ');
        const day = formattedDate[0],
          month = formattedDate[1],
          date = formattedDate[2],
          year = formattedDate[3];
        return (
          <div className="article-container">
            <div className="date">
              <p>{day + ', ' + month + ' ' + date + ', ' + year}</p>
            </div>

            <h1>{incident.title}</h1>
            <p>
              <span className="city-state">
                {incident.city}, {incident.state}
                {' - '}
              </span>
              {incident.description}
            </p>
            {newLink[0].map((link, index) => {
              if (link.includes('http')) {
                return (
                  <Link
                    className="source"
                    to={link}
                    target="_blank"
                  >{`|Source ${index + 1}| `}</Link>
                );
              }
            })}
          </div>
        );
      })}
    </SWDiv>
  );
};

export default ScrollWindow;
