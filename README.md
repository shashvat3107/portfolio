# Shashvat - Portfolio Website

A modern, responsive portfolio website built with React and Node.js featuring a dark theme design with green accent colors.

## 🚀 Features

- **Modern Design**: Dark theme with green accent colors (#4ade80)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with React and optimized for speed
- **Clean Navigation**: Simple navigation without blog section, featuring Skills instead of Services
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with form validation
- **Project Showcase**: Portfolio gallery with project details
- **Skills Display**: Animated skill bars and technology tags

## 🛠️ Tech Stack

### Frontend
- React 18.2.0
- React Router DOM 6.8.1
- CSS3 with modern features
- Responsive design

### Backend
- Node.js
- Express.js 4.18.2
- CORS enabled
- Environment configuration

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   │   ├── About.js
│   │   │   ├── About.css
│   │   │   ├── Skills.js
│   │   │   ├── Skills.css
│   │   │   ├── Projects.js
│   │   │   ├── Projects.css
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Node.js backend
│   ├── index.js
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## ⚡ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Start the development servers**
   ```bash
   # From the root directory
   npm run dev
   ```
   This will start both the React development server (port 3000) and the Express server (port 5000) concurrently.

   **Alternative: Start servers separately**
   ```bash
   # Terminal 1 - Start the client
   cd client
   npm start
   
   # Terminal 2 - Start the server
   cd server
   npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 🎨 Customization

### Colors
The website uses a consistent color scheme:
- **Primary Green**: #4ade80
- **Darker Green**: #22c55e
- **Background**: #0a0a0a
- **Secondary Background**: #1a1a1a
- **Text**: #ffffff
- **Secondary Text**: #a0a0a0

### Navigation
The navigation includes:
- HOME
- ABOUT
- SKILLS (instead of Services)
- PROJECTS
- CONTACT

Note: BLOG has been removed as requested.

### Images
Update the image URLs in the components:
- Profile image in `Home.js`
- About image in `About.js`
- Project images in `Projects.js`

### Content
Customize the content in each page component:
- Personal information in `Home.js` and `About.js`
- Skills and technologies in `Skills.js`
- Project details in `Projects.js`
- Contact information in `Contact.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Build for Production
```bash
cd client
npm run build
```

### Deploy
The built files will be in the `client/build` directory. You can deploy this to any static hosting service or use the Express server to serve the built files.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For any questions or feedback, please reach out through the contact form on the website or via email.

---

Built with ❤️ using React and Node.js 
