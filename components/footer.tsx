import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Left Side - Logo and Copyright */}
          <div className="flex flex-col md:justify-start md:items-start">
            <Link
              href="/"
              className="inline-flex items-center space-x-2"
              style={{ alignSelf: "flex-start" }}
            >
              <Image
                src="/skld-logo-white.png"
                alt="SKLD Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            {/* Increased spacing between logo and copyright */}
            <span className="text-gray-400 text-sm mt-10 block">
              © 2025 SKLD Integrated Services Limited. All rights reserved.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12 mt-8 md:mt-0">
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Blog & News
              </Link>
              <Link
                href="/careers"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/quality-policy"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Quality Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Cookies
              </Link>
              <Link
                href="/gallery"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Gallery
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <Link
                href="https://www.facebook.com/share/17hP2z3FAV/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/skldintegratedservices?igsh=MTlocW80ZGxxODBmcg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/skld/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Link>
              {/* <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter(X)</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
