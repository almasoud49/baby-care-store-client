import React from 'react';
import FIDetails from './FIDetails';
import FILinks from './FILinks';
import FIInformationLinks from './FIInformationLinks';
import FIAccounts from './FIAccounts';
import FISclIcons from './FISclIcons';

const FooterInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          
          <FILinks/>
          <FIDetails/>
          <FIInformationLinks/>
          <FIAccounts/>
          <FISclIcons/>
        </div>
    );
};

export default FooterInfo;