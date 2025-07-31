# Bruce Trades Landing Page - Deployment Setup

This document outlines the complete CI/CD pipeline setup for the Bruce Trades Insurance landing page project using GitHub and Vercel with proper branch protection and pull request workflows.

## Project Overview

- **Project Name**: Bruce Trades Landing Page
- **Repository**: https://github.com/RandevBang/bruce-landing-page
- **Production URL**: https://bruce-insurance-trades-landing-page.vercel.app
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Font**: DM Sans (Google Fonts)

## Prerequisites

- GitHub account with access to RandevBang/bruce-landing-page
- Vercel account connected to the repository
- Node.js 18+ installed locally
- Git CLI installed locally
- Vercel CLI installed (`npm i -g vercel`)
- GitHub CLI installed and authenticated (`gh` command)

## 1. Repository Setup

### 1.1 Repository Structure (Already Complete)
```bash
# Repository already exists at:
git remote -v
# origin  https://github.com/RandevBang/bruce-landing-page.git

# Current structure:
bruce-landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── sections/
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── BusinessLogos.tsx
│       │   ├── WhyChooseUs.tsx
│       │   ├── ProcessSection.tsx
│       │   ├── InsuranceTypes.tsx
│       │   ├── TrustedByTradies.tsx
│       │   ├── CTASection.tsx
│       │   ├── Testimonials.tsx
│       │   ├── RiskCoverage.tsx
│       │   ├── FAQ.tsx
│       │   └── Footer.tsx
│       └── ui/
│           └── button.tsx
├── public/
│   ├── favicon.webp
│   └── images/
├── .github/
│   └── pull_request_template.md
├── CONTRIBUTING.md
└── deployment-setup.md
```

### 1.2 Create Essential Files

#### `.gitignore`
```
# Dependencies
node_modules/
npm-debug.log*

# Production builds
.next/
out/
dist/
build/

# Environment variables
.env
.env.local
.env.production

# Vercel
.vercel

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

#### `.gitattributes`
```
# Set default behavior for line endings
* text=auto

# Ensure shell scripts use LF
*.sh text eol=lf

# Ensure batch files use CRLF
*.bat text eol=crlf

# Binary files
*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
*.ico binary
*.pdf binary
```

## 2. Vercel Setup (Already Complete)

### 2.1 Current Vercel Configuration
- **Project Name**: `bruce-insurance-trades-landing-page`
- **Production URL**: https://bruce-insurance-trades-landing-page.vercel.app
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node.js Version**: 18.x

### 2.2 Deployment Settings
```bash
# Current deployment configuration:
# - Automatic deployments from main branch
# - Preview deployments for all pull requests
# - Branch deployments disabled
```

### 2.3 Environment Variables
Currently configured in Vercel dashboard:
- **Google Tag Manager**: GTM-5K6Z3Z7 (embedded in layout.tsx)
- **No additional environment variables required** for current functionality

### 2.4 Domain Configuration
- **Primary Domain**: bruce-insurance-trades-landing-page.vercel.app
- **Preview URLs**: bruce-insurance-trades-landing-page-git-[branch]-randevbang.vercel.app
- **Custom Domain**: Not configured (can be added later if needed)

## 3. GitHub Authentication Setup

### 3.1 Authenticate GitHub CLI
```bash
# Login to GitHub CLI
gh auth login

# Select: GitHub.com > HTTPS > Login with browser
# Complete authentication in browser
```

### 3.2 Verify Authentication
```bash
# Test GitHub CLI
gh repo list
gh pr list
```

## 4. Branch Protection Setup

### 4.1 Current Branch Protection Rules
```bash
# Branch protection already configured for RandevBang/bruce-landing-page
# Current settings for main branch:
gh api repos/RandevBang/bruce-landing-page/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":[]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
  --field restrictions=null
```

### 4.2 Alternative: Via GitHub Web Interface
1. Go to GitHub repository → Settings → Branches
2. Click "Add rule" for main branch
3. Configure:
   - ✅ Require pull request reviews before merging
   - ✅ Require approvals: 1
   - ✅ Dismiss stale reviews when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

## 5. Pull Request Templates

### 5.1 Create PR Template Directory
```bash
mkdir -p .github
```

### 5.2 Create Pull Request Template
**File: `.github/pull_request_template.md`**
```markdown
## Summary
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Refactoring (no functional changes)
- [ ] Performance improvement
- [ ] Dependency update

## Testing
- [ ] Code builds without errors
- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Manual testing completed
- [ ] Cross-browser testing (if applicable)
- [ ] Mobile responsiveness tested (if applicable)

## Deployment Notes
- [ ] Environment variables updated (if needed)
- [ ] Database migrations required (if applicable)
- [ ] External service dependencies (if applicable)

## Screenshots (if applicable)
<!-- Add screenshots for UI changes -->

## Additional Notes
<!-- Any additional information or context -->

## Checklist
- [ ] Self-review completed
- [ ] Code follows project style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated (if needed)
- [ ] Related issues linked
```

## 6. Development Workflow

### 6.1 Current Workflow Process (In Use)
```bash
# 1. Start from main branch
git checkout main
git pull origin main

# 2. Create feature branch (examples from project history)
git checkout -b feature/brand-colors-implementation
git checkout -b feature/gtm-integration
# or for fixes: git checkout -b fix/scroll-anchor-issue

# 3. Make changes and commit (actual example)
git add .
git commit -m "feat: Add Google Tag Manager integration (#4)

- Add GTM script to head section for tracking
- Add GTM noscript fallback for users with JavaScript disabled
- Use container ID GTM-5K6Z3Z7 as specified
- Implement using Next.js best practices with dangerouslySetInnerHTML

Closes #4

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# 4. Push branch
git push -u origin feature/gtm-integration

# 5. Create pull request (actual example)
gh pr create --title "feat: Add Google Tag Manager integration" --body "$(cat <<'EOF'
## Summary
- Add GTM script to head section with container ID GTM-5K6Z3Z7
- Add GTM noscript fallback for users with JavaScript disabled
- Implement using Next.js best practices with dangerouslySetInnerHTML

Closes #4

## Test plan
- [ ] Verify GTM script loads correctly in browser dev tools
- [ ] Check that GTM container ID GTM-5K6Z3Z7 is active
- [ ] Test noscript fallback functionality
- [ ] Confirm no console errors or warnings

🤖 Generated with [Claude Code](https://claude.ai/code)
EOF
)"
```

### 6.2 Branch Naming Conventions
- **Features**: `feature/description` or `feature/issue-123-description`
- **Bug fixes**: `fix/bug-description` or `fix/issue-123-description`
- **Hotfixes**: `hotfix/critical-fix`
- **Documentation**: `docs/update-readme`
- **Refactoring**: `refactor/component-cleanup`

### 6.3 Commit Message Format
```
type: short description

Detailed description of changes made.
Include context and reasoning.

- List specific changes
- Note any breaking changes
- Reference related issues

Closes #123
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 7. Vercel Integration Features

### 7.1 Automatic Deployments
- **Production**: All pushes to `main` branch
- **Preview**: All pull requests get preview deployments
- **Branch**: All pushes to branches (optional)

### 7.2 Preview Deployment Benefits
- Unique URL for each PR: `https://bruce-insurance-trades-landing-page-git-[branch]-randevbang.vercel.app`
- Automatic updates on new commits
- Share with stakeholders for review
- Test before merging to production
- Example: `https://bruce-insurance-trades-landing-page-git-feature-gtm-integration-randevbang.vercel.app`

### 7.3 Current Project Configuration
```javascript
// next.config.js (current)
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js configuration
  // No custom environment variables currently needed
  // GTM integration handled in layout.tsx
}

module.exports = nextConfig
```

**Key Project Features:**
- **DM Sans Font Integration**: Google Fonts with variable font support
- **Tailwind CSS**: Custom Bruce brand colors configured
- **shadcn/ui Components**: Button component with custom styling
- **Image Optimization**: Next.js Image component for all assets
- **Responsive Design**: Mobile-first approach throughout
- **SEO Optimized**: Meta tags and favicon configured

## 8. Quality Assurance Workflow

### 8.1 Code Review Process
1. **Developer** creates pull request
2. **Reviewer** checks:
   - Code quality and standards
   - Tests pass
   - Preview deployment works
   - Documentation updated
3. **Approval** required before merge
4. **Merge** triggers production deployment

### 8.2 Testing Checklist
- [ ] Build completes successfully
- [ ] No console errors or warnings
- [ ] Functionality works as expected
- [ ] Responsive design maintained
- [ ] Performance not degraded
- [ ] SEO considerations addressed

## 9. Deployment Monitoring

### 9.1 Vercel Dashboard Monitoring
- Real-time deployment status
- Build logs and error tracking
- Performance analytics
- Domain management

### 9.2 Post-Deployment Verification
```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs bruce-insurance-trades-landing-page.vercel.app

# Test production deployment
curl -I https://bruce-insurance-trades-landing-page.vercel.app

# Check specific functionality
curl -s https://bruce-insurance-trades-landing-page.vercel.app | grep -i "bruce trades insurance"
```

## 10. Troubleshooting Common Issues

### 10.1 Build Failures
```bash
# Check build logs in Vercel dashboard
# Common issues:
# - Missing dependencies in package.json
# - Environment variables not set
# - Build command incorrect
# - Node.js version mismatch

# Test build locally
npm run build
```

### 10.2 Git Authentication Issues
```bash
# Re-authenticate GitHub CLI
gh auth logout
gh auth login

# Check authentication status
gh auth status
```

### 10.3 Branch Protection Bypass
```bash
# If you need to push directly to main (emergency only)
git push origin main --force-with-lease

# Better: Create hotfix branch and emergency PR
git checkout -b hotfix/emergency-fix
git push -u origin hotfix/emergency-fix
gh pr create --title "hotfix: emergency fix" --body "Critical issue fix"
```

## 11. GitHub Actions CI/CD Setup (Implemented)

### 11.1 Current Deployment Method
This project now uses **GitHub Actions + Vercel CLI** for deployment instead of Vercel's Git integration to avoid team member permission issues on free plans.

**Workflow files created:**
- `.github/workflows/deploy.yml` - Automated deployment on push to main branch

**GitHub Secrets configured:**
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Organization ID for Bruce Trades account  
- `VERCEL_PROJECT_ID` - Project ID for deployment targeting

**Vercel settings configured:**
- Ignored build step: `echo "Deployment handled by GitHub Actions" && exit 1`
- Git status checks disabled to prevent red X commits

### 11.2 Team Member Access
Other developers can now:
- Push to branches (creates preview deployments)
- Create PRs to main branch (triggers production deployment)
- No Vercel account access required - authentication handled by GitHub Secrets

## 12. Advanced Configuration

### 12.1 Custom Domains
1. Vercel Dashboard → Project → Settings → Domains
2. Add custom domain
3. Configure DNS settings as instructed
4. SSL certificates automatically provisioned

### 11.2 Serverless Functions (if needed in future)
```javascript
// api/contact.js (example for future contact form)
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle contact form submission
    res.status(200).json({ message: 'Contact form submitted successfully' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
```

### 11.3 Environment-Specific Deployments
```bash
# Deploy to specific environment
vercel --prod  # Production
vercel         # Preview
```

## 12. Security Best Practices

### 12.1 Environment Variables
- Never commit sensitive data
- Use Vercel's environment variable management
- Different values for development/preview/production

### 12.2 Access Control
- Limit repository access to necessary team members
- Use branch protection rules
- Require signed commits (optional)

```bash
# Enable signed commits
git config --global commit.gpgsign true
```

## 13. Team Collaboration

### 13.1 Adding Team Members
1. **GitHub**: Repository → Settings → Manage access
2. **Vercel**: Project → Settings → Team members

### 13.2 Permissions
- **Developers**: Read/Write access to repository
- **Reviewers**: Required for PR approvals
- **Maintainers**: Admin access for emergency situations

## 14. Backup and Recovery

### 14.1 Repository Backup
```bash
# Clone with full history
git clone --mirror https://github.com/RandevBang/bruce-landing-page.git

# Regular backups via GitHub's export feature
# Go to: https://github.com/RandevBang/bruce-landing-page/settings
# Settings → General → Export repository
```

### 14.2 Deployment Rollback
```bash
# Via Vercel CLI
vercel rollback [deployment-url]

# Via Vercel Dashboard
# Deployments → Previous deployment → Promote to Production
```

## Conclusion

This setup provides:
- ✅ Automated deployments on every merge
- ✅ Preview deployments for all pull requests  
- ✅ Branch protection requiring code review
- ✅ Proper Git workflow with issue tracking
- ✅ Quality assurance through testing
- ✅ Easy rollback and monitoring capabilities

The pipeline ensures code quality, enables team collaboration, and provides reliable deployment automation for any Vercel-compatible project.

---

**Next Steps After Setup:**
1. ✅ Complete workflow tested with GTM integration PR (#5)
2. ✅ Environment variables configured (GTM-5K6Z3Z7 embedded in layout.tsx)
3. Set up additional monitoring and analytics if needed
4. ✅ Project-specific deployment requirements documented
5. Train additional team members on the workflow process if expanding team