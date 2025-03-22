import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 gap-5 p-5 text-xs">
      <div className="flex justify-center md:items-center items-start flex-col">
        <p>Made With</p>
        <p>
          <span className="text-cyan-500 lg:text-xs">Coffee</span> Destroyer
        </p>
      </div>
      <div className="flex gap-2 flex-col justify-center items-center">
        <a
          href="https://github.com/renoalane"
          target="_blank"
          className="flex gap-3 hover:text-cyan-500"
        >
          <BsGithub />
          <span>renoalane</span>
        </a>
        <a
          href="https://www.linkedin.com/in/renoalane/"
          target="_blank"
          className="flex gap-3 hover:text-cyan-500"
        >
          <BsLinkedin />
          <span>renoalane</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
