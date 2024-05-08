import Image from "next/image";
interface Props {
  name: string;
}

export default function Footer({ name }: Props) {
  return (
    <footer className="md:mt-10 md:mx-5">
      <div className="md:hidden bg-yellow-custom text-white p-8 rounded-t-xl">
        <h2 className="text-base mb-4 font-bold text-center text-black">
          {name}
        </h2>
        <section aria-label="Follow Us">
          <h3 className="text-base mb-4 text-left font-bold text-black">
            Follow Us
          </h3>
          <div className="flex">
            <Image
              className="mr-4 h-auto w-8"
              src="/svg/facebook.svg"
              alt="facebook"
              width={0}
              height={0}
            />
            <Image
              className="mr-4 h-auto w-8"
              src="/svg/twitter.svg"
              alt="twitter"
              width={0}
              height={0}
            />
            <Image
              className="mr-4 h-auto w-8"
              src="/svg/tiktok.svg"
              alt="tiktok"
              width={0}
              height={0}
            />
            <Image
              className="mr-4 h-auto w-8"
              src="/svg/instagram.svg"
              alt="instagram"
              width={0}
              height={0}
            />
            <Image
              className="mr-4 h-auto w-8"
              src="/svg/youtube.svg"
              alt="youtube"
              width={0}
              height={0}
            />
          </div>
        </section>
        <section aria-label="Contact Us">
          <div className="py-3">
            <h3 className="text-base text-left font-bold text-black mb-4">
              Contact us
            </h3>
            <div className="flex mb-3">
              <Image
                src="/svg/mail.svg"
                alt="mail"
                width={0}
                height={0}
                className="h-4 w-auto"
              />
              <a
                href="mailto:user@mail.com"
                aria-label="Email user@mail.com"
                className="text-brown-custom text-base ml-4"
              >
                Email to user@mail.com
              </a>
            </div>

            <div className="flex">
              <Image
                src="/svg/phone.svg"
                alt="pin"
                width={0}
                height={0}
                className="h-5 w-5"
              />
              <p className="text-brown-custom text-base ml-4">
                Call 082143215678
              </p>
            </div>
          </div>
        </section>
        <h3 className="text-base mb-4 font-bold text-left text-black">
          Address
        </h3>
        <div className="flex">
          <Image
            src="/svg/pin.svg"
            alt="pin"
            width={0}
            height={0}
            className="h-5 w-5"
          />
          <p className="text-brown-custom text-base ml-4">Address</p>
        </div>
      </div>
      <div>
        <p className="text-base p-5 text-center bg-light-blue">
          Copyright @DesktopIP
        </p>
      </div>
    </footer>
  );
}
