# Netlify CLI Deployment

## Install Netlify CLI
```bash
npm install -g netlify-cli
```

## Login to Netlify
```bash
netlify login
```

## Deploy (first time)
```bash
netlify deploy --dir=dist
```

## Deploy to production
```bash
netlify deploy --prod --dir=dist
```

## Auto-deploy on changes
```bash
netlify dev
```
