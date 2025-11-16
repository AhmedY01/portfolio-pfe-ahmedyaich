import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Download, Code, Briefcase, GraduationCap, User, X , Phone} from 'lucide-react';
import photoProfile from './assets/portfolio.png';
import a from './assets/a.png';
import b from './assets/b.png';
import c from './assets/c.png';
import d from './assets/d.png';
import e from './assets/e.png';
import f from './assets/f.png';
import g from './assets/g.png';
import h from './assets/h.png';
import i from './assets/i.png';
import rec1 from './assets/rec1.png';
import rec2 from './assets/rec2.png';
import rec3 from './assets/rec3.png';
import rec4 from './assets/rec4.png';
import rec5 from './assets/rec5.png';
import rec6 from './assets/rec6.png';
import app11 from './assets/app11.png';
import app22 from './assets/app22.png';
import app33 from './assets/app33.png';
import app44 from './assets/app44.png';
import app55 from './assets/app55.png';
import app66 from './assets/app66.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import info1 from './assets/info1.png';
import vb1 from './assets/vb1.png';
import esse1 from './assets/esse1.png';


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Agent IA - DeepSeek-R1 + Wikipedia",
      description: "Application intelligente combinant la recherche Wikipedia avec l'IA DeepSeek-R1 pour répondre aux questions de manière précise et naturelle.",
      tech: ["Python", "LangChain", "Ollama", "DeepSeek-R1", "Wikipedia API"],
      image: photoProfile, // Temporaire - à remplacer
      detailedDescription: `
Application intelligente qui combine la recherche Wikipedia avec l'intelligence artificielle DeepSeek-R1 pour répondre aux questions de manière précise et naturelle.

Fonctionnalités principales :
• Recherche automatique sur Wikipedia : extraction d'informations pertinentes depuis plusieurs sources multilingues (anglais, français, arabe, espagnol, allemand).
• Analyse par IA locale : utilisation du modèle DeepSeek-R1 (8B paramètres) exécuté localement via Ollama pour garantir la confidentialité totale.
• Modes d'interaction multiples : mode chat interactif avec historique de conversation et mode question unique pour des requêtes ponctuelles.
• Génération de réponses contextualisées : l'agent synthétise les informations Wikipedia et génère des réponses claires et structurées.
• Système de vérification : validation automatique de l'installation (Ollama, modèle IA, dépendances Python).
• Commandes avancées : historique, effacement, aide intégrée dans le mode chat.

Architecture technique :
• Module wikipedia_fetcher.py : gestion des requêtes à l'API Wikipedia avec support multilingue, recherche intelligente et extraction de résumés optimisés (max 1000 caractères).
• Module deepseek_agent.py : orchestration de l'agent IA utilisant LangChain pour coordonner la recherche et la génération de réponses via DeepSeek-R1.
• Interface principale (main.py) : CLI interactive avec bannière, sélection de langue, vérification système et modes d'utilisation flexibles.
• Exécution 100% locale : le modèle DeepSeek-R1 s'exécute entièrement sur la machine via Ollama, aucune donnée n'est envoyée à des services tiers.
• Gestion de l'historique : conservation en mémoire des conversations avec horodatage pour chaque question/réponse.

Défis techniques relevés :
• Intégration Ollama : configuration et communication avec le serveur Ollama local pour l'exécution du modèle LLM.
• Optimisation des requêtes : limitation intelligente des résumés Wikipedia pour respecter les contraintes de contexte du modèle.
• Gestion multilingue : adaptation dynamique de l'interface et des requêtes selon la langue choisie.
• Expérience utilisateur : création d'une CLI intuitive avec retours visuels (émojis, formatage) et gestion des erreurs robuste.
• Performance : équilibre entre précision (modèle 8B) et temps de réponse (15-30 secondes par question).

Performances et spécifications :
• Temps de recherche Wikipedia : 1-2 secondes.
• Temps de génération IA : 15-25 secondes (selon complexité).
• Langues supportées : 5 langues Wikipedia (EN, FR, AR, ES, DE).
• Confidentialité : 100% local, aucune donnée envoyée en ligne (sauf requêtes Wikipedia publiques).
• Prérequis système : Python 3.8+, 8-12 GB RAM, Ollama installé.

Cas d'usage :
• Recherche éducative et académique.
• Assistant personnel pour questions générales.
• Outil d'apprentissage avec sources vérifiables.
• Prototype pour applications IA locales et privées.
      `,
      screenshots: [
        // Temporaire - à ajouter plus tard
      ]
    },
    {
      title: "Application Web de Planification de Production Industrielle",
      description: "Offre une gestion complète des entités (machines, produits, tâches) ainsi qu'un module de planification interactif + visualisation.",
      tech: ["Angular", "Node.js", "MySQL", "FastAPI"],
      image: vb1,
      detailedDescription: `
Application web complète de planification et gestion de production pharmaceutique pour une usine cliente de l'entreprise VB Smart.

Fonctionnalités principales :
• Gestion des machines, produits et tâches : ajout, modification, suppression, ainsi que suivi de l’état et de la disponibilité.
• Module de planification interactif : création d’une nouvelle planification via un formulaire avancé contenant l’ensemble des détails (nom du produit, quantité à produire, date et heure de début, tâche et machine correspondantes, durée estimée).
• Visualisation en temps réel : tableaux de bord interactifs permettant la traçabilité des planifications à venir et leur modification si nécessaire.
• Diagramme de Gantt : chaque machine est représentée par une ligne, et les produits planifiés apparaissent sous forme de blocs positionnés automatiquement sur l’axe du temps. Le drag-and-drop permet également de réorganiser le planning.

Architecture technique :
• Frontend Angular avec Material Design et une gestion dynamique des données.
• Backend FastAPI modulaire (routers / schemas / CRUD) avec API REST.
• Base de données MySQL relationnelle ( modèle MCD/MLD avec relations N-N).
• Réactivité et mises à jour instantanées des données.

Défis techniques relevés :
• Synchronisation temps réel entre les modules.
• Optimisation des algorithmes de planification.
• Interface intuitive pour des données complexes.
      `,
      screenshots: [
        a,b,c,d,e,f,g,h,i
      ]
    },
    {
      title: "Système de Contrôle d'Accès par Reconnaissance Faciale",
      description: "Vise à digitaliser et sécuriser l'accès au laboratoire ESSE de l'ENET'Com grâce à un système de reconnaissance faciale intelligente déployé sur une application mobile.",
      tech: ["Flutter", "IA", "Python/Flask", "MySQL"],
      image: esse1,
      detailedDescription: `
Système intelligent de contrôle d'accès utilisant la reconnaissance faciale pour sécuriser l'accès au laboratoire ESSE de l'ENET'Com.

Fonctionnalités principales :
• Reconnaissance faciale en temps réel sans recours à une supervision humaine constante.
• Application mobile Flutter affichant les résultats de la reconnaissance.
• Gestion des utilisateurs autorisés (étudiants, enseignants, personnel).
• Enregistrement systématique de chaque tentative d’accès (réussie ou non) dans la base
 de données.
• Interface d’administration sécurisée par un mot de passe affichant l’historique d’accès
 des utilisateurs avec horodatage et photos à des fins de sécurité et de traçabilité.

Technologies d'IA utilisées :
• Modèle de détection + encodage de visages (MTCNN).
• Réseau de neurones convolutifs (CNN) pour la reconnaissance.
•Integration de Dlib et OpenCV avec python.

Architecture :
• Application mobile Flutter : déployée sur une tablette Android placée à l’entrée du
 laboratoire, cette application sert d’interface utilisateur et permet de lancer la procédure
 de reconnaissance.
• Base de données MySQL : utilisée pour stocker les données personnelles des
 utilisateurs ainsi que les chemins vers les images faciales.
• Backend Python avec Flask : chargé du traitement des images, de la reconnaissance
 faciale, de l’interaction avec la base de données et de l’exposition d’une API REST.


Performance :
• Le module de reconnaissance est testé avec des images différentes de celles qui existent dans la base de données.
• Temps de reconnaissance < 2 secondes.
• Taux de précision > 95%.
      `,
      screenshots: [
        app11, app22, app33, app44, app55, app66, rec1, rec2, rec3, rec4, rec5, rec6
      ],
      gridCols: 3
    },
    {
      title: "Plateforme de Gestion et Calcul de Salaires",
      description: "Vise à automatiser le processus mensuel d'extraction des données de suivi des salariés, leur validation ainsi que le calcul des salaires.",
      tech: ["Furious", "Make.com", "Low-Code", "API"],
      image: info1,
      detailedDescription: `
Plateforme low-code automatisant entièrement le processus de gestion et calcul des salaires mensuels pour l'entreprise INFOSQUARE Tunisie.

Fonctionnalités principales :
• Développer des fonctionnalités internes sur la plateforme Furious en utilisant les API 
disponibles pour extraire les données des collaborateurs. 
• Réalisation d’une interface pour les collaborateurs contenant chacun un récap de la 
totalité de ses données qu’il a mis au cours du mois considéré pour avoir possibilité 
de correction en cas de besoin ou validation. Chacun reçois un lien via E-Mail contenant un formulaire pré-rempli de son état de salaire.
• Calcul automatique des salaires de chaque collaborateur à travers les données 
extraites du logiciel Furious selon les règles définies et les cas particuliers.
• Réalisation d’une interface pour le comptable et l’admin d’Infosquare (pour 
vérification et validation) dans laquelle il y a les comptes rendus des données des 
collaborateurs après validation accompagnés des salaires calculées de chacun. 
• Génération d’un fichier complet prêt pour l’ordre de virement comptable.

Automatisation via Make.com :
• Scénarios d'automatisation sans code.
• Connexion à multiples sources de données.
• Synchronisation avec systèmes RH existants.
• Déclenchement automatique en fin de mois.

Avantages :
• Réduction du temps de traitement de 80%.
• Élimination des erreurs de calcul manuel.
• Traçabilité complète des opérations.
• Interface intuitive sans formation technique.
• Coût réduit grâce à l'approche low-code.

      `,
      screenshots: [
        img1,img2,img3,img4,img5,img6,img7,img8
      ]
    }
  ];

  const skills = {
    frontend: ["React", "Angular", "TypeScript", "HTML/CSS"],
    backend: ["Node.js", "Python", "Flask", "REST API", "PHP"],
    database: [ "MySQL", "PostgreSQL","Firebase"],
    tools: ["Git", "Docker", "Vercel", "VS Code", "Postman"]
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Ahmed Yaich
          </h1>
          <div className="flex gap-6">
            {['accueil', 'apropos', 'projets', 'competences', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-purple-400 transition-colors ${
                  activeSection === section ? 'text-purple-400' : ''
                }`}
              >
                {section === 'apropos' ? 'À propos' : section === 'competences' ? 'Compétences' : section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1">
             <img 
              src={photoProfile} 
              alt="Ahmed Yaich" 
              className="w-full h-full rounded-full object-cover"
             />
           </div>
          </div>
          <h1 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Software Developer | Étudiant ingénieur à l'ENET'Com
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Passionné par la création de solutions logicielles innovantes et scalables
          </p>
          <p className="text-lg text-purple-300 mb-12">
            🎓 À la recherche d'un Projet de Fin d'Études (PFE) 
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Me contacter pour un PFE
            </button>
            <a 
               href="/CV_AhmedYaich.pdf" 
               download="CV_AhmedYaich.pdf"
               className="border-2 border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2"
            >
                <Download size={20} />
                 Télécharger CV
            </a>
          </div>
          
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              À propos de moi
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <GraduationCap className="text-purple-400" />
                Formation
              </h3>
              <p className="text-gray-300 mb-4">
                Actuellement étudiant en 3ème année Génie des Systèmes Electroniques et Communication à l'ENET'Com
              </p>
              <p className="text-gray-300">
                Passionné par le développement logiciel, je cherche à approfondir mes compétences 
                à travers un projet de fin d'études stimulant dans les domaines du développement 
                full-stack, de l'IA ou d'autres domaines connexes.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Briefcase className="text-purple-400" />
                Projet PFE Recherché
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Développement d'applications innovantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Intégration DevOps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Intelligence artificielle et Machine Learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>E-commerce, FinTech, HealthTech</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    Voir le projet <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Compétences Techniques
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-semibold mb-6 capitalize flex items-center gap-3">
                  <Code className="text-purple-400" />
                  {category === 'frontend' ? 'Front-end' : 
                   category === 'backend' ? 'Back-end' : 
                   category === 'database' ? 'Bases de données' : 'Outils'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-purple-500/20">
            <p className="text-xl text-center mb-8 text-gray-300">
              Je suis actuellement à la recherche d'un Projet de Fin d'Études. 
              N'hésitez pas à me contacter pour discuter d'opportunités !
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
                <Mail className="text-purple-400" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:yaichahmed3@gmail.com" className="text-lg hover:text-purple-400 transition-colors">
                    yaichahmed3@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
                  <Phone className="text-purple-400" size={24} />
                    <div>
                     <p className="text-sm text-gray-400">Téléphone</p>
                     <a href="tel:+21697550700" className="text-lg hover:text-purple-400 transition-colors">
                       +216 97 550 700
                     </a>
                   </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-purple-500/20 py-8 text-center">
        <p className="text-gray-400">
          © 2025 Ahmed Yaich. Fait avec React et déployé sur Vercel.
        </p>
      </footer>

      {/* Modal pour les détails du projet */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header du modal */}
            <div className="sticky top-0 bg-slate-800 border-b border-purple-500/20 p-6 flex justify-between items-start z-10">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent pr-8">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
              >
                <X size={28} />
              </button>
            </div>

            {/* Contenu du modal */}
            <div className="p-6">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-purple-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description détaillée */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">📋 Description détaillée</h3>
                <div className="text-gray-300 whitespace-pre-line leading-relaxed bg-slate-700/30 p-6 rounded-xl">
                  {selectedProject.detailedDescription}
                </div>
              </div>

              {/* Captures d'écran */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">📸 Captures d'écran</h3>
                <div className={`grid gap-4 ${selectedProject.gridCols === 3 ? "md:grid-cols-3" : ""}`}>
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                      <img 
                        src={screenshot} 
                        alt={`${selectedProject.title} - capture ${index + 1}`}
                        className="w-full h-auto"
                      />
                      <div className="bg-slate-700/50 p-2 text-center text-sm text-gray-400">
                        Capture {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Liens */}
              <div className="flex gap-4 flex-wrap">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    <Github size={20} />
                    Voir sur GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
                  >
                    <ExternalLink size={20} />
                    Voir la démo live
                  </a>
                )}
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}