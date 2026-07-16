    import { Button } from "../ui/Button";
    import  Logo  from "../ui/Logo"
    function Header() {
    return (
        <header className="sticky top-0 z-[90] bg-[#26201a]/93 backdrop-blur-[14px] border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.18),0_12px_32px_rgba(0,0,0,0.12),0_24px_48px_rgba(0,0,0,0.07)]">
        <div className="max-w-[var(--maxw)] mx-auto px-6 flex items-center h-[72px] gap-4">
            
            <Logo />
    
             {/* Navagation Bar */}
            <nav className="flex gap-[22px] text-[13.5px] font-medium flex-1 justify-center [&_a]:text-white/72 [&_a]:transition-colors [&_a]:duration-[180ms] [&_a:hover]:text-white">
                    <a href="#about">About</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#booking">Book a class</a>
                    <a href="#instructors">Instructors</a>
                    <a href="#contact">Contact</a>
            </nav>
 
            {/* Clean Action Buttons Section */}
        <div className="flex items-center gap-2.5 shrink-0">
        <Button variant="ghost" size="sm" id="navLoginBtn">
            Log In
        </Button>
        
        <Button variant="clay" size="sm">
            Book Now
        </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="burger" id="burgerBtn" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
        </button>

        </div>
        </header>
    );
    }

    export default Header;
