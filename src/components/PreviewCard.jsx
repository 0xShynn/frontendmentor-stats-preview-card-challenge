import React from 'react';
import PropTypes from 'prop-types';

const PreviewCard = ({ title, subtitle, image, children }) => {
  const linkStyle =
    'underline transition duration-300 text-neutral-gray_2 hover:text-white';

  return (
    <div>
      <div
        className="flex flex-col overflow-hidden rounded-md bg-primary-darkblue md:flex-row-reverse md:w-1110"
        role="main"
      >
        {/* Image header */}
        <div className="relative w-full">
          <div className="absolute w-full h-full bg-primary-accent bg-opacity-20" />
          <div
            className={`h-64 bg-center bg-cover md:h-full bg-primary-accent bg-blend-multiply ${image}`}
          />
        </div>

        {/* Preview Card info */}
        <div className="px-6 py-8 md:p-20">
          <h1 className="mb-4 text-3xl font-bold leading-10 text-center text-white md:text-left md:text-4.5xl md:mb-6">
            {title}
          </h1>

          <h2 className="text-base leading-6.5 font-body text-neutral-gray_2 text-center md:text-left md:max-w-sm">
            {subtitle}
          </h2>
          {children}
        </div>
      </div>
      <div className="flex justify-center mt-4 text-neutral-gray_2">
        <p>
          Code challenge by{' '}
          <a
            href="https://frontendmentor.io"
            className={linkStyle}
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>{' '}
          • Made by{' '}
          <a
            href="https://anhek.dev"
            className={linkStyle}
            target="_blank"
            rel="noreferrer"
          >
            Antonin Nhek
          </a>{' '}
          •{' '}
          <a
            href="https://github.com/anhek/frontendmentor-stats-preview-card-challenge"
            className={linkStyle}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );
};

PreviewCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PreviewCard.defaultProps = {
  children: PropTypes.node,
};

export default PreviewCard;
