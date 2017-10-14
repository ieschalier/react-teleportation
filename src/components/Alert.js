import React from 'react'
import PropTypes from 'prop-types'
import { capitalize as c } from 'lodash'
import styled from 'styled-components'
import { Background, H1, P } from './Commons'

const Modal = styled.div`
  display: table;
  max-width: 400px;
  min-width: 350px;
  margin: 25vh auto;
  background-color: white;
  padding-bottom: 8px;
  box-shadow:  0 5px 20px rgba(0,0,0,0.1);
  &:hover {
    box-shadow:  0 5px 20px rgba(0,0,0,0.15);
  }
`

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #2196F3;
  font-size: 14px;
  height: 45px;
  box-sizing: border-box;
  font-weight: 500;
  padding: 12px 10px;
  float: right;
  text-transform: uppercase;
  outline: none;
  border: none;
  user-select: none;
  &:hover {
    background-color: #eee;
  }
`

export const Alert = ({ title, description, right, left }) => (
  <Background opacity={0.1}>
    <Modal>
      <H1>{c(title)}</H1>
      <P>{c(description)}</P>
      <footer style={{ padding: 8 }}>
        <Button onClick={right.action}>{right.title}</Button>
        <Button onClick={left.action}>{left.title}</Button>
      </footer>
    </Modal>
  </Background>
)

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  right: PropTypes.shape({
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
  left: PropTypes.shape({
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
}
