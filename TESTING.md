# Windows 98 Shopify Theme - Testing Guide

## Prerequisites
- Shopify CLI
- Node.js (latest LTS version)
- Shopify Partner Account
- Test Shopify Store

## Setup Testing Environment

### 1. Install Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
```

### 2. Authenticate Shopify CLI
```bash
shopify auth login --store your-store.myshopify.com
```

### 3. Theme Development Modes

#### Local Development
```bash
shopify theme serve
```
- Opens live preview
- Automatically reloads on file changes
- Accessible via localhost

#### Comprehensive Testing Checklist

### UI/UX Testing
✅ Home Page
- [ ] Desktop icon navigation
- [ ] Parallax background
- [ ] Responsive layout

✅ Product Pages
- [ ] Image gallery
- [ ] Variant selection
- [ ] Add to cart functionality
- [ ] Mobile responsiveness

✅ Collection Pages
- [ ] Grid layout
- [ ] Folder navigation
- [ ] Pagination
- [ ] Filtering options

✅ Cart Functionality
- [ ] Add/remove items
- [ ] Quantity adjustment
- [ ] Price calculations
- [ ] Checkout process

✅ Customer Account
- [ ] Login/registration
- [ ] Order history
- [ ] Account details

### Performance Testing
- [ ] Page load times
- [ ] Image lazy loading
- [ ] JavaScript interactions
- [ ] Mobile performance

### Compatibility Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast
- [ ] Focus states

## Automated Testing

### Shopify Theme Check
```bash
shopify theme check
```
- Runs linting and best practice checks

### Performance Audit
1. Use Chrome DevTools
2. Lighthouse testing
3. Performance tab analysis

## Debugging

### Common Issues
- Clear browser cache
- Disable browser extensions
- Check browser console
- Verify Shopify CLI version

### Logging
- Enable debug mode in theme settings
- Check browser developer tools

## Reporting Issues
1. Reproduce the issue
2. Capture screenshots
3. Provide browser/device details
4. Open GitHub issue with detailed description

## Test Data Recommendations
- Create test products
- Set up multiple collections
- Test with various product variants
- Simulate different customer scenarios

## Performance Optimization Checks
- Minimize custom JavaScript
- Optimize image sizes
- Use asset preloading
- Implement lazy loading

## Deployment Testing
```bash
shopify theme push
```
- Test on staging store first
- Verify all functionalities post-deployment

## Recommended Testing Tools
- Browser DevTools
- Shopify Theme Inspector
- Lighthouse
- WAVE Accessibility Extension

## Troubleshooting
- Ensure latest Shopify CLI
- Check theme compatibility
- Verify store settings

---

**Happy Testing!** 🕵️‍♀️🖥️
