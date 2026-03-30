# :dart: dc-farmer-hub

![Status](https://img.shields.io/badge/status-draft-orange?logo=statuspal)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rufer7/dc-farmer-hub/blob/main/LICENSE)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=bugs)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=rufer7_dc-farmer&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=rufer7_dc-farmer)

Hub of darts club `DC Farmer`.

A modern, responsive static website for results and statistics of our Steel Darts team, built with HTML, CSS, and JavaScript. Hosted on GitHub Pages.

> [!IMPORTANT]
> The new hub is currently under construction.

For preview, see [here](https://rufer7.github.io/dc-farmer-hub/)

## Key Features

- **Dark Theme Design**: Professional dark theme with accent color #45e783
- **Responsive Layout**: Mobile-first design supporting all devices (320px+)
- **Security**: Content Security Policy (CSP) headers, no inline scripts

## Technical Stack

- **HTML5, CSS3, Vanilla JavaScript** (no frameworks or build tools)
- **ECMAScript Modules** for clean, modular code
- **GitHub Pages** hosting with static file serving
- **Markdown support** for rich news articles

## Performance Targets

- Total initial JS: < 8KB
- Total CSS: < 50KB
- Largest Contentful Paint (LCP): < 3.0s on standard broadband

## Local Development

```bash
# Serve the site locally
python -m http.server 8080

# Or use VS Code Live Server
# Navigate to http://localhost:8080/public/
```

## Quality Checks

### Lighthouse Performance Testing

Run Lighthouse manually in Chrome DevTools:

1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"

**Performance Targets:**

- Performance Score: > 90
- Accessibility Score: > 90
- Best Practices Score: > 90
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Total Blocking Time (TBT): < 200ms

### Accessibility Testing with Pa11y

```bash
# Install Pa11y CLI
npm install -g pa11y-ci

# Start local server
python3 -m http.server 8080

# Run Pa11y tests
pa11y-ci --config tests/accessibility/pa11y.config.json
```
