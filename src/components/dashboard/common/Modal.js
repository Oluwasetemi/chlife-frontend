import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import close from '../../../assets/close.svg';
import Grid from '@material-ui/core/Grid';
import Button from '../../common/Button';

const Wrapper = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 222;
    background: rgba(0, 0, 0, 0.6);
    .modal-main {
      background: ${(props) => props.theme.color.ui_01};
      width: 440px;
      padding: 0 2.4rem 2.4rem;
      height: 100%;
      text-align: start;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow-y: scroll;
      overflow-x: hidden;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        padding-top: 6rem;
      }
      &::-webkit-scrollbar {
        width: 0.3rem;
      }

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
      }
    }
    .modal-right{
          transform: translate(-0%,-0%);
    top: 0;
    left: 0;
    float: right;
    }
  }
  .bold {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.5rem;
    color: ${(props) => props.theme.color.ui_05};
  }
  .big {
    font-size: 2.1rem;
    line-height: 4rem;
  }
  .light {
    font-weight: 300;
    padding: 1rem 0 3rem 0;
  }
  .close {
    justify-content: flex-end;
    #close-icon {
      &:hover {
        transition: 0.3s;
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
  .heading {
    margin-top: -18px;
    padding: 0;
  }
  .btn {
    .button {
      width: 100% !important;
    }
  }
  .btn2{
    @media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
      padding-bottom: 1rem;    }  }
  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
`;

const Modal = ({
	handleClose,
	show,
	children,
	textBtn,
	btn2,
	heading,
	info,
	position
}) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';

	return (
		<Wrapper>
			<div className={showHideClassName}>
				<section  className={` ${position} modal-main`}>
					<div className="close flex" onClick={handleClose}>
						<img src={close} alt="close-modal" id="close-icon" />
					</div>
					<div className="heading">
						<h1 className="bold  big">{heading}</h1>
						<p className="light bold">{info}</p>
					</div>
					{children}
					<Grid item xs={12} className="btn btn2">
						<Button theme="darkGreen" text={textBtn} />
					</Grid>
					<Grid item xs={12} className="btn">
						{btn2}
					</Grid>
				</section>
			</div>
		</Wrapper>
	);
};
Modal.defaultProps = {
	info:
    'It is a long established fact that a reader will be distracted by the readable content.',
};

Modal.propTypes = {
	handleClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	children: PropTypes.any.isRequired,
	textBtn: PropTypes.string,
	heading: PropTypes.string.isRequired,
	position: PropTypes.string,
	info: PropTypes.string.isRequired,
	btn2: PropTypes.element,
};

export default Modal;
