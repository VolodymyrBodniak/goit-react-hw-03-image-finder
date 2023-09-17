import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <li className={css.galleryItem}>
        <img
          src={this.props.data.webformatURL}
          className={css.ImageGalleryItemImage}
          onClick={this.toggleModal}
          alt=""
        />
        {this.state.showModal && (
          <Modal
            largeImageURL={this.props.data.largeImageURL}
            toggleModal={this.toggleModal}
          ></Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
