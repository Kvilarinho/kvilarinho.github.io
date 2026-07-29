import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import EducationPage from './pages/EducationPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactsPage from './pages/ContactsPage'
import ProjectPage from './pages/ProjectPage'
import '../assets/css/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)