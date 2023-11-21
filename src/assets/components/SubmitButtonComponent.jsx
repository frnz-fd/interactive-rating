// SubmitButtonComponent.jsx

import PropTypes from 'prop-types';

const SubmitButtonComponent = ({ isSelected, onClick  }) => {
    // SubmitButtonComponent.jsx (or wherever it's defined)


  
  return (
    <button
      className={`w-11/12 ml-4 bg-Orange text-white font-bold rounded-3xl py-3 mt-5 ${
        isSelected ? 'cursor-pointer hover:bg-white hover:text-Orange' : 'cursor-not-allowed hover:bg-white hover:text-Orange'
      }`}
      onClick={onClick}
      //غیرفعال کردن دکمه
      disabled={!isSelected}
    >
      SUBMIT
    </button>
  );
};

SubmitButtonComponent.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onClick:PropTypes.func.isRequired,
};

export default SubmitButtonComponent;

