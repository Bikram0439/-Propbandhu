const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');

// ==================== BUYERS SECTION ROUTES ====================

router.get('/homeloan', async (req, res) => {
    try {
        res.render('partials/buyers/homeloan', {
            title: 'Home Loan - Propbandhu',
            user: req.user,
            activePage: 'homeloan'
        });
    } catch (error) {
        console.error('Home loan page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});
// Legal Support Page
router.get('/legal-support', async (req, res) => {
    try {
        res.render('partials/buyers/legal-support', {
            title: 'Legal Support - Propbandhu',
            user: req.user,
            activePage: 'legal-support'
        });
    } catch (error) {
        console.error('Legal support page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Property Valuation & Inspection Page
router.get('/valuation',async (req, res) => {
    try {
        res.render('partials/buyers/valuation', {
            title: 'Property Valuation - Propbandhu',
            user: req.user,
            activePage: 'valuation'
        });
    } catch (error) {
        console.error('Valuation page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Vastu Calculator Page
router.get('/vastu', async (req, res) => {
    try {
        res.render('partials/buyers/vastu', {
            title: 'Vastu Calculator - Propbandhu',
            user: req.user,
            activePage: 'vastu'
        });
    } catch (error) {
        console.error('Vastu page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Fractional Ownership / Property Management
router.get('/property-management', async (req, res) => {
    try {
        res.render('partials/buyers/property-management', {
            title: 'Fractional Ownership - Propbandhu',
            user: req.user,
            activePage: 'property-management'
        });
    } catch (error) {
        console.error('Property management page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Buyer Guide Page
router.get('/buyer-guide', async (req, res) => {
    try {
        res.render('partials/buyers/buyer-guide', {
            title: 'Buyer Guide - Propbandhu',
            user: req.user,
            activePage: 'buyer-guide'
        });
    } catch (error) {
        console.error('Buyer guide page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// ==================== TENANTS SECTION ROUTES ====================

// Find Flat / Rental Properties
router.get('/find-flat', async (req, res) => {
    try {
        const Property = require('../models/Property');
        
        // Fetch rental properties
        const properties = await Property.find({ 
            status: 'live',
            purpose: 'rent',
            is_active: true 
        }).limit(20);
        
        res.render('partials/tenants/find-flat', {
            title: 'Find Rental Properties - Propbandhu',
            user: req.user,
            properties: properties,
            activePage: 'find-flat'
        });
    } catch (error) {
        console.error('Find flat page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Rent Agreement Generator
router.get('/rent-agreement', async (req, res) => {
    try {
        res.render('partials/tenants/rent-agreement', {
            title: 'Rent Agreement - Propbandhu',
            user: req.user,
            activePage: 'rent-agreement'
        });
    } catch (error) {
        console.error('Rent agreement page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Moving Services / Packers & Movers
router.get('/moving-services',async (req, res) => {
    try {
        res.render('partials/tenants/moving-services', {
            title: 'Moving Services - Propbandhu',
            user: req.user,
            activePage: 'moving-services'
        });
    } catch (error) {
        console.error('Moving services page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Emergency Support
router.get('/emergency-support', async (req, res) => {
    try {
        res.render('partials/tenants/emergency-support', {
            title: 'Emergency Support - Propbandhu',
            user: req.user,
            activePage: 'emergency-support'
        });
    } catch (error) {
        console.error('Emergency support page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Roommate/Flatmate Finder
router.get('/flatmate-finder', async (req, res) => {
    try {
        res.render('partials/tenants/flatmate-finder', {
            title: 'Find Roommate - Propbandhu',
            user: req.user,
            activePage: 'flatmate-finder'
        });
    } catch (error) {
        console.error('Flatmate finder page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// ==================== LEGACY OWNERS / SELLERS SECTION ROUTES ====================

// Post Free Property
router.get('/post-property', async (req, res) => {
    try {
        res.render('partials/sellers/post-property', {
            title: 'Post Free Property - Propbandhu',
            user: req.user || null,
            activePage: 'post-property'
        });
    } catch (error) {
        console.error('Post property page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Property Valuation for Sellers
router.get('/property-valuation', async (req, res) => {
    try {
        res.render('partials/sellers/property-valuation', {
            title: 'Property Valuation - Propbandhu',
            user: req.user,
            activePage: 'property-valuation'
        });
    } catch (error) {
        console.error('Property valuation page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// seller property managment
router.get('/seller-property-management', async (req, res) => {
    try {
        const Property = require('../models/Property');

        let properties = [];

        // If user logged in → fetch properties
        if (req.user) {
            properties = await Property.find({ seller: req.user.id });
        }

        res.render('partials/sellers/property-management', {
            title: 'Manage Properties - Propbandhu',
            user: req.user || null,
            properties: properties,
            activePage: 'seller-property-management'
        });
    } catch (error) {
        console.error('Seller property management error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});



// Sell & Stay Solutions
router.get('/sell-stay', async (req, res) => {
    try {
        res.render('partials/sellers/sell-stay', {
            title: 'Sell & Stay Solutions - Propbandhu',
            user: req.user,
            activePage: 'sell-stay'
        });
    } catch (error) {
        console.error('Sell & stay page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});



// Seller Guide
router.get('/seller-guide', async (req, res) => {
    try {
        res.render('partials/sellers/seller-guide', {
            title: 'Seller Guide - Propbandhu',
            user: req.user,
            activePage: 'seller-guide'
        });
    } catch (error) {
        console.error('Seller guide page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// ==================== INVESTORS SECTION ROUTES ====================

// Under Construction Projects
router.get('/under-construction',async (req, res) => {
    try {
        const Property = require('../models/Property');
        
        const projects = await Property.find({ 
            status: 'under_construction',
            is_active: true 
        }).sort({ createdAt: -1 });
        
        res.render('partials/investors/under-construction', {
            title: 'Under Construction Projects - Propbandhu',
            user: req.user,
            projects: projects,
            activePage: 'under-construction'
        });
    } catch (error) {
        console.error('Under construction page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Pre-Launch Offers
router.get('/pre-launch',  async (req, res) => {
    try {
        const Property = require('../models/Property');
        
        const projects = await Property.find({ 
            status: 'pre_launch',
            is_active: true 
        }).sort({ createdAt: -1 });
        
        res.render('partials/investors/pre-launch', {
            title: 'Pre-Launch Offers - Propbandhu',
            user: req.user,
            projects: projects,
            activePage: 'pre-launch'
        });
    } catch (error) {
        console.error('Pre-launch page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// ROI Calculator for Investors
router.get('/roi-calculator',  async (req, res) => {
    try {
        res.render('partials/investors/roi-calculator', {
            title: 'ROI Calculator - Propbandhu',
            user: req.user,
            activePage: 'roi-calculator'
        });
    } catch (error) {
        console.error('ROI calculator page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Only EMI Projects
router.get('/emi-projects', async (req, res) => {
    try {
        const Property = require('../models/Property');
        
        const projects = await Property.find({ 
            status: 'live',
            emi_available: true,
            is_active: true 
        }).sort({ price: 1 });
        
        res.render('partials/investors/emi-projects', {
            title: 'EMI Projects - Propbandhu',
            user: req.user,
            projects: projects,
            activePage: 'emi-projects'
        });
    } catch (error) {
        console.error('EMI projects page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// Projects in Developing Areas
router.get('/developing-areas',  async (req, res) => {
    try {
        const Property = require('../models/Property');
        
        const projects = await Property.find({ 
            status: 'live',
            developing_area: true,
            is_active: true 
        }).sort({ price: 1 });
        
        res.render('partials/investors/developing-areas', {
            title: 'Developing Areas Projects - Propbandhu',
            user: req.user,
            projects: projects,
            activePage: 'developing-areas'
        });
    } catch (error) {
        console.error('Developing areas page error:', error);
        res.status(500).render('error', { message: 'Error loading page', user: req.user });
    }
});

// ==================== API ROUTES FOR FORM SUBMISSIONS ====================

// API: Submit Loan Application
router.post('/api/loan-application',  async (req, res) => {
    try {
        const { name, email, phone, loanAmount } = req.body;
        
        // Save to database (you can create a LoanApplication model)
        console.log('Loan application received:', { name, email, phone, loanAmount, userId: req.user.id });
        
        res.json({ 
            success: true, 
            message: 'Loan application submitted successfully! We will contact you soon.' 
        });
    } catch (error) {
        console.error('Loan application error:', error);
        res.status(500).json({ success: false, message: 'Error submitting application' });
    }
});

// API: Submit Legal Consultation
router.post('/api/legal-consultation', requireAuth, async (req, res) => {
    try {
        const { name, phone, email, service, message } = req.body;
        
        console.log('Legal consultation request:', { name, phone, email, service, userId: req.user.id });
        
        res.json({ 
            success: true, 
            message: 'Consultation request sent! Our legal expert will contact you within 24 hours.' 
        });
    } catch (error) {
        console.error('Legal consultation error:', error);
        res.status(500).json({ success: false, message: 'Error submitting request' });
    }
});

// API: Book Property Inspection
router.post('/api/book-inspection',  async (req, res) => {
    try {
        const { name, phone, email, address, inspectionType, preferredDate } = req.body;
        
        console.log('Inspection booking:', { name, phone, email, address, inspectionType, preferredDate, userId: req.user.id });
        
        res.json({ 
            success: true, 
            message: 'Inspection booked successfully! Our team will confirm the schedule.' 
        });
    } catch (error) {
        console.error('Inspection booking error:', error);
        res.status(500).json({ success: false, message: 'Error booking inspection' });
    }
});

// API: Book Vastu Consultation
router.post('/api/vastu-consultation',  async (req, res) => {
    try {
        const { name, phone, email, consultationType } = req.body;
        
        console.log('Vastu consultation booking:', { name, phone, email, consultationType, userId: req.user.id });
        
        res.json({ 
            success: true, 
            message: 'Vastu consultation booked! Our expert will contact you shortly.' 
        });
    } catch (error) {
        console.error('Vastu consultation error:', error);
        res.status(500).json({ success: false, message: 'Error booking consultation' });
    }
});

// API: Generate Rent Agreement
router.post('/api/generate-rent-agreement',  async (req, res) => {
    try {
        const { tenantName, ownerName, propertyAddress, rent, duration } = req.body;
        
        // Generate PDF logic here
        console.log('Rent agreement generation:', { tenantName, ownerName, propertyAddress, rent, duration });
        
        res.json({ 
            success: true, 
            message: 'Rent agreement generated successfully!',
            downloadUrl: '/downloads/rent-agreement.pdf'
        });
    } catch (error) {
        console.error('Rent agreement error:', error);
        res.status(500).json({ success: false, message: 'Error generating agreement' });
    }
});

// API: Calculate ROI
router.post('/api/calculate-roi',  async (req, res) => {
    try {
        const { propertyPrice, monthlyRent, annualAppreciation, maintenanceCost } = req.body;
        
        const annualRent = monthlyRent * 12;
        const appreciationValue = propertyPrice * (annualAppreciation / 100);
        const netIncome = annualRent - maintenanceCost;
        const roi = ((netIncome + appreciationValue) / propertyPrice) * 100;
        
        res.json({ 
            success: true, 
            roi: roi.toFixed(2),
            annualRent: annualRent,
            appreciationValue: appreciationValue,
            netIncome: netIncome
        });
    } catch (error) {
        console.error('ROI calculation error:', error);
        res.status(500).json({ success: false, message: 'Error calculating ROI' });
    }
});

// API: Submit Property for Posting
router.post('/api/post-property', async (req, res) => {
    try {
        const Property = require('../models/Property');
        const { title, price, location, description, propertyType, purpose } = req.body;
        
        const property = new Property({
            title,
            price,
            address: { city: location },
            description,
            property_type: propertyType,
            purpose: purpose || 'sell',
            seller: req.user.id,
            status: 'pending_approval',
            is_active: true
        });
        
        await property.save();
        
        res.json({ 
            success: true, 
            message: 'Property submitted for approval! Our team will review and publish it.' 
        });
    } catch (error) {
        console.error('Post property error:', error);
        res.status(500).json({ success: false, message: 'Error posting property' });
    }
});

// API: Request Property Valuation
router.post('/api/request-valuation', async (req, res) => {
    try {
        const { area, city, propertyType, age } = req.body;
        
        // Simple valuation logic
        const cityRates = {
            'Mumbai': 25000,
            'Delhi': 18000,
            'Bangalore': 15000,
            'Pune': 12000,
            'Hyderabad': 11000,
            'Chennai': 10000
        };
        
        const rate = cityRates[city] || 10000;
        let estimatedValue = area * rate;
        
        // Adjust for property type
        const typeMultiplier = { 'Apartment': 1, 'Villa': 1.5, 'Plot': 0.8, 'Commercial': 1.3 };
        estimatedValue *= typeMultiplier[propertyType] || 1;
        
        // Adjust for age (depreciation)
        if (age > 0) {
            estimatedValue *= Math.max(0.7, 1 - (age * 0.01));
        }
        
        res.json({ 
            success: true, 
            estimatedValue: Math.round(estimatedValue),
            message: 'Valuation calculated successfully!'
        });
    } catch (error) {
        console.error('Valuation request error:', error);
        res.status(500).json({ success: false, message: 'Error calculating valuation' });
    }
});

module.exports = router;