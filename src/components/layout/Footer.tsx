import Logo from "../ui/Logo";

function Footer() {
  return (
    <footer className="bg-[#222] pt-20 pb-5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="mb-3">
            <div 
              className="inline-block"
              style={{ filter: "invert(1) contrast(4) brightness(0.6)" }}
            >
              <Logo 
                alt="Reset Studio"
                className="h-14 w-auto"
              />
            </div>

            <p className="mt-3 text-[13px] leading-6 text-[#b8b5a6]">
              Recharge · Realign · Revive — Pilates built around precision, not
              intensity.
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">
            Studio
          </h4>

          <a
            href="#about"
            className="mb-2 block text-[13px] text-[#b8b5a6] transition hover:text-white"
          >
            About
          </a>

          <a
            href="#pricing"
            className="mb-2 block text-[13px] text-[#b8b5a6] transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#instructors"
            className="mb-2 block text-[13px] text-[#b8b5a6] transition hover:text-white"
          >
            Instructors
          </a>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">
            Account
          </h4>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="mb-2 block text-[13px] text-[#b8b5a6] transition hover:text-white"
          >
            Log In
          </a>

          <a
            href="#"
            className="block text-[13px] text-[#b8b5a6] transition hover:text-white"
          >
            Sign Up
          </a>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">
            Team
          </h4>

          <a
            href="#"
            className="mb-2 block text-[13px] text-[#b8b5a6] transition hover:text-white"
          >
            Admin Portal →
          </a>

          <a
            href="#contact"
            className="block text-[13px] text-[#b8b5a6] transition hover:text-white"
          >
            Contact
          </a>
        </div>

      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-between gap-2 border-t border-white/10 px-6 pt-4 text-[12px] text-[#7a786e]">
        <span>
          © 2026 Reset Studio. All rights reserved.
        </span>

        <span>
          Demo prototype
        </span>
      </div>

    </footer>
  );
}

export default Footer;