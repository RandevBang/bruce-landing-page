# Deployment Setup Guide: Bruce Trades Landing Page

This guide provides step-by-step instructions for the Bruce Trades Insurance landing page deployment using GitHub Actions and Vercel CI/CD pipeline.

## Quick Setup Summary (For Future Reference)

**Method**: GitHub Actions + Direct Vercel CLI Deployment

**Required Setup:**
1. **Vercel Project**: Create project on appropriate Vercel account
2. **GitHub Secrets**: Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
3. **GitHub Action**: Deploy `.github/workflows/deploy.yml` 
4. **Vercel Settings**: Connect Git repo + set ignored build step to prevent auto-deploy
5. **Result**: Automatic deployment on every push to main, no permission issues

**Why This Method:**
- ✅ Works with Vercel free plan (no team member limits)
- ✅ No Git author permission conflicts  
- ✅ Any developer can push and deploy
- ✅ Single clean deployment per push

## Project Information

- **Project Name**: Bruce Trades Landing Page
- **Repository**: https://github.com/RandevBang/bruce-landing-page
- **Vercel Project ID**: `prj_vXYmWXf7fm6roroelzepehYtbZjZ`
- **Vercel Org ID**: `team_Xw7kTRMPtagdeKERsjjQSF5V`
- **Production URL**: https://bruce-insurance-trades-landing-page.vercel.app
- **Technology Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Package Manager**: npm
- **Font**: DM Sans (Google Fonts)
- **GTM ID**: GTM-5K6Z3Z7

## Prerequisites ✅ COMPLETED

- ✅ GitHub account with repository access
- ✅ Vercel account with project created
- ✅ Next.js project ready for deployment
- ✅ Git CLI installed locally
- ✅ Vercel CLI installed (`npm i -g vercel`)
- ✅ GitHub CLI installed (`gh` command)
- ✅ Vercel access token created

## 1. Repository Setup

### 1.1 Repository Structure ✅ COMPLETED
```bash
# Repository already exists and configured
git remote -v
# origin  https://github.com/RandevBang/bruce-landing-page.git (fetch)
# origin  https://github.com/RandevBang/bruce-landing-page.git (push)

# Main branch is active
git branch
# * main

# Project structure:
bruce-landing-page/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml            # GitHub Actions deployment workflow
│   └── pull_request_template.md  # PR template
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx            # Contains GTM integration
│   │   └── page.tsx
│   └── components/
│       ├── sections/
│       │   ├── Header.tsx        # Sticky header
│       │   ├── Hero.tsx          # Hero with iframe form
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
│       ├── logos/
│       ├── process/
│       └── testimonials/
├── CONTRIBUTING.md
├── deployment-setup.md
└── package.json
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

## 2. Vercel Setup ✅ COMPLETED

### 2.1 Project Configuration ✅ COMPLETED
- **Project Name**: `bruce-insurance-trades-landing-page`
- **Project ID**: `prj_vXYmWXf7fm6roroelzepehYtbZjZ`
- **Organization ID**: `team_Xw7kTRMPtagdeKERsjjQSF5V`
- **Framework Preset**: Next.js (Auto-detected)
- **Root Directory**: `./`
- **Build Command**: `npm run build` (Auto-detected)
- **Output Directory**: `.next` (Auto-detected)
- **Node.js Version**: 18.x

### 2.2 Deployment Method: GitHub Actions + Vercel CLI ✅ ACTIVE

**Issue**: Direct Git integration fails due to "Git author must have access" errors on Vercel free plan.
**Solution**: GitHub Actions builds and deploys directly using Vercel CLI.

#### Final Working Configuration

**GitHub Secrets Required** (Repository Settings → Secrets and Variables → Actions):

**Location**: https://github.com/RandevBang/bruce-landing-page/settings/secrets/actions

**Required Secrets**:
1. **VERCEL_TOKEN**: Your Vercel access token from https://vercel.com/account/tokens
2. **VERCEL_ORG_ID**: `team_Xw7kTRMPtagdeKERsjjQSF5V` 
3. **VERCEL_PROJECT_ID**: `prj_vXYmWXf7fm6roroelzepehYtbZjZ`

**GitHub Action** (`.github/workflows/deploy.yml`):
- Triggers on every push to main branch
- Builds project using npm in GitHub Actions environment  
- Deploys directly to Vercel using CLI with authentication token
- Bypasses all Git author permission issues

#### How It Works
1. **Push to GitHub main branch** → Triggers GitHub Action
2. **GitHub Action runs** → Sets up Node.js and Vercel CLI
3. **Builds project** → `vercel build --prod` in GitHub environment
4. **Deploys directly** → `vercel deploy --prebuilt --prod` using token
5. **Deployment completes** → Site updated automatically

#### Vercel Configuration Required

**Location**: https://vercel.com/[your-account]/bruce-insurance-trades-landing-page/settings/git

**Settings Applied**:
- **Git Repository**: ✅ Connected to `RandevBang/bruce-landing-page`
- **Ignored Build Step**: ✅ `echo "Deployment handled by GitHub Actions" && exit 1`
- **Production Branch**: ✅ Set to `main`
- **Auto-deploy**: ✅ Disabled via ignored build step

#### Manual Deployment (Backup Method)
```bash
# If needed, manual deployment via CLI
vercel --prod --token YOUR_VERCEL_TOKEN
```

### 2.3 Configure Environment Variables 
**Status**: No environment variables currently required for this project.

**Current Configuration**:
- Project uses static configuration in `next.config.js`
- No external APIs or databases requiring environment variables
- Google Tag Manager ID (`GTM-5K6Z3Z7`) is embedded in `layout.tsx`
- All configuration is build-time static

**Future Environment Variables** (if needed):
1. **Location**: https://vercel.com/[your-account]/bruce-insurance-trades-landing-page/settings/environment-variables
2. Potential variables:
   - `NEXT_PUBLIC_GTM_ID=GTM-5K6Z3Z7` (for different GTM containers per environment)
   - `NEXT_PUBLIC_SITE_URL=https://bruce-insurance-trades-landing-page.vercel.app` (for canonical URLs)
   - Any future API integrations

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

## 4. Branch Protection Setup ✅ CONFIGURED

### 4.1 Configure Branch Protection Rules
```bash
# Create branch protection rule for main branch
gh api repos/RandevBang/bruce-landing-page/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["deploy"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
  --field restrictions=null
```

### 4.2 Alternative: Via GitHub Web Interface
1. Go to https://github.com/RandevBang/bruce-landing-page/settings/branches
2. Click "Add rule" for main branch
3. Configure:
   - ✅ Require pull request reviews before merging
   - ✅ Require approvals: 1
   - ✅ Dismiss stale reviews when new commits are pushed
   - ✅ Require status checks to pass before merging (select "deploy")
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

## 5. Pull Request Templates ✅ CREATED

### 5.1 Pull Request Template
**File: `.github/pull_request_template.md`**
```markdown
# Pull Request Template

## 📋 Description
Brief description of changes made in this PR.

## 🚀 Type of Change
- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update
- [ ] 🎨 Style/UI changes
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvements

## 🧪 Testing
- [ ] I have tested my changes locally
- [ ] The build passes (`npm run build`)
- [ ] The site displays correctly on desktop
- [ ] The site displays correctly on mobile
- [ ] The quote form loads and functions properly

## 📸 Screenshots (if applicable)
Attach screenshots of UI changes

## 🔗 Related Issues
Closes #(issue number)

## 📝 Additional Notes
Any additional information for reviewers

## ✅ Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
```

## 6. Development Workflow

### 6.1 Standard Workflow Process
```bash
# 1. Start from main branch
git checkout main
git pull origin main

# 2. Create feature branch (use meaningful names)
git checkout -b feature/your-feature-name
# Examples for this project:
# git checkout -b feature/new-insurance-type
# git checkout -b fix/mobile-form-issue
# git checkout -b feature/testimonials-update

# 3. Make changes and commit (follow conventional commits)
git add .
git commit -m "feat: add new insurance type section

- Add commercial insurance option
- Update form to include new type
- Add relevant icons and content

Closes #123"

# 4. Push branch
git push -u origin feature/your-feature-name

# 5. Create pull request
gh pr create --title "feat: add new insurance type section" --body "Description of changes"

# 6. After approval and merge, clean up
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

### 6.2 Branch Naming Conventions (Project-Specific Examples)
- **Features**: 
  - `feature/gtm-integration`
  - `feature/new-testimonials`
  - `feature/contact-form`
  - `feature/seo-optimization`
- **Bug fixes**: 
  - `fix/sticky-header-scroll`
  - `fix/iframe-loading-issue`
  - `fix/mobile-responsive`
- **Content Updates**:
  - `content/update-insurance-types`
  - `content/add-testimonials`
  - `content/faq-updates`
- **Documentation**: 
  - `docs/deployment-setup-documentation`
  - `docs/update-readme`

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

**Examples from this project**:
- `feat: Add Google Tag Manager integration (#4)`
- `docs: Add comprehensive deployment setup documentation`
- `fix: Resolve sticky header scrolling issue`

## 7. Deployment Pipeline ✅ FULLY OPERATIONAL

### 7.1 GitHub Actions + Direct Vercel CLI Deployment
- **Trigger**: All pushes to `main` branch
- **Method**: GitHub Actions builds and deploys using Vercel CLI
- **Authentication**: Uses GitHub Secrets with Vercel token
- **Result**: Direct deployment to production, bypassing Git integration issues

### 7.2 Complete Deployment Flow
1. **Developer pushes to main** → GitHub receives commit
2. **GitHub Action triggers** (`.github/workflows/deploy.yml`)
3. **Environment setup** → Node.js and Vercel CLI installed
4. **Install dependencies** → `npm ci` runs
5. **Project build** → `vercel build --prod` using project configuration
6. **Direct deployment** → `vercel deploy --prebuilt --prod` using authentication token
7. **Site updated** → New production deployment live

### 7.3 Key Advantages of Current Setup
- ✅ **No Git author permission issues** - Uses token authentication directly
- ✅ **Works with any GitHub account** - No cross-account permission dependencies
- ✅ **Single deployment per push** - No duplicates or failed attempts
- ✅ **Build artifacts controlled** - Built in GitHub Actions environment
- ✅ **Full deployment control** - Via GitHub Actions logs and Vercel dashboard

### 7.4 Current Project Configuration
```javascript
// next.config.js (current configuration)
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
```

**Build Settings**:
- ESLint errors ignored during builds
- TypeScript errors ignored during builds
- Default Next.js 15 optimizations active

## 8. Quality Assurance Workflow

### 8.1 Code Review Process
1. **Developer** creates pull request
2. **Reviewer** checks:
   - Code quality and standards
   - Tests pass
   - Preview deployment works
   - Documentation updated
3. **Approval** required before merge (1 reviewer minimum)
4. **Merge** triggers production deployment via GitHub Actions

### 8.2 Testing Checklist (Project-Specific)
**Build & Technical**:
- [ ] `npm run build` completes successfully
- [ ] No console errors or warnings
- [ ] TypeScript compilation passes (if enabled)

**Functionality**:
- [ ] Sticky header works correctly
- [ ] Iframe form loads and functions
- [ ] All CTA buttons link to form section
- [ ] Process section displays correctly
- [ ] Testimonials carousel works
- [ ] FAQ accordion functions

**Design & Responsiveness**:
- [ ] Mobile responsive design (375px to 1920px)
- [ ] DM Sans font loads correctly
- [ ] Bruce brand colors consistent (#131A46 primary, #F47850 secondary)
- [ ] All images display properly

**Performance & SEO**:
- [ ] Page load speed acceptable (<3s)
- [ ] Google Tag Manager fires correctly (GTM-5K6Z3Z7)
- [ ] Meta tags present
- [ ] Favicon displays

## 9. Deployment Monitoring

### 9.1 Vercel Dashboard Monitoring ✅ ACTIVE
**Dashboard URL**: https://vercel.com/[your-account]/bruce-insurance-trades-landing-page

**Available Monitoring**:
- Real-time deployment status
- Build logs and error tracking
- Performance analytics (Web Vitals)
- Domain management
- Usage and bandwidth tracking

### 9.2 GitHub Actions Monitoring
**Actions URL**: https://github.com/RandevBang/bruce-landing-page/actions

**Available Information**:
- Workflow run status
- Build logs and errors
- Deployment timing
- Historical runs

### 9.3 Post-Deployment Verification
```bash
# Check deployment status
vercel ls --token YOUR_TOKEN

# View deployment logs
vercel logs bruce-insurance-trades-landing-page.vercel.app --token YOUR_TOKEN

# Test production deployment
curl -I https://bruce-insurance-trades-landing-page.vercel.app

# Check specific functionality
curl -s https://bruce-insurance-trades-landing-page.vercel.app | grep -i "bruce trades insurance"

# Quick local development test
npm run dev
# Opens localhost:3000
```

## 10. Troubleshooting Common Issues

### 10.1 Build Failures (Project-Specific Solutions)
```bash
# Test build locally with exact production setup
npm run build

# Common issues for this project:
# - Missing dependencies (run npm install)
# - Image path issues (check public/images/ paths)
# - TypeScript errors (currently ignored in next.config.js)

# Debug GitHub Actions build issues
# Check: https://github.com/RandevBang/bruce-landing-page/actions
# Look for specific error messages in workflow logs

# Check for missing dependencies
npm install

# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 10.2 GitHub Actions Deployment Issues
```bash
# Check GitHub Secrets are set correctly:
# Go to: https://github.com/RandevBang/bruce-landing-page/settings/secrets/actions
# Required: VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID

# Verify token has correct permissions:
vercel whoami --token YOUR_TOKEN

# Check workflow file syntax:
# .github/workflows/deploy.yml should have correct YAML formatting

# Force re-run failed deployment:
# Go to: https://github.com/RandevBang/bruce-landing-page/actions
# Click failed workflow → Re-run jobs
```

### 10.3 Git Permission Issues (RESOLVED)
```bash
# Problem: "Git author RandevBang must have access to project on Vercel"
# Root Cause: Vercel free plan doesn't allow cross-account Git author permissions
# Solution: Direct CLI deployment bypasses Git integration entirely

# What was tried (didn't work):
# - Adding team members (requires paid plan)
# - Deploy hooks (still checked Git author permissions)
# - Changing Git author email (account didn't exist)

# Final working solution:
# - GitHub Actions builds project using npm
# - Vercel CLI deploys prebuilt artifacts using token
# - No Git integration permission checks
```

### 10.4 Iframe Form Not Loading
```bash
# If iframe form doesn't load, check:
# 1. Whitelist required domains with form provider
# 2. Vercel deployment domain: bruce-insurance-trades-landing-page.vercel.app
# 3. Any custom domains you add later
# 4. Check browser console for CORS or CSP errors
```

### 10.5 Branch Protection Bypass
```bash
# If you need to push directly to main (emergency only)
git push origin main --force-with-lease

# Better: Create hotfix branch and emergency PR
git checkout -b hotfix/emergency-fix
git push -u origin hotfix/emergency-fix
gh pr create --title "hotfix: emergency fix" --body "Critical issue fix"
```

## 11. Advanced Configuration

### 11.1 Custom Domains
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
2. **Vercel**: Project → Settings → Team members (requires paid plan for multiple members)

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
vercel rollback [deployment-url] --token YOUR_TOKEN

# Via Vercel Dashboard
# Deployments → Previous deployment → Promote to Production
```

## Current Status Summary

### ✅ COMPLETED TASKS
- [x] **Repository Setup**: GitHub repo configured with proper structure
- [x] **Vercel Project Created**: Project ID `prj_vXYmWXf7fm6roroelzepehYtbZjZ`
- [x] **GitHub Actions Deployment**: Direct CLI deployment method implemented
- [x] **Authentication**: GitHub Secrets configured with Vercel token and IDs
- [x] **Permission Issues Resolved**: No Git author conflicts using direct deployment
- [x] **Branch Protection**: Configured with 1 approval requirement
- [x] **PR Templates**: Created comprehensive pull request template
- [x] **GTM Integration**: Successfully integrated via proper Git workflow (PR #5)
- [x] **Documentation**: Complete deployment guide created

### 📊 CURRENT CONFIGURATION
- **Production URL**: https://bruce-insurance-trades-landing-page.vercel.app
- **Vercel Dashboard**: https://vercel.com/[your-account]/bruce-insurance-trades-landing-page
- **GitHub Repository**: https://github.com/RandevBang/bruce-landing-page
- **GitHub Actions**: https://github.com/RandevBang/bruce-landing-page/actions
- **Build Time**: ~30-40 seconds (GitHub Actions) + ~5-10 seconds (Vercel deploy)
- **Technology Stack**: Next.js 15 + React 19 + TypeScript + Tailwind CSS + shadcn/ui
- **Authentication Method**: Vercel CLI token via GitHub Secrets

### 🎯 DEPLOYMENT PIPELINE STATUS
This setup provides:
- ✅ **Automated deployments** via GitHub Actions + Direct Vercel CLI
- ✅ **Production deployment** active and working
- ✅ **No permission conflicts** using token-based authentication
- ✅ **Any developer can deploy** regardless of Vercel account ownership
- ✅ **Single clean deployment** per push (no duplicates or failures)
- ✅ **Branch protection** with code review requirement
- ✅ **Pull request workflow** with template and preview deployments
- ✅ **Cross-account compatibility** works with any GitHub user

**Current Method**: 
```
GitHub Push → GitHub Actions → Vercel CLI Build → Direct Deployment ✅
```

The deployment pipeline is **FULLY OPERATIONAL** with direct CLI deployment! 🚀

**No deploy hooks, no Git integration conflicts, no permission issues - just clean, reliable deployments every time.**

---

**Next Steps After Setup:**
1. ✅ Complete workflow tested with GTM integration PR (#5)
2. ✅ Environment variables configured (GTM-5K6Z3Z7 embedded in layout.tsx)
3. Monitor deployments via GitHub Actions and Vercel dashboard
4. ✅ Project-specific deployment requirements documented
5. Train additional team members on the workflow process if expanding team