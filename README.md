## Next.js Webpage Template

This is a basic, responsive frontend webpage template built with Next.js. It features two side panel ads, mobile responsiveness, and multiple pages. Use this template as a starting point for your own website or project.

### Features
- Responsive design for desktop and mobile
- Two customizable side panel ads
- Multiple pages (see `src/app`)
- Built with Next.js, React, and Tailwind CSS

### Getting Started
1. **Install dependencies:**
	```bash
	npm install
	```
2. **Run the development server:**
	```bash
	npm run dev
	```
3. **Build for production:**
	```bash
	npm run build
	```
4. **Start production server:**
	```bash
	npm run start
	```

### Customizing for Your Use Case
1. **Update site content:**
	- Edit or add pages in `src/app/` (e.g., `page.tsx`, `contact/page.tsx`, etc.)
	- Change main content, navigation, and footer as needed.

2. **Modify side panel ads:**
	- Update ad images, links, and styles in `src/app/adBannerLeft.tsx` and `src/app/adBannerRight.tsx`.
	- Replace ad assets in the `public/` folder.

3. **Change branding:**
	- Update project name in `package.json`.
	- Edit titles, logos, and theme in layout and header components.

4. **Add or remove pages:**
	- Create new folders/files in `src/app/` for additional pages.
	- Remove unused pages as needed.

5. **Customize styles:**
	- Edit `src/app/globals.css` or use Tailwind classes for custom styling.

### License
This template is free to use and modify for your own projects.
