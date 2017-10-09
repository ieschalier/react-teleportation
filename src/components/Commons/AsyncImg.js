import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const isImg = b => (b.type.match(/image/) ? { img: URL.createObjectURL(b) } : false)
const getImg = url => fetch(url).then(r => r.blob())

const Img = styled.img`
  position: absolute;
  left: 20%;
  top: 15%;
  width: 60%;
`

export class AsyncImg extends React.Component {
  state = { img: null }

  componentWillMount = async() => {
    this.setState(isImg(await getImg(this.props.src)))
  }

  render = () => (
    this.state.img &&
    <Img
      src={this.state.img}
      alt={this.props.alt}
      style={this.props.style}
      role={this.props.role}
    />
  )
}

AsyncImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.shape({}),
}
