import Image from "next/image";
import AdBannerLeft from "./adBannerLeft";
import AdBannerRight from "./adBannerRight";

export default function Home() {
  return (
    <div>

    
{/* Ad stuck to right */}
  <div className="absolute top-0 right-0 h-full flex items-center z-50 px-8 hidden lg:flex">
    <AdBannerRight />
  </div>
  {/* Ad on the left */}
  <div className="absolute top-0 left-0 h-full flex items-center z-50 px-8 hidden md:flex">
    <AdBannerLeft />
  </div>
    
    <div className="relative min-h-screen">
  {/* Main content centered */}
  <div className="flex items-center justify-center min-h-screen">
    <div className="main-window p-8">Main Content</div>
  </div>
  
</div>

</div>
  );
}

