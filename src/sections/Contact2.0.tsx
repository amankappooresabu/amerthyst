import ContactCard from "./components/Contactcard/Contactcard";

export default function Contact() {
    return (
        <div className="w-full h-screen flex flex-col bg-black">
            
            {/* Top Section */}
            <div className="flex-1 flex items-center justify-center relative z-10">

                {/* Glassmorphic Card */}
                <div 
                    className="
                        bg-[rgba(255,255,255,0.13)]
                        backdrop-blur-[7px]
                        mt-[95px] 
                        border border-[rgba(255,255,255,0.1)]
                        rounded-[20px]
                        p-3
                        w-[65%]
                        h-[90%]
                        flex
                        gap-[34px]
                        mb-[-90px]
                    "
                >
                    {/* 1. This class is now valid */}
                    {/* 2. Added this negative margin to create the overlap */}
                    
                    <div className="w-[50%] h-[95%] mt-3">
                       <ContactCard/>
                    </div>
                </div>

            </div>


            {/* Bottom Section with Image */}
            <div className="h-[25%] w-full flex items-center justify-center">
                <img 
                    src="./contactarea.png"
                    alt="Contact illustration"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}