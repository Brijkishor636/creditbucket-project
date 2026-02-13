import React from "react";

const FooterBottom: React.FC = () => {
  const year = new Date(Date.now()).getFullYear();

  return (
    <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-xs">
      © {year} Creditbucket Technologies Private Limited. All rights reserved.
    </div>
  );
};

export default FooterBottom;
