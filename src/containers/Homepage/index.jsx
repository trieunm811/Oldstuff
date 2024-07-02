import React, { useRef, useState } from "react";
import BannerHomepage from "./Banner";
import MiddleContent from "./MiddleContent";


function HomePage() {
  return (
    <div>
      <BannerHomepage />
      <MiddleContent />
    </div>
  );
}

export default HomePage;
