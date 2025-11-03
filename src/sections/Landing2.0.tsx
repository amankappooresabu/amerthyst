export default function Landing1() {
    return (
        <div className="w-full">
            <video
                autoPlay
                loop={true}
                muted
                playsInline
                className="object-contain "
                style={{ zIndex: 1, width: '100%' }}
            >
                <source src="/video2.mp4" type="video/webm" />
            </video>
        </div>
    )
}