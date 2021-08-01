import React from 'react';
import ProtectedRoute from '../components/master/protectedRoute/ProtectedRoute';

const fayez = () => {
  return (
    <div>
      <h2>Hello I am Fayez</h2>
    </div>
  );
};

export default ProtectedRoute(fayez);