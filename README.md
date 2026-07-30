# 🚀 AI-Powered Web App Builder

A modern MERN stack application that leverages Google's Gemini AI to generate web applications based on natural language descriptions. Build, edit, and deploy web apps with the power of artificial intelligence.

## ✨ Features

- 🤖 **AI-Powered Generation**: Generate complete web applications using natural language prompts
- 🎨 **Real-time Code Editor**: Live code editing with syntax highlighting
- 👀 **Live Preview**: See your changes instantly in the built-in preview
- 🔐 **User Authentication**: Secure JWT-based authentication system
- 📁 **Project Management**: Create, manage, and organize multiple projects
- 📱 **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- 💾 **Version Control**: Track changes and maintain version history
- 🔄 **Chat Interface**: Interactive chat-based app modification

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **js-cookie** - Cookie management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### AI/ML
- **Google Gemini AI** - Code generation
- **@google/genai** - Official Gemini SDK

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Salmonnaik/nxt-app-build-ai.git
   cd nxt-app-build-ai
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=2000d
   GEMINI_API_KEY=your_gemini_api_key_here
   CLIENT_URL=http://localhost:5173
   ```

4. **Get API Keys**
   
   - **MongoDB Atlas**: Create a free cluster and get your connection string
   - **Gemini API**: Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

5. **Run the application**
   ```bash
   # Start the backend server (in server directory)
   npm run dev
   
   # Start the frontend (in client directory)
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
ai_powered_web_app_builder/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── context/           # React contexts
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   ├── styles/            # CSS styles
│   │   └── main.jsx           # App entry point
│   ├── package.json
│   └── vite.config.js
├── server/                     # Express backend
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   ├── controllers/       # Route controllers
│   │   ├── middleware/        # Express middleware
│   │   ├── models/            # MongoDB models
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   └── utils/             # Utility functions
│   ├── .env.example
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

### Projects
- `GET /api/projects` - Get all user projects
- `GET /api/projects/:id` - Get specific project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Generation
- `POST /api/generate/:projectId` - Generate code for project

## 💡 Usage Examples

### Creating a New Project
1. Sign up or log in to your account
2. Click "Create New Project"
3. Enter a project name
4. Start building!

### Generating Code
1. In the project editor, describe what you want to build:
   - "Create a personal portfolio website with a dark theme"
   - "Build a simple calculator app"
   - "Make a todo list application"
2. Click "Generate"
3. Watch as AI creates your application
4. Edit and refine the code as needed

### Features in Action
- **Real-time Preview**: See changes instantly as you code
- **Version History**: Track all your iterations
- **Chat Interface**: Modify your app using natural language
- **Export Options**: Download your code when ready

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- CORS protection
- Input validation and sanitization
- Secure API endpoints

## 🌟 Key Components

### AI Integration
- **Gemini Service**: Handles communication with Google's Gemini AI
- **Prompt Engineering**: Optimized prompts for code generation
- **Response Parsing**: Intelligent parsing of AI-generated code

### Code Editor
- **Syntax Highlighting**: Color-coded syntax for better readability
- **Auto-completion**: Smart code suggestions
- **Error Detection**: Real-time error highlighting

### Project Management
- **Auto-save**: Automatic saving of your work
- **Version Control**: Track changes and revert if needed
- **Collaboration**: Share projects with team members

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
# Build for production
cd client
npm run build
```

### Backend (Heroku/Railway)
```bash
# Set environment variables
# Install dependencies
npm install --production
# Start server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the package.json file for details.

## 🙋‍♂️ Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

## 🗺️ Roadmap

- [ ] Add more AI models (GPT-4, Claude)
- [ ] Implement team collaboration features
- [ ] Add deployment integrations (Vercel, Netlify)
- [ ] Create template library
- [ ] Add component marketplace
- [ ] Implement real-time collaboration
- [ ] Add mobile app support

## 📊 Performance

- **Fast Build Times**: Optimized with Vite
- **Efficient AI Usage**: Smart caching and prompt optimization
- **Responsive UI**: Smooth interactions and animations
- **Scalable Architecture**: Built for growth

---

**Built with ❤️ using modern web technologies and AI**
