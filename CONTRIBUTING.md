# Contributing to Bruce Trades Landing Page

## 🚀 Development Workflow

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/RandevBang/bruce-landing-page.git
   cd bruce-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**
   - Follow existing code patterns
   - Use TypeScript for type safety
   - Follow component-based architecture
   - Test changes on both desktop and mobile

3. **Test your changes**
   ```bash
   npm run build    # Ensure build passes
   npm run lint     # Check for linting errors
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature" 
   # or
   git commit -m "fix: resolve button styling issue"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to GitHub and create a PR from your branch to `main`
   - Fill out the PR template completely
   - Request review from team members

### Branch Naming Convention

- **Features**: `feature/description` (e.g., `feature/testimonials-section`)
- **Bug fixes**: `fix/description` (e.g., `fix/mobile-navigation`)
- **Documentation**: `docs/description` (e.g., `docs/setup-guide`)
- **Styling**: `style/description` (e.g., `style/button-colors`)

### Commit Message Convention

- `feat:` for new features
- `fix:` for bug fixes  
- `docs:` for documentation changes
- `style:` for styling/UI changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

### Code Standards

- **TypeScript**: Use strict typing
- **Components**: Keep components small and focused
- **Styling**: Use Tailwind CSS classes
- **Responsive**: Mobile-first design approach
- **Accessibility**: Follow WCAG guidelines

### Review Process

1. **PR Requirements**:
   - ✅ All checks must pass
   - ✅ At least 1 approval required
   - ✅ Branch must be up to date with main

2. **What reviewers check**:
   - Code quality and standards
   - Mobile responsiveness
   - Performance impact
   - Security considerations
   - UI/UX consistency

### Deployment

- **Automatic**: Merging to `main` triggers production deployment
- **Preview**: Each PR gets a preview deployment link
- **Rollback**: Available if issues are found

### Getting Help

- Check existing issues and PRs first
- Create an issue for bugs or feature requests
- Ask questions in PR comments
- Review this documentation regularly

## 📝 Project Structure

```
src/
├── app/                    # Next.js app router
├── components/
│   ├── sections/           # Page sections (Hero, Footer, etc.)
│   └── ui/                 # Reusable UI components
└── lib/                    # Utility functions

.github/                    # GitHub templates and workflows
docs/                       # Documentation
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Current Priorities

- Mobile optimization
- Performance improvements
- SEO enhancements
- A/B testing setup
- Analytics integration