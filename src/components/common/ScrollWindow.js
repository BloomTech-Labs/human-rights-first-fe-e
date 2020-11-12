import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SWDiv = styled.div`
  height: 50vh;
  width: 100%;
  background-color: lightblue;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
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
        return (
          <div>
            <h1>{incident.title}</h1>
            <h2>
              {incident.city}, {incident.state}
            </h2>
            {newLink[0].map((link, index) => {
              if (link.includes('http')) {
                return (
                  <Link to={link} target="_blank">{`Source ${index + 1}`}</Link>
                );
              }
            })}
            <p>{incident.description}</p>
          </div>
        );
      })}
    </SWDiv>
  );
};

export default ScrollWindow;
