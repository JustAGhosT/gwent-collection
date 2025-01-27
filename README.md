# Gwent Collection Tracker

A web-based collection tracking tool for CD Projekt Red's Gwent card game, helping players manage their card collection and track their progress.

## ✨ Features

### Current Features
- **Collection Management**
  - Track owned cards across all Gwent factions
  - Filter cards by faction (Northern Realms, Nilfgaard, etc.)
  - Track premium (animated) and standard card variants
  - Visual card grid display with card art

- **User Interface**
  - Responsive design for desktop and mobile viewing
  - Card hover effects showing detailed card information
  - Quick toggle between premium and standard versions
  - Visual indicators for owned/unowned cards

- **Data Management**
  - Local storage persistence of collection data
  - Import/Export collection data
  - Automatic save on collection updates

### Card Management Features
- **Card Filtering**
  - Filter by faction
  - Filter by card type (Unit, Special, Artifact)
  - Filter by rarity
  - Filter by ownership status

- **Card Display**
  - High-quality card artwork display
  - Card power and provision cost display
  - Card ability text
  - Card category tags

## 🗺️ Roadmap

### Short-term Goals (Next 1-2 Months)
- [ ] **Collection Statistics**
  - [ ] Add completion percentage per faction
  - [ ] Display total scraps needed for completion
  - [ ] Track premium card collection progress
  - [ ] Show collection value in scraps

- [ ] **Enhanced Filtering**
  - [ ] Add multi-select filters
  - [ ] Add keyword search functionality
  - [ ] Filter by card ability type
  - [ ] Save filter preferences

- [ ] **UI Improvements**
  - [ ] Add dark/light theme toggle
  - [ ] Implement grid/list view options
  - [ ] Add card sorting options
  - [ ] Improve mobile layout

### Medium-term Goals (3-6 Months)
- [ ] **Deck Building Features**
  - [ ] Create and save custom decks
  - [ ] Deck validation according to Gwent rules
  - [ ] Deck sharing functionality
  - [ ] Deck statistics and analysis

- [ ] **Data Management**
  - [ ] Cloud sync for collection data
  - [ ] Multiple collection profiles
  - [ ] Backup and restore functionality
  - [ ] Collection history tracking

- [ ] **Community Features**
  - [ ] Share collection progress
  - [ ] Compare collections with other users
  - [ ] Comment system for deck sharing

### Long-term Goals (6+ Months)
- [ ] **Advanced Features**
  - [ ] Card crafting cost calculator
  - [ ] Collection completion optimizer
  - [ ] Deck recommendation system
  - [ ] Integration with GWENT API (if available)

- [ ] **Analysis Tools**
  - [ ] Collection value trends
  - [ ] Faction completion analysis
  - [ ] Rarity distribution charts
  - [ ] Crafting efficiency calculator

### Technical Improvements
- [ ] **Performance Optimization**
  - [ ] Implement virtual scrolling for large card lists
  - [ ] Optimize image loading and caching
  - [ ] Reduce bundle size
  - [ ] Improve initial load time

- [ ] **Code Quality**
  - [ ] Add comprehensive test coverage
  - [ ] Implement E2E testing
  - [ ] Improve TypeScript type coverage
  - [ ] Add automated performance monitoring

### Accessibility Improvements
- [ ] Add keyboard navigation support
- [ ] Implement ARIA labels
- [ ] Add high contrast mode
- [ ] Improve screen reader compatibility

### Infrastructure
- [ ] Set up automated testing pipeline
- [ ] Implement automated deployment checks
- [ ] Add performance monitoring
- [ ] Implement error tracking

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or later
- Git
- npm (comes with Node.js)

### Installation

1. Clone the repository
```bash
git clone https://github.com/JustAGhosT/gwent-collection.git
```

2. Navigate to project directory
```bash
cd gwent-collection
```

3. Install dependencies
```bash
npm install
```

4. Start development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (if configured)

### Project Structure

```
gwent-collection/
├── src/                    # Source files
│   ├── components/        # React components
│   ├── assets/           # Static assets
│   ├── styles/          # CSS/SCSS files
│   └── App.tsx          # Main application component
├── public/               # Public static files
├── index.html           # Entry HTML file
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

### Build Configuration

The project uses Vite as the build tool. Configuration can be modified in `vite.config.js`:

```javascript
export default defineConfig({
  base: '/gwent-collection/',
  // ... other config options
})
```

## 🚀 Deployment

### GitHub Pages

The project is configured to deploy automatically to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a deployment.

To deploy manually:

1. Build the project
```bash
npm run build
```

2. The built files will be in the `dist` directory

## 🧪 Testing

(Add testing instructions when implemented)

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- CD Projekt Red for creating Gwent
- The Gwent community for their support
- All contributors to this project

## 🐛 Known Issues

- List any known issues or limitations here
- Include workarounds if available

## 📞 Support

If you encounter any problems or have suggestions:
1. Check the [Issues](https://github.com/JustAGhosT/gwent-collection/issues) page
2. Create a new issue if needed
3. Provide as much detail as possible including:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots if applicable

## 🔄 Version History

- v1.0.0
  - Initial release
  - Basic collection tracking functionality

## 📊 Project Status

Project is: _in development_

## 🗺️ Roadmap

- [ ] Add card filtering
- [ ] Implement search functionality
- [ ] Add deck building features
- [ ] Improve mobile responsiveness

## 💻 Tech Stack

- React
- TypeScript
- Vite
- Node.js
- GitHub Actions (CI/CD)

## 🔍 Additional Information

For more information about Gwent:
- [Official Gwent Website](https://www.playgwent.com/)
- [Gwent Wiki](https://gwent.fandom.com/)
