import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Legal Links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#privacy" className="hover:text-gold transition-colors uppercase tracking-wide">
              PRIVACY
            </Link>
            <span>|</span>
            <Link href="#terms" className="hover:text-gold transition-colors uppercase tracking-wide">
              TERMS
            </Link>
            <span>|</span>
            <Link href="/" className="hover:text-gold transition-colors uppercase tracking-wide">
              MAVENMVN.COM
            </Link>
            <span className="hidden md:inline">- LLC.</span>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>|</span>
            <Link href="/about" className="hover:text-gold transition-colors">
              About Us
            </Link>
            <span>|</span>
            <Link href="#contact" className="hover:text-gold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          2021 ALL RIGHTS RESERVED | C11-0000742-LIC
        </div>
      </div>
    </footer>
  );
}
