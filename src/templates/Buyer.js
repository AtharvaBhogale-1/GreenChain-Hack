import React from 'react';
import Form from '../components/Form'; // Import the Form component

function Buyer() {
  return (
    <Form title="BUYER" page="Seller Page" link="seller" /> // Pass props to the Form component
  );
}

export default Buyer;
