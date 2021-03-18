import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "./style.css";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div className="play-video">
          <ModalVideo
            channel="custom"
            isOpen={this.state.isOpen}
            url="https://brendaliu0628.myportfolio.com/mathnasium"
            onClose={() => this.setState({ isOpen: false })}
          />
          <div>
            <i class="fas fa-play-circle" onClick={this.openModal}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default videoModal;
