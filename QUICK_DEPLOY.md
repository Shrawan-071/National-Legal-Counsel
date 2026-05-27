# ⚡ QUICK DEPLOYMENT REFERENCE (5-15 minutes)

## ONE-TIME SETUP

### Command 1: Test Everything Works Locally
```powershell
cd "c:\Users\ACER\Desktop\Raam Uncle\national legal consel - upto copilot"
npm install
npm run build
npm run preview
```
**✅ Check:** Visit http://localhost:4173 - everything should work

### Command 2: Initialize Git (if not already done)
```powershell
git init
git add .
git commit -m "Initial commit: National Legal Counsel website"
git branch -M main
```

### Command 3: Create GitHub Repo
1. Go to https://github.com/new
2. Repository name: `national-legal-counsel`
3. Make it **Public**
4. Click Create (don't add README)
5. Copy the URL it shows (format: `https://github.com/USERNAME/national-legal-counsel.git`)

### Command 4: Connect to GitHub
```powershell
# Replace USERNAME with your GitHub username
git remote add origin https://github.com/USERNAME/national-legal-counsel.git
git push -u origin main
```

**✅ Check:** Go to your GitHub repo - you should see all files there

---

## DEPLOY TO NETLIFY (BEST OPTION)

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click **Add new site** → **Import an existing project**
4. Select **GitHub** → Authorize
5. Choose repository: `national-legal-counsel`
6. Build command: `npm run build`
7. Publish directory: `dist`
8. Click **Deploy**

**⏱️ Wait 2-5 minutes** → You'll get a live URL!

✅ **Test your site:**
- Visit the Netlify URL
- Test all contact links (address opens maps, phone calls work, email opens Gmail)
- Check mobile view

---

## DEPLOY TO GITHUB PAGES (FREE ALTERNATIVE)

1. Go to your GitHub repo
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/root**
6. Click Save

**⏱️ Wait 3-5 minutes** → Your site lives at: `https://USERNAME.github.io/national-legal-counsel/`

---

## AFTER DEPLOYMENT

### Making Updates
```powershell
# Make changes to your code, then:
git add .
git commit -m "Update: description of changes"
git push origin main
```

**Auto-deployment:** Netlify or GitHub will rebuild and update automatically (1-3 minutes)

---

## IF SOMETHING GOES WRONG

### "dist folder not created"
```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

### "Build fails on Netlify"
- Check: Can you run `npm run build` locally successfully?
- If yes: Clear Netlify cache (Settings → Trigger redeploy)
- If no: Fix errors locally first, then push

### "Contact links don't work"
- Clear browser cache: Ctrl+Shift+Delete
- Try in incognito window
- Wait 5 minutes for CDN update

---

## ✅ DEPLOYMENT CHECKLIST

- [ ] `npm run build` works locally (no errors)
- [ ] `npm run preview` works (everything looks good)
- [ ] Code pushed to GitHub
- [ ] GitHub repo URL accessible
- [ ] Netlify/GitHub Pages deployment triggered
- [ ] Live URL working
- [ ] Contact links all work
- [ ] Mobile view responsive

**YOU'RE LIVE! 🎉**
