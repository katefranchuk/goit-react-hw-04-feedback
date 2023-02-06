import PropTypes from 'prop-types';
import { ButtonEl } from './Button.styled';

export const Button = ({ type = 'button', children, handleIncrementFunction }) => {
  return (
    <ButtonEl onClick={() => handleIncrementFunction(children)} type={type}>
      {children}
    </ButtonEl>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  handleIncrementFunction: PropTypes.func,
};
