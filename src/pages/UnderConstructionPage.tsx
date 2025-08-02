import Background from "@/assets/Background Under Construction.png";
import Logo from "@/assets/Tonetto White.svg";
import { Countdown } from "@/components/others/Countdown";
import { CiInstagram } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";

function UnderConstructionPage() {
  return (
    <div
      className="w-full h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header / Logo */}
      <div className="flex items-center justify-center w-full px-4 sm:px-16 md:px-28 py-8 sm:py-16">
        <img src={Logo} alt="Tonetto Logo" className="h-8 sm:h-10 md:h-12" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-16 pb-8 text-white">
        <div className="flex flex-col items-center mb-24 sm:mb-32 max-w-full sm:max-w-xl md:max-w-3xl gap-4 sm:gap-6">
          {/* Headline */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
            We're Launching Soon.
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-center max-w-md">
            <span className="font-semibold text-[#F2F2F2]">
              Crafted for the Modern Ones,
            </span>{" "}
            <br />
            Because elegance doesn't rush.
          </p>

          {/* Countdown */}
          <div className="my-4 sm:my-6 md:my-8">
            <Countdown
              targetDate={new Date("2026-01-01T00:00:00Z")}
              className="mx-auto"
            />
          </div>

          {/* Social / Footer */}
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/tonetto.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#F2F2F2] hover:scale-110 transition-transform"
              >
                <CiInstagram className="text-xl sm:text-2xl text-[#F2F2F2]" />
              </a>
              <a
                href="https://wa.me/6281310899214?text=Hi!%20I%20want%20to%20know%20more%20about%20Tonetto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#F2F2F2] hover:scale-110 transition-transform"
              >
                <PiWhatsappLogoLight className="text-xl sm:text-2xl text-[#F2F2F2]" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#A0A4B8] mt-3">
              © {new Date().getFullYear()} Tonetto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderConstructionPage;
