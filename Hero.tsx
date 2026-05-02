export default function Navbar() {
  return (
    <nav
      className="relative z-10 w-full"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-0.5">
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.875rem',
              letterSpacing: '-0.02em',
              color: '#000000',
              lineHeight: 1,
            }}
          >
            Aethera
          </span>
          <sup
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              color: '#000000',
              lineHeight: 1,
            }}
          >
            ®
          </sup>
        </a>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', color: '#000000' },
            { label: 'Studio', color: '#6F6F6F' },
            { label: 'About', color: '#6F6F6F' },
            { label: 'Journal', color: '#6F6F6F' },
            { label: 'Reach Us', color: '#6F6F6F' },
          ].map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="text-sm transition-colors hover:text-black"
                style={{ color: item.color }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="text-sm px-6 py-2.5 rounded-full transition-transform hover:scale-[1.03]"
          style={{
            backgroundColor: '#000000',
            color: '#ffffff',
          }}
        >
          Begin Journey
        </button>
      </div>
    </nav>
  );
}
