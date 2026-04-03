const platformLinks = [
  { name: "Sentinel AppSec", url: "https://sentinel.ipptt.com" },
  { name: "IPPTT App", url: "https://app.ipptt.com" },
  { name: "Meeting Pipeline", url: "https://meeting.ipptt.com" },
  { name: "BTC DCA Engine", url: "https://dca.ipptt.com" },
  { name: "Air & Maritime", url: "https://airsea.ipptt.com" },
];

const companyLinks = [
  { name: "About", url: "#" },
  { name: "Careers", url: "#" },
  { name: "Contact", url: "#" },
  { name: "Documentation", url: "#" },
];

const legalLinks = [
  { name: "Privacy Policy", url: "#" },
  { name: "Terms of Service", url: "#" },
  { name: "Security", url: "#" },
  { name: "Compliance", url: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-slate-50">
                HAO<span className="text-cyan-400">COM</span>CLOUD
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              AI-powered platform infrastructure. Building the next generation of
              enterprise applications.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-600">
                All systems operational
              </span>
            </div>
          </div>

          {/* Platforms Column */}
          <nav aria-label="Platform links">
            <h4 className="text-xs font-semibold tracking-wider text-slate-400 mb-4">
              PLATFORMS
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Column */}
          <nav aria-label="Company links">
            <h4 className="text-xs font-semibold tracking-wider text-slate-400 mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Column */}
          <nav aria-label="Legal links">
            <h4 className="text-xs font-semibold tracking-wider text-slate-400 mb-4">
              LEGAL
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} Haocomcloud. All rights reserved.
          </p>
          <p className="text-xs text-slate-700 font-mono">v2.4.1</p>
        </div>
      </div>
    </footer>
  );
}
