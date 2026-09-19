# Portfolio

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
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
portfolio-react/
├── api/
│   └── sendEmail.js
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

### Contact Form (EmailJS)

This project uses EmailJS for the contact form, secured via a Vercel serverless function (`api/sendEmail.js`).
To connect your EmailJS account, you need to configure the following environment variables in your deployment environment (or in a `.env.local` file for local development):

- `emailjsServiceId`: Your EmailJS Service ID
- `emailjsTemplateId`: Your EmailJS Template ID
- `emailjsPublicKey`: Your EmailJS Public Key
- `emailjsPrivateKey`: Your EmailJS Private Key (Required for server-side security)

## Deployment

### Vercel (Recommended)

This project is optimized for deployment on **Vercel**, as it utilizes Vercel Serverless Functions (`api/sendEmail.js`) to securely process EmailJS contact form submissions.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. In the Vercel dashboard, go to **Settings > Environment Variables** and add your EmailJS credentials:
   - `emailjsServiceId`
   - `emailjsTemplateId`
   - `emailjsPublicKey`
   - `emailjsPrivateKey`
4. Deploy!

### Other Static Hosting

If you deploy to a purely static host (like GitHub Pages), the Vercel serverless function for sending emails will not work. You would need to either use a different backend solution or refactor the contact form to call EmailJS directly from the frontend (which exposes your keys).

## How to Set Up and Run

1. **Create the project structure** as shown above
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Copy your logo** (`kp_logo.png`) to the `public` folder
4. **Create a `.env.local` file** and add your EmailJS environment variables (see Contact Form section)
5. **Start the development server**:
   ```bash
   npm run dev
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
