import PropTypes from 'prop-types';
import { ButtonEl } from './Button.styled';

export const Button = ({ type = 'button', children, handleClick }) => {
  return (
    <ButtonEl onClick={() => handleClick(children)} type={type}>
      {children}
    </ButtonEl>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};
