# Krishna Patel Portfolio - React Version

A modern, responsive portfolio website built with React.js, featuring interactive skills display, animated backgrounds, and a contact form.

## Features

- 🎨 **Interactive Skills Section** - Categorized skills with hover effects
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes
- 🎨 **Theme Color Switcher** - Multiple color schemes available
- ✨ **Animated Background** - Floating skill icons in the home section
- ⌨️ **Typewriter Effect** - Dynamic text animation
- 📱 **Responsive Design** - Mobile-first approach
- 📧 **Contact Form** - EmailJS integration
- 🚀 **Smooth Animations** - Framer Motion powered

## Technologies Used

- **Frontend**: React.js, CSS3, HTML5
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
portfolio-react/
├── public/
│   ├── index.html
│   ├── kp_logo.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   ├── Home/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── ThemeControls/
│   ├── hooks/
│   ├── context/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Changing Colors
Update the color options in `ThemeControls.js` and CSS variables in `index.css`.

### Adding Skills
Modify the `skillsData` object in `Skills.js` to add or modify skills.

### Contact Form
Update EmailJS configuration in `Contact.js` with your service and template IDs.

## Deployment

The app can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Krishna Patel - ikrishnapatel01@gmail.com

Project Link: [https://github.com/ikrishnapatel01/portfolio-react](https://github.com/yourusername/portfolio-react)
```

## How to Set Up and Run

1. **Create the project structure** as shown above
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Copy your logo** (`kp_logo.png`) to the `public` folder
4. **Update EmailJS configuration** in `Contact.js` with your actual service and template IDs
5. **Start the development server**:
   ```bash
   npm start
   ```

## Key Benefits of the React Version

1. **Component-based architecture** - Easier to maintain and update
2. **State management** - Better handling of theme switching and form state
3. **Reusable components** - Skills, experience, and other sections are modular
4. **Modern React patterns** - Hooks, context, and functional components
5. **Better performance** - React's virtual DOM and optimization
6. **Easier deployment** - Can be deployed to modern platforms like Netlify, Vercel
7. **Maintainable code** - Separated concerns and cleaner structure

The React version maintains all the functionality of your original portfolio while providing a more maintainable and scalable codebase. You can easily add new features, modify existing ones, and deploy to modern hosting platforms. 
