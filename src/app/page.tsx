import Image from 'next/image';
// import jessica from 'public/images/avatar-jessica.jpeg';

export default function Home() {
  return (
    <div className="w-[384] bg-[#1F1F1F] text-white flex flex-col gap-[24px] justify-center items-center p-[40px]">
      <Image
        className="rounded-full"
        src="/images/avatar-jessica.jpeg"
        alt="profile"
        width={88}
        height={88}
      />
      <div className="flex flex-col justify-center items-center">
        <h4 className="font-bold text-[24px]">Jessica Randall</h4>
        <p className="font-regular text-[14px] text-[#C4F82A]">
          London, United Kingdom
        </p>
      </div>
      <p className="w-full font-regular text-[14px] text-white text-center">
        &quot;Front-end developer and avid reader.&quot;
      </p>
      <div
        className="w-full flex flex-col justify-center items-center gap-[16px] 
        [&>button]:w-full [&>button]:h-[45px] [&>button]:bg-[#333] [&>button]:rounded-[8px] 
        [&>button]:cursor-pointer [&>button:hover]:bg-[#C4F82A] [&>button:hover]:text-[#333]">
        <button>GitHub</button>
        <button>Frontend Mentor</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
}
