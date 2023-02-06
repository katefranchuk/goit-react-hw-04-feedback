import PropTypes from 'prop-types';
import { SectionEl, SectionTitle } from './Section.styled';


export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
