import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../elements/Button'
import Container from '../elements/Container'
import Section from '../elements/Section'

const GetStarted = ({title, ctaButton, subtitle}) => (
    <StyledSection>
      <GetStartedContainer>
        <GetStartedTitle>{title}</GetStartedTitle>
        <Button>{ctaButton}</Button>
        <Subtitle>{subtitle}</Subtitle>
      </GetStartedContainer>
    </StyledSection>
  )
  

  GetStarted.propTypes = {
      title: PropTypes.string.isRequired,
      ctaButton: PropTypes.string.isRequired,
      subtile: PropTypes.string.isRequired,
  }


  
  const StyledSection = styled(Section)`
    background-color: ${props => props.theme.color.background.light};
    clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
  `
  
  const GetStartedContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 0 40px;
  `
  
  const GetStartedTitle = styled.h3`
    margin: 0 auto 32px;
    text-align: center;
  `
  
  const Subtitle = styled.span`
    ${props => props.theme.font_size.xxsmall}
    padding-top: 16px;
    font-size: 14px;
    color: ${props => props.theme.color.primary};
  `


export default GetStarted