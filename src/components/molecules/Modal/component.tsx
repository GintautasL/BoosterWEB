import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { color, media } from '../../../theme'
import { Image } from '../..'
import { images } from '../../../utils'

interface ModalContentProps {
  children: any
  onClose: any
  title: string
}

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  onClose,
  title,
  children,
}) => {
  return (
    <div className="modalContentWrapper">
      <button
        type="button"
        className="modalContentButton"
        onClick={onClose}
        title="Close">
        <Image src={images.close} width="12px" height="12px" />
      </button>
      {title && <h2 className="modalContentHeading">{title}</h2>}
      {React.cloneElement(children, { closeModal: onClose })}
      <style jsx>
        {`
          .modalContentWrapper {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-shrink: 0;
            width: 100%;
          }
          .modalContentButton {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: ${color('light', 200)};
            border: none;
            outline: none;
            cursor: pointer;
            align-self: flex-end;
            user-select: none;
            flex-shrink: 0;
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 10;
          }
          @media ${media()} {
            .modalContentButton {
              right: 5px;
              position: fixed;
            }
          }
          .modalContentHeading {
            padding-top: 10px;
            padding-bottom: 10px;
            font-weight: 800;
            font-size: 28px;
            margin-bottom: 10px;
            text-align: center;
            color: ${color('light', 200)};
          }
          @media ${media()} {
            .modalContentHeading {
              padding-top: 0px;
              padding-bottom: 30px;
            }
          }
        `}
      </style>
    </div>
  )
}

interface ModalProps {
  title: string
  children: any
  maxWidth?: string
  maxHeight?: string
  trigger: any
  open: boolean
  handleModalClose: Function
  transition: boolean
  alignItems?: string
  paddingMobile?: string
  paddingDesktop?: string
  minHeight?: string
  height?: string
  width?: string
}

interface ModalStateProps {
  showModal: boolean
}

export class Modal extends Component<ModalProps, ModalStateProps> {
  constructor(props) {
    super(props)
    this.state = {
      showModal: props.open || false,
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    const { handleModalClose } = this.props
    typeof handleModalClose === 'function' && handleModalClose()
    this.setState({ showModal: false })
  }

  render() {
    const {
      title,
      trigger,
      open,
      transition,
      alignItems,
      paddingDesktop,
      minHeight,
      maxHeight,
      height,
      width,
      maxWidth,
      paddingMobile,
      children,
    } = this.props
    const { showModal } = this.state
    return (
      <React.Fragment>
        {trigger &&
          React.cloneElement(trigger, { onClick: this.handleOpenModal })}
        <ReactModal
          isOpen={showModal || open}
          closeTimeoutMS={0}
          ariaHideApp={false}
          contentLabel={title}
          className="modalBox"
          overlayClassName="modalWrapper"
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          onRequestClose={this.handleCloseModal}>
          <ModalContent
            {...this.props}
            title={title}
            onClose={this.handleCloseModal}>
            {children}
          </ModalContent>
        </ReactModal>
        <style jsx global>
          {`
            body {
              overflow: ${showModal || open ? 'hidden' : 'auto'};
            }
            .ReactModal__Overlay {
              position: fixed;
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              background-color: ${color('light', 700, 0.52)};
              display: flex;
              justify-content: center;
              align-items: ${alignItems || 'center'};
              opacity: 0;
              z-index: 100;
              overflow-y: auto;
              transition: ${transition ? 'opacity 150ms ease-in-out' : 'none'};
            }
            .ReactModal__Overlay--after-open {
              opacity: 1;
            }

            .ReactModal__Overlay--before-close {
              opacity: 1;
            }
            .modalBox {
              position: relative;
              display: flex;
              flex-direction: column;
              max-width: ${maxWidth || '1010px'};
              width: ${width || '100%'};
              height: ${height || '100%'};
              max-height: ${maxHeight || '650px'};
              min-height: ${minHeight || 'initial'};
              background-image: linear-gradient(
                to bottom right,
                ${color('grey', 600)},
                ${color('grey', 800)}
              );
              border-radius: 8px;
              overflow: auto;
              outline: none;
              padding: ${paddingDesktop || '20px 50px 50px 50px'};
            }
            @media ${media()} {
              .modalBox {
                padding: ${paddingMobile || '50px 40px'};
                min-width: '100%';
                max-height: 100%;
                max-width: 100%;
                min-height: 100%;
                border-radius: 0px;
              }
            }
          `}
        </style>
      </React.Fragment>
    )
  }
}
