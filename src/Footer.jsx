import * as React from 'react';

function Footer() {
  return (
    <footer className="w-5/6 max-w-screen-sm pt-2 pb-2 m-6 mx-auto font-mono text-base leading-relaxed text-center text-gray-800 bg-white rounded-md bg-opacity-20 sm:flex sm:justify-center">
      <p className="sm:mr-4">
        Made by Lucas Livchits{' '}
        <span aria-label="The emoji of a rocket flying" role="img">
          🚀
        </span>
      </p>
      <a className="hover:text-gray-600" href="https://github.com/livchits">
        Check the code
      </a>
    </footer>
  );
}

export default Footer;
