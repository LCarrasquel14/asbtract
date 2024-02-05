import Image from "next/image";
import Link from "next/link";
import "@/app/styles/footer.css";

const Footer = () => {
  return (
    <div className="bg-black text-white footer w-full">
      <div className="footer-links">
        <div>
          <h1>Abstract</h1>
          <ul>
            <li>
              {" "}
              <Link href="/star-trial">Star Trial</Link>
            </li>
            <li>
              <Link href="/download">Download</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Resources</h1>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/help-center">Help Center</Link>
            </li>
            <li>
              <Link href="/release-notes">Release Notes</Link>
            </li>
            <li>
              <Link href="/status">Status</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Community</h1>
          <ul>
            <li>
              <Link href="https://twitter.com/abstractapp">Twitter</Link>
            </li>{" "}
            <li>
              <Link href="https://www.linkedin.com/company/abstract">
                Linke
              </Link>
            </li>{" "}
            <li>
              <Link href="https://www.facebook.com/abstract">Facebook</Link>
            </li>{" "}
            <li>
              <Link href="https://dribbble.com/abstract">Dribbble</Link>
            </li>{" "}
            <li>
              <Link href="https://podcast.com">Podcast</Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            {" "}
            <h1>Company</h1>
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>

              <li>
                <Link href="/legal">legal</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h1>Contact Us</h1>
            <p>info@abstract.com</p>
          </div>
        </div>
      </div>
      <div className="footer-right mr-6 mb-4">
        <Image
          className="footer-brand"
          src="/brand.png"
          width={40}
          height={40}
          alt="brand"
        />
        <p className="copyright">© Copyright 2023</p>
        <p className="copyright">Abstract Studio Design, Inc.</p>
        <p className="copyright">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
