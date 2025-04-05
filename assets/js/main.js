// Tool categories and their tools
const toolsData = {
    'Image Tools': [
        { name: 'Image to PNG Converter', icon: 'fa-image', path: 'tools/image-to-png.html' },
        { name: 'Image to JPG Converter', icon: 'fa-image', path: 'tools/image-to-jpg.html' },
        { name: 'Image Resizer', icon: 'fa-expand', path: 'tools/image-resizer.html' },
        { name: 'Image Compressor', icon: 'fa-compress', path: 'tools/image-compressor.html' },
        { name: 'Image Cropper', icon: 'fa-crop', path: 'tools/image-cropper.html' },
        { name: 'Convert Image to Base64', icon: 'fa-code', path: 'tools/image-to-base64.html' },
        { name: 'Convert WebP to PNG', icon: 'fa-exchange-alt', path: 'tools/webp-to-png.html' },
        { name: 'GIF Maker', icon: 'fa-film', path: 'tools/gif-maker.html' },
        { name: 'QR Code Generator', icon: 'fa-qrcode', path: 'tools/qr-generator.html' },
        { name: 'Screenshot to PDF', icon: 'fa-file-pdf', path: 'tools/screenshot-to-pdf.html' }
    ],
    'SEO Tools': [
        { name: 'Meta Tag Generator', icon: 'fa-tags', path: 'tools/meta-tag-generator.html' },
        { name: 'Keyword Density Checker', icon: 'fa-chart-bar', path: 'tools/keyword-density.html' },
        { name: 'Sitemap Generator', icon: 'fa-sitemap', path: 'tools/sitemap-generator.html' },
        { name: 'Robots.txt Generator', icon: 'fa-robot', path: 'tools/robots-generator.html' },
        { name: 'Google Index Checker', icon: 'fa-search', path: 'tools/google-index.html' },
        { name: 'Domain Authority Checker', icon: 'fa-globe', path: 'tools/domain-authority.html' },
        { name: 'Backlink Checker', icon: 'fa-link', path: 'tools/backlink-checker.html' },
        { name: 'Page Speed Checker', icon: 'fa-tachometer-alt', path: 'tools/page-speed.html' },
        { name: 'XML Sitemap Validator', icon: 'fa-check-circle', path: 'tools/xml-validator.html' },
        { name: 'Mobile-Friendly Test', icon: 'fa-mobile-alt', path: 'tools/mobile-friendly.html' }
    ],
    'Text Tools': [
        { name: 'Word Counter', icon: 'fa-calculator', path: 'tools/word-counter.html' },
        { name: 'Character Counter', icon: 'fa-text-width', path: 'tools/character-counter.html' },
        { name: 'Case Converter', icon: 'fa-font', path: 'tools/case-converter.html' },
        { name: 'Plagiarism Checker', icon: 'fa-copy', path: 'tools/plagiarism-checker.html' },
        { name: 'Grammar Checker', icon: 'fa-spell-check', path: 'tools/grammar-checker.html' },
        { name: 'Text-to-Speech', icon: 'fa-volume-up', path: 'tools/text-to-speech.html' },
        { name: 'Speech-to-Text', icon: 'fa-microphone', path: 'tools/speech-to-text.html' },
        { name: 'URL Encoder/Decoder', icon: 'fa-link', path: 'tools/url-encoder.html' },
        { name: 'Fancy Text Generator', icon: 'fa-magic', path: 'tools/fancy-text.html' },
        { name: 'Random Text Generator', icon: 'fa-random', path: 'tools/random-text.html' }
    ],
    'Developer Tools': [
        { name: 'JSON Formatter', icon: 'fa-code', path: 'tools/json-formatter.html' },
        { name: 'HTML to Markdown', icon: 'fa-file-code', path: 'tools/html-to-markdown.html' },
        { name: 'CSS Minifier', icon: 'fa-compress', path: 'tools/css-minifier.html' },
        { name: 'JavaScript Minifier', icon: 'fa-file-code', path: 'tools/js-minifier.html' },
        { name: 'SQL Formatter', icon: 'fa-database', path: 'tools/sql-formatter.html' },
        { name: 'HTACCESS Generator', icon: 'fa-server', path: 'tools/htaccess-generator.html' },
        { name: 'Markdown to HTML', icon: 'fa-file-alt', path: 'tools/markdown-to-html.html' },
        { name: 'Color Picker', icon: 'fa-palette', path: 'tools/color-picker.html' },
        { name: 'Base64 Encoder/Decoder', icon: 'fa-key', path: 'tools/base64-encoder.html' },
        { name: 'IP Address Lookup', icon: 'fa-map-marker-alt', path: 'tools/ip-lookup.html' }
    ],
    'Calculators': [
        { name: 'Percentage Calculator', icon: 'fa-percent', path: 'tools/percentage-calculator.html' },
        { name: 'Age Calculator', icon: 'fa-birthday-cake', path: 'tools/age-calculator.html' },
        { name: 'BMI Calculator', icon: 'fa-weight', path: 'tools/bmi-calculator.html' },
        { name: 'Loan EMI Calculator', icon: 'fa-calculator', path: 'tools/loan-calculator.html' },
        { name: 'Scientific Calculator', icon: 'fa-square-root-alt', path: 'tools/scientific-calculator.html' },
        { name: 'Discount Calculator', icon: 'fa-tags', path: 'tools/discount-calculator.html' },
        { name: 'Currency Converter', icon: 'fa-money-bill-wave', path: 'tools/currency-converter.html' },
        { name: 'Time Zone Converter', icon: 'fa-clock', path: 'tools/timezone-converter.html' },
        { name: 'Binary to Decimal', icon: 'fa-hashtag', path: 'tools/binary-converter.html' },
        { name: 'Tip Calculator', icon: 'fa-coins', path: 'tools/tip-calculator.html' }
    ],
    'Unit Converters': [
        { name: 'Length Converter', icon: 'fa-ruler', path: 'tools/length-converter.html' },
        { name: 'Weight Converter', icon: 'fa-balance-scale', path: 'tools/weight-converter.html' },
        { name: 'Speed Converter', icon: 'fa-tachometer-alt', path: 'tools/speed-converter.html' },
        { name: 'Temperature Converter', icon: 'fa-thermometer-half', path: 'tools/temperature-converter.html' },
        { name: 'Volume Converter', icon: 'fa-flask', path: 'tools/volume-converter.html' },
        { name: 'Data Storage Converter', icon: 'fa-hdd', path: 'tools/data-converter.html' },
        { name: 'Energy Converter', icon: 'fa-bolt', path: 'tools/energy-converter.html' },
        { name: 'Pressure Converter', icon: 'fa-compress-arrows-alt', path: 'tools/pressure-converter.html' },
        { name: 'Fuel Efficiency Converter', icon: 'fa-gas-pump', path: 'tools/fuel-converter.html' },
        { name: 'Angle Converter', icon: 'fa-compass', path: 'tools/angle-converter.html' }
    ],
    'Security Tools': [
        { name: 'MD5 Hash Generator', icon: 'fa-fingerprint', path: 'tools/md5-generator.html' },
        { name: 'SHA256 Hash Generator', icon: 'fa-shield-alt', path: 'tools/sha256-generator.html' },
        { name: 'Password Generator', icon: 'fa-key', path: 'tools/password-generator.html' },
        { name: 'Random String Generator', icon: 'fa-random', path: 'tools/random-string.html' },
        { name: 'URL Shortener', icon: 'fa-link', path: 'tools/url-shortener.html' },
        { name: 'IP Geolocation Finder', icon: 'fa-map-marker-alt', path: 'tools/ip-geolocation.html' },
        { name: 'SSL Certificate Checker', icon: 'fa-lock', path: 'tools/ssl-checker.html' },
        { name: 'Whois Lookup', icon: 'fa-search', path: 'tools/whois-lookup.html' },
        { name: 'HTTP Headers Checker', icon: 'fa-server', path: 'tools/http-headers.html' },
        { name: 'Privacy Policy Generator', icon: 'fa-file-contract', path: 'tools/privacy-policy.html' }
    ],
    'Social Media Tools': [
        { name: 'YouTube Thumbnail Downloader', icon: 'fa-youtube', path: 'tools/youtube-thumbnail.html' },
        { name: 'Instagram Photo Downloader', icon: 'fa-instagram', path: 'tools/instagram-downloader.html' },
        { name: 'Twitter Video Downloader', icon: 'fa-twitter', path: 'tools/twitter-downloader.html' },
        { name: 'Facebook Video Downloader', icon: 'fa-facebook', path: 'tools/facebook-downloader.html' },
        { name: 'TikTok Video Downloader', icon: 'fa-music', path: 'tools/tiktok-downloader.html' },
        { name: 'YouTube Tags Extractor', icon: 'fa-tags', path: 'tools/youtube-tags.html' },
        { name: 'Hashtag Generator', icon: 'fa-hashtag', path: 'tools/hashtag-generator.html' },
        { name: 'Social Media Post Generator', icon: 'fa-share-alt', path: 'tools/social-post-generator.html' },
        { name: 'Emoji Keyboard', icon: 'fa-smile', path: 'tools/emoji-keyboard.html' },
        { name: 'Twitter Character Counter', icon: 'fa-twitter', path: 'tools/twitter-counter.html' }
    ],
    'Miscellaneous Tools': [
        { name: 'Barcode Generator', icon: 'fa-barcode', path: 'tools/barcode-generator.html' },
        { name: 'Meme Generator', icon: 'fa-laugh', path: 'tools/meme-generator.html' },
        { name: 'Resume Builder', icon: 'fa-file-alt', path: 'tools/resume-builder.html' },
        { name: 'Invoice Generator', icon: 'fa-file-invoice', path: 'tools/invoice-generator.html' },
        { name: 'Business Name Generator', icon: 'fa-building', path: 'tools/business-name.html' },
        { name: 'Lottery Number Generator', icon: 'fa-ticket-alt', path: 'tools/lottery-generator.html' },
        { name: 'Flip a Coin', icon: 'fa-coins', path: 'tools/coin-flip.html' },
        { name: 'Random Number Generator', icon: 'fa-dice', path: 'tools/random-number.html' },
        { name: 'Dice Roller', icon: 'fa-dice', path: 'tools/dice-roller.html' },
        { name: 'Internet Speed Test', icon: 'fa-tachometer-alt', path: 'tools/speed-test.html' }
    ]
};

// Load header and footer
function loadComponents() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
}

// Display tools in the grid
function displayTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';

    for (const [category, tools] of Object.entries(toolsData)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'col-12 mb-4';
        categorySection.innerHTML = `
            <h2 class="mb-3" id="${category.toLowerCase().replace(' ', '-')}">${category}</h2>
            <div class="row">
                ${tools.map(tool => `
                    <div class="col-md-4 col-lg-3 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <i class="fas ${tool.icon} fa-2x mb-3"></i>
                                <h5 class="card-title">${tool.name}</h5>
                                <a href="${tool.path}" class="btn btn-primary">Use Tool</a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        toolsGrid.appendChild(categorySection);
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('toolSearch');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const category = card.closest('.col-12').querySelector('h2').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || category.includes(searchTerm)) {
                card.closest('.col-md-4').style.display = '';
            } else {
                card.closest('.col-md-4').style.display = 'none';
            }
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
    displayTools();
    setupSearch();
}); 