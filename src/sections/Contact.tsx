export default function Contact() {
    return (
        <div id="contact" className="relative bg-black text-white  py-1 px-6 pb-22 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-5 h-[40%] rounded-2xl items-center"style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                
                {/* Left Side Content */}
                <div className="space-y-4 ">
                    {/* Logo and Company Name */}
                    <div className="flex items-center gap-2">
                        <img 
                            src="/Crownlogo.png" 
                            alt="Purple Sky Trade Logo" 
                            className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        />
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-semibold text-gray-300" >
                            Purple Sky Trade
                        </h2>
                    </div>
                    
                    {/* Lorem Ipsum Text */}
                    <div className="text-gray-400 space-y-2 max-w-xl">
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Optional: Contact Info */}
                    <div className="pt-6 space-y-3">
                        <h3 className="text-xl font-semibold" style={{ color: '#9d4489' }}>Get In Touch</h3>
                        <p className="text-gray-300">Email: contact@purpleskytrade.com</p>
                        <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
                    </div>
                </div>

                {/* Right Side - Contact Image 1 */}
                <div className="flex justify-center lg:justify-end pt-5 ">
                    <img 
                        src="/contactimg1.jpg" 
                        alt="Contact" 
                        className="w-100 h-auto "
                    />
                </div>
            </div>

           
        </div>
    );
}