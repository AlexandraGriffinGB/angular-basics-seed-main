# Angular Basics Seed - Ultimate Donuts

Angular Basics v15 seed project for the Ultimate Courses Angular Basics course. This is a "Ultimate Donuts" web application built with Angular 15, displaying a catalog of donuts with prices and promotional badges.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Prerequisites and Environment Setup
- Ensure Node.js v20+ and npm v10+ are available (verified working versions: Node.js v20.19.5, npm 10.8.2)
- Angular CLI 15.0.5 is available via npx (do not install globally)
- No additional SDK installations required

### Bootstrap the Project
- `npm install` -- takes ~40 seconds. NEVER CANCEL. Set timeout to 120+ seconds for safety.
- Verify installation succeeded before proceeding

### Development Build and Serve
- ALWAYS run npm install first if node_modules is missing
- Development build: `npx ng build --configuration development` -- takes ~10 seconds
- Development server: `npx ng serve --host 0.0.0.0` -- starts in ~8 seconds, serves on http://localhost:4200
- **CRITICAL**: Production build (`npx ng build`) FAILS due to Google Fonts network restrictions. Always use development builds and development server.

### Testing
- Unit tests are DISABLED in this project (angular.json has `skipTests: true`)
- `npx ng test` will fail with compilation errors - this is expected
- No test files exist in the project by design
- Do NOT attempt to run unit tests or add testing infrastructure

### Additional Services
- JSON server (optional): `npm run db` -- starts json-server on port 3000 with 1000ms delay
- The main application currently uses hardcoded data and does not require the JSON server
- JSON server serves empty db.json file and is available for development purposes

## Validation Scenarios

### ALWAYS Test After Changes
1. **Build validation**: Run `npx ng build --configuration development` and verify it completes successfully in ~10 seconds
2. **Application validation**: 
   - Start dev server with `npx ng serve --host 0.0.0.0`
   - Navigate to http://localhost:4200
   - Verify the "Ultimate Donuts" application loads correctly
   - Confirm donut catalog displays with 5 donuts: Just Chocolate (Limited), Glazed Fudge (New), Caramel Swirl, Sour Supreme, and Zesty Lemon
   - Check that prices display correctly (€1.19, €1.29, €1.19, €1.39, €1.69)
   - Verify promotional badges show (LIMITED, NEW)

### Build Time Expectations
- `npm install`: ~40 seconds - NEVER CANCEL, set 120+ second timeout
- Development build: ~10 seconds - set 60+ second timeout for safety
- Development server startup: ~8 seconds - set 30+ second timeout
- **WARNING**: Production builds FAIL due to network restrictions accessing Google Fonts. Do NOT attempt production builds.

## Project Structure and Navigation

### Key Directories
```
src/
├── app/
│   ├── admin/
│   │   ├── components/donut-card/     # Presentational donut display component
│   │   ├── containers/donut-list/     # Smart component with hardcoded donut data
│   │   └── models/donut.model.ts      # TypeScript interface for donut data
│   ├── app.component.*                # Root application component
│   └── app.module.ts                  # Main application module
├── assets/                            # Static assets (images, icons)
├── environments/                      # Environment configurations
└── styles.scss                       # Global SCSS styles
```

### Important Files to Check When Making Changes
- **donut-list.component.ts**: Contains hardcoded donut data array
- **donut.model.ts**: TypeScript interface defining donut structure
- **app.module.ts**: Main module imports and declarations
- **angular.json**: Build and serve configurations (NOTE: has skipTests: true)
- **proxy.conf.json**: Proxy configuration for /api/* routes to localhost:3000

### Architecture Notes
- Uses component architecture with smart (containers) and dumb (components) pattern
- AdminModule contains all donut-related components
- No external API calls in current implementation
- Uses SCSS for styling with global styles in styles.scss
- Inline templates and styles enabled for new components (see angular.json schematics)

## Known Issues and Limitations

### Build Limitations
- **CRITICAL**: Production builds fail due to Google Fonts network access (src/index.html contains https://fonts.googleapis.com/css2 link)
- Always use development builds and development server
- Node.js v20.19.5 shows as "unsupported" by Angular CLI but works correctly

### Testing Limitations
- No linting configuration present (ESLint not configured)
- No unit tests exist (skipTests: true in angular.json)
- Do NOT run `npx ng test` as it will fail
- Do NOT run `npx ng lint` as no linting is configured

### Network Dependencies
- Google Fonts loaded from CDN in index.html may cause issues in restricted environments
- Application functions correctly even if fonts fail to load

## Common Commands Reference

### Repository Root Structure
```
.browserslistrc       # Browser compatibility config
.editorconfig         # Editor configuration
angular.json         # Angular workspace config
db.json             # Empty JSON server database
karma.conf.js       # Karma test runner config (unused)
package.json        # NPM dependencies and scripts
proxy.conf.json     # Development proxy configuration
src/                # Application source code
tsconfig.*.json     # TypeScript configurations
```

### Package.json Scripts
```json
{
  "start": "ng serve",           # Development server
  "build": "ng build",           # Production build (FAILS)
  "watch": "ng build --watch --configuration development",
  "test": "ng test",             # Unit tests (DISABLED)
  "db": "json-server --watch db.json --delay 1000"
}
```

### Development Workflow
1. Always run `npm install` first in fresh environments
2. Use `npx ng serve --host 0.0.0.0` for development
3. Make changes to components in src/app/admin/
4. Test changes by verifying the app displays correctly at http://localhost:4200
5. Use development builds only (`npx ng build --configuration development`)
6. Do NOT attempt production builds, unit tests, or linting

## Troubleshooting

### Common Issues
- **Build fails with font errors**: Use development build instead of production build
- **Tests fail to run**: Tests are disabled by design, this is expected
- **Lint command not found**: No linting configured, this is expected
- **Application doesn't load**: Ensure development server is running and check console for errors

### Performance Notes
- Development server has hot module replacement enabled
- Build times are fast (~10 seconds) for development configuration
- Application is lightweight with minimal dependencies