# BrandGoto Tech Outsourcing Website

A clean and professional one-page website for BrandGoto's tech outsourcing division, built with React and Vite.

## 🚀 Features

- **Modern Design**: Clean, professional layout with custom styling
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Sticky navbar with smooth scrolling to sections
- **Contact Form**: Functional contact form with validation
- **Brand Colors**: Consistent use of BrandGoto's brand colors
- **Performance**: Optimized with Vite for fast loading

## 🎨 Brand Colors

- **Dark Teal**: `#023942` (Primary Background)
- **Accent Orange**: `#F75F0B` (CTA Buttons / Highlights)
- **Light Cyan**: `#CFF8FF` (Subtle accents / highlights)
- **Black**: `#000000` (Text/Secondary)
- **White**: `#FFFFFF` (Headings / Main Text)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── Services.jsx    # Services section
│   ├── Industries.jsx  # Industries section
│   ├── WhyUs.jsx       # Why choose us section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── styles/             # CSS files
│   ├── main.css        # Main styles and variables
│   ├── navbar.css      # Navigation styles
│   ├── hero.css        # Hero section styles
│   ├── services.css    # Services section styles
│   ├── industries.css  # Industries section styles
│   ├── why-us.css      # Why us section styles
│   ├── contact.css     # Contact form styles
│   └── footer.css      # Footer styles
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Vanilla CSS**: Custom CSS with CSS variables
- **Google Fonts**: Poppins font family

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brandgoto-outsourcing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Sections

1. **Header/Navbar**: Sticky navigation with smooth scrolling
2. **Hero Section**: Main headline with CTA button
3. **Services**: What BrandGoto offers (4 service cards)
4. **Industries**: Industries served (6 industry cards)
5. **Why Choose BrandGoto**: Trust factors and statistics
6. **Contact**: Contact form and company information
7. **Footer**: Copyright and social links

## 📧 Contact Form

The contact form currently uses a `mailto:` link to send emails to `silas@brandgoto.com`. The form includes:

- Full Name (required)
- Email Address (required)
- Company Name (optional)
- Project Description (required)

Form validation is implemented on the frontend with proper error handling.

## 🎯 Customization

### Colors
Update the CSS custom properties in `src/styles/main.css`:

```css
:root {
  --dark-teal: #023942;
  --accent-orange: #F75F0B;
  --light-cyan: #CFF8FF;
  --black: #000000;
  --white: #FFFFFF;
}
```

### Content
Update the content in each component file:
- `src/components/Services.jsx` - Service offerings
- `src/components/Industries.jsx` - Industry categories
- `src/components/WhyUs.jsx` - Trust factors and statistics
- `src/components/Contact.jsx` - Contact information

### Contact Email
Update the email address in `src/components/Contact.jsx` and `src/components/Hero.jsx`.

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Development

### Adding New Sections

1. Create a new component in `src/components/`
2. Create corresponding CSS file in `src/styles/`
3. Import and add to `src/App.jsx`

### Styling Guidelines

- Use CSS custom properties for colors and spacing
- Follow the existing naming conventions
- Ensure responsive design for all new components
- Use the Poppins font family

## 📄 License

This project is proprietary to BrandGoto.

## 🤝 Support

For questions or support, contact silas@brandgoto.com
