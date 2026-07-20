### Deployment

This guide explains how to push your changes live to the internet.

When you push code to GitHub, GitHub Actions automatically detects the change and deploys the new version of your website.

## Step-by-Step Deployment

### Step 1: Save Your Changes Locally

Make sure your changes work on `http://localhost:5173/`

### Step 2: Commit Your Changes

In your terminal (inside the project folder):

```bash
# See what files changed
git status

# Add all changed files
git add .

# Or add specific files:
git add src/pages/Partners.tsx
git add public/images/new-logo.png

# Commit with a descriptive message
git commit -m "Update partners page with new logo and text"

### Step 3:  Push to GitHub

```bash
git push origin main
```

### Step 4:  Watch the Deployment

1. Go to your GitHub repository
2. Look for a yellow dot or checkmark next to your commit
3. Click the "Actions" tab to see deployment progress.  

After 1-3 minutes, you can visit the site at [FIU Tech Internships] (https://fiu-tech-internships.vercel.app/). 
> **Note:** Change the link here after the project is moved to a different GitHub Owner

NB: Clear your browser cache if you don't see the changes.

### Common Deployment Errors

| Error in Logs | Likely Problem | Solution |
|----------|--------------| --------------|
| Module not found | Missing import or file | Check your import paths |
| TypeError: Cannot read property... | Something is undefined | Check your component code |
| Build failed | Syntax error | Check terminal when running `npm run build` locally |

### Testing Build Locally Before Pushing

To catch errors before they go live:
``` bash 
# Build the site locally
npm run build

# Preview the built site
npm run preview
```
If the build succeeds, deployment will likely succeed.

### Undoing a Bad Deployment

## Option 1: Revert on GitHub

```bash 
# Find the bad commit
git log --oneline

# Revert it (creates a new commit that undoes changes)
git revert <commit-hash>

# Push the revert
git push origin main
```
