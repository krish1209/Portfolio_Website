const bottomLinks = [
  {
    header: 'Social',
    links: [
      {
        name: 'Github',
        href: 'https://github.com/bettinasosa',
        isExternal: true
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/bettysrohl',
        isExternal: true
      }
      // {
      //   name: 'Instagram',
      //   href: 'https://instagram.com/',
      //   isExternal: true,
      // },
      // {
      //   name: 'Facebook',
      //   href: 'https://facebook.com/',
      //   isExternal: true,
      // },
    ]
  },
  {
    header: 'Links',
    links: [
      {
        name: 'Home',
        href: '/',
        isExternal: false
      },
      {
        name: 'About',
        href: '/about',
        isExternal: false
      },
      {
        name: 'Projects',
        href: '/projects',
        isExternal: false
      },
      {
        name: 'Contact',
        href: '/contact',
        isExternal: false
      }
    ]
  },
  {
    header: 'Extras',
    links: [
      // {
      //   name: 'Privacy',
      //   href: '/privacy',
      //   isExternal: false,
      // },
      {
        name: '404',
        href: '/404',
        isExternal: false
      },
      {
        name: 'Styleguide',
        href: '/styleguide',
        isExternal: false
      },
      {
        name: 'Privacy',
        href: '/privacy',
        isExternal: false
      }
    ]
  }
];

export default function Footer() {
  return (
    <footer
      className="h-full w-screen bg-black py-16 text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row">
          <div className="flex max-w-sm flex-col items-start gap-6 sm:gap-8">
            <img
              className="size-8 w-auto"
              src="/assets/logo.jpg"
              alt="Bettina Sosa"
            />
            <p className="text-primary-950/70 dark:text-primary-200/70 text-base">
              AI/LLM enthusiast | Cutting-edge tech advocate | Web3 builder |
              Passionate about using technology to make the world a better
              place.
            </p>
            <p className="text-primary-950/70 dark:text-primary-200/70 text-sm">
              © 2024 Bettina Sosa
            </p>
          </div>

          <div className="grid max-w-xl flex-1 grid-cols-3 gap-8">
            {bottomLinks.map((group) => (
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium">{group.header}</p>
                <ul role="list" className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li>
                      <a
                        href={link.href}
                        className="focus-visible:outline-primary-950 dark:focus-visible:outline-primary-200 inline-flex items-center gap-1 rounded-md text-base hover:underline focus-visible:outline focus-visible:outline-2"
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener' : undefined}
                      >
                        {link.name}
                        {link.isExternal && (
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
