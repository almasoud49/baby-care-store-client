import React from 'react';
import FIDetails from './FIDetails';
import FILinks from './FILinks';
import FIInformationLinks from './FIInformationLinks';
import FIAccounts from './FIAccounts';

const FooterInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          <FIDetails/>
          <FILinks/>
          <FIDetails/>
          <FIInformationLinks/>
          <FIAccounts/>
        </div>
    );
};

export default FooterInfo;