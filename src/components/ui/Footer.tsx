const Footer = () => {
  return (
    <>
      <footer>
        <div className="text-center space-y-3 pt-8 pb-4 border-t-2 border-t-violet-100 ">
          <p className="font-semibold text-xl">Let&apos;s keep in touch!</p>
          <p className="font-medium">
            Find us on any of these platforms, we respond 1-2 business days.
          </p>
          <div className="space-x-4 ">
            <span>Icon</span>
            <span>Icon</span>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="text-violet-100 border w-3/4" />
        </div>
        <p className="text-center p-2">Copyright © 2025 Creative Emily.</p>
      </footer>
    </>
  );
};
export default Footer;
