import React from "react";
import Image from 'next/image'
const TransparencyAndIntegrity = () => {
  return (
    <div className="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 text-justify">
      <Image
        src="/images/boy_teaching_girl.png"
        width={555}
        height={555}
      ></Image>
      <div className="flex flex-col">
        <div className="text-4xl font-normal text-[#252525]">
          Transparency and Integrity
        </div>
        <div className="text-2xl font-light text-[#808080] mt-6 text-justify">
          In theory, it sounds great: “More transparency means better production
          and happier clients.” The reasoning, we argue, is that transparency
          builds trust. Trust makes for better vendor-client relationships, and
          in turn, more clients. Agile transparency reduces project risk,
          especially risks to the quality and value of your product. We do this
          not just by third-party audited deliverables and process but also with
          open transparent
        </div>
      </div>
    </div>
  );
};

export default TransparencyAndIntegrity;
