import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SWDiv = styled.div`
  height: 170px;
  width: 1000px;
  background-color: lightblue;
  overflow: scroll;
`;

const ScrollWindow = props => {
  const { data } = props;
  return (
    <SWDiv>
      {data.map(incidents => {
        const linksArr = incidents.src.split('');
        linksArr.splice(0, 1);
        linksArr.splice(linksArr.length - 1, 1);
        linksArr.splice(0, 1);
        linksArr.splice(linksArr.length - 1, 1);
        let newLink = Array(linksArr.join('').split(','));

        return (
          <div>
            {newLink[0].map((link, index) => {
              if (link.includes('http')) {
                return (
                  <Link to={link} target="_blank">{`Video ${index + 1}`}</Link>
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
