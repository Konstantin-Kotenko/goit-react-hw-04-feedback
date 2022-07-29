import PropTypes from 'prop-types';
import { Title, Sections } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Sections>
      <Title>{title}</Title>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
