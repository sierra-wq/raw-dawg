import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"

import Logo from "@/assets/RawDawg.svg";

export default function Footer() {

  return (

   <footer className="bg-quaternary py-12 w-full justify-center flex flex-col justify-self-center">
          
            <div className="w-full px-8 flex flex-col lg:flex-row justify-between gap-12">
                 <div className="w-full lg:w-2/5 text-primary flex flex-col gap-6 font-arvo">
                      <p className="text-2xl font-germania">Explore</p>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-base">
                        <a className="hover:text-primary/80" href="/">Home</a>
                        <a className="hover:text-primary/80" href="/Products">Shop</a>
                        <a className="hover:text-primary/80" href="/Ingredients">Ingredients</a>
                        <a className="hover:text-primary/80" href="/About">Our Story</a>
                        <a className="hover:text-primary/80" href="/Faq">FAQ's</a>
                        <a className="hover:text-primary/80" href="/Legal/Terms">Terms of Use</a>
                        <a className="hover:text-primary/80" href="/Legal/Privacy">Privacy Policy</a>
                        <a className="hover:text-primary/80" href="/Legal/Shipping">Shipping Policy</a>
                        <a className="hover:text-primary/80" href="/Legal/Refund">Refund Policy</a>
                      </div>
                      <div>
                        <Button className="px-8 py-5 text-xl rounded-3xl hover:bg-quaternary hover:border-2 hover:border-primary hover:text-primary bg-primary text-quaternary">
                            Contact Us
                         </Button>
                      </div>
                  </div>

                  
            
                  <div className="w-full lg:w-3/5 font-arvo content-center">
                     <div className="rounded-2xl border-2 border-primary/30 bg-primary/10 p-8">
                        <p className="text-3xl font-germania font-bold text-primary">Join the Pack</p>
                        <p className="text-base text-primary/70 mt-2">Drop your email for drops, deals, and real-dawg updates.</p>
                        <div className="mt-5 flex flex-col sm:flex-row items-stretch gap-3">
                          <Input className="py-4 px-4 active:outline-none border-primary/40 bg-primary text-primary font-semibold text-lg" type="email" placeholder="Email" />
                          <Button type="submit" className="px-6 py-4 text-xl font-germania text-tertiary hover:bg-quaternary hover:border-2 border-2 hover:border-primary hover:text-primary bg-primary">
                            Subscribe
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center mt-6 text-primary">
                        <a href="https://www.tiktok.com" aria-label="TikTok">
                          <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M19.5 8.5a6.5 6.5 0 0 1-4.7-2V15a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v2.9a2.6 2.6 0 1 0 1.8 2.5V2h3a6.5 6.5 0 0 0 4.2 3.7v2.8z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram">
                          <InstagramIcon className="w-9 h-9" />
                        </a>
                        <a href="https://www.facebook.com" aria-label="Facebook">
                          <FacebookIcon className="w-9 h-9" />
                        </a>
                      </div>
                      <p className="text-sm text-primary/60 mt-6">Feed Instinct. Not Industry. © 2025 Raw Dawg™. All rights reserved.</p>
                  </div>
            </div>

            <div className="w-full flex justify-center mt-10">
              <a href="/" className="flex justify-center">
                <Logo style={{ width: "18rem", height: "4.5rem" }} className="fill-primary" />
              </a>
            </div>
          
        </footer>
  );
}
