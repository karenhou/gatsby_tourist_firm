import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'

class CarouselRoomPix extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0, length: 0, items: [] }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }
  componentDidMount() {
    let tempArray = []
    if (this.props.data) {
      this.props.data.forEach(d => {
        let tempData = {
          key: d.node.photo.id,
          src: d.node.photo.file.url,
          caption: d.node.roomType,
        }
        tempArray.push(tempData)
      })
      this.setState({
        length: this.props.data.length,
        items: [...tempArray],
      })
    }
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === this.state.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    let slides = ''
    if (this.state.items) {
      slides = this.state.items.map(edge => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={edge.key}
          >
            <img src={edge.src} alt={edge.caption} style={{ width: '100%' }} />
            <CarouselCaption captionText={this.props.t(edge.caption)} />
          </CarouselItem>
        )
      })
    } else {
      slides = <h1>Loading...</h1>
    }

    if (this.state.items) {
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={this.state.items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />

          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      )
    } else {
      return <h1>Loading...X</h1>
    }
  }
}

export default withNamespaces()(CarouselRoomPix)
