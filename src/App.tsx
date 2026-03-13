import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, Languages, Github, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const skills = [
    "Python", "Machine Learning", "Deep Learning", "Web Development",
    "MySQL", "DBMS", "Power BI", "Tableau", "Excel Dashboards",
    "DSA", "Git", "Cloud", "API Handling", "Restful APIs"
  ];

  const internships = [
    {
      title: "AIML Intern",
      company: "BlackHole Infiverse",
      period: "Jun 2025 – Nov 2025",
      points: [
        "Worked on ML model development, preprocessing, evaluation, and deployment.",
        "Conducted data analysis and visualization.",
        "Improved problem-solving and research through experimentation with datasets."
      ]
    },
    {
      title: "Web Developer",
      company: "iSync Evolution Pvt Ltd",
      period: "Jun 2024 – Jul 2024",
      points: [
        "Developed responsive dashboards with integrated analytics.",
        "Built interactive modules for user insights.",
        "Optimized frontend data handling for better performance."
      ]
    }
  ];

  const projects = [
    {
      name: "Parlour booking system",
      period: "Sept 2024 - Jan 2025",
      points: [
        "Built a comprehensive salon management system with role-based dashboards for both customers and administrators.",
        "Implemented appointment scheduling functionality with real-time availability tracking for stylists and services.",
        "Designed intuitive UI/UX with React and TypeScript for seamless navigation between booking, management, and analytics features."
      ],
      link: "https://github.com/tensorwhiz141/parlour-booking.git"
    },
    {
      name: "Financial Simulator",
      period: "May 2025 – Jun 2025",
      points: [
        "Built a multi-agent financial simulation system with LangGraph orchestration.",
        "Implemented RAG-powered knowledge retrieval using LangChain and MongoDB.",
        "Designed REST APIs with FastAPI and interactive UI with Streamlit."
      ],
      link: "https://github.com/tensorwhiz141/Financial_simulator.git"
    },
    {
      name: "Blood bank donation site",
      period: "May 2025 – Jun 2025",
      points: [
        "Built a comprehensive healthcare platform with role-based dashboards for patients, doctors, and administrators using React and Node.js.",
        "Implemented appointment scheduling with real-time availability tracking and integrated Cloudinary for medical image management.",
        "Designed intuitive UI/UX with React, Tailwind CSS, and Vite for seamless navigation across patient, doctor, and admin panels."
      ],
      link: "https://github.com/Nisarg-123-web/seproj.git"
    },
    {
      name: "IPL win predictor",
      period: "May 2025 – Jun 2025",
      points: [
        "Built a machine learning model to predict IPL match win probabilities in real-time.",
        "Implemented an interactive Streamlit web interface for user input and predictions.",
        "Designed a simple dashboard with team/city selection and match statistics inputs."
      ],
      link: "https://github.com/Nisarg-123-web/All-projects.git"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-[850px] shadow-2xl flex flex-col md:flex-row min-h-[1100px] overflow-hidden rounded-sm"
      >
        {/* Sidebar */}
        <div className="w-full md:w-[250px] bg-resume-green text-white flex flex-col p-8 shrink-0">
          <div className="mb-12">
            <div className="w-32 h-32 bg-white/20 rounded-full mb-6 flex items-center justify-center border-4 border-white/30 overflow-hidden mx-auto shadow-inner">
              <img 
                src="https://lh3.googleusercontent.com/d/1DQhpXbecgmXNZUIYtMIHGvf6jZ-x6baB" 
                alt="Nisarg Shah" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-2xl font-bold text-center leading-tight">NISARG AMIT SHAH</h1>
            <p className="text-center text-white/80 mt-2 font-medium">Software Engineer</p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold mb-4 border-b border-white/20 pb-1">Contact</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={14} className="shrink-0" />
                  <span>9420917957</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} className="shrink-0" />
                  <span className="break-all">nisargshah252003@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={14} className="shrink-0" />
                  <span>Mumbai, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={14} className="shrink-0" />
                  <a href="https://portfolio-n8bo.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">portfolio-n8bo.vercel.app</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold mb-4 border-b border-white/20 pb-1">Education</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold">D.J. Sanghvi College of Engineering</p>
                  <p className="text-white/70">B.Tech (2026)</p>
                </div>
                <div>
                  <p className="font-bold">Vidyadham College</p>
                  <p className="text-white/70">Class XII (2022) — 82%</p>
                </div>
                <div>
                  <p className="font-bold">Stepping Stones High School</p>
                  <p className="text-white/70">Class X (2020) — 92%</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold mb-4 border-b border-white/20 pb-1">Languages</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 px-2 py-1 rounded text-xs">English</span>
                <span className="bg-white/10 px-2 py-1 rounded text-xs">Hindi</span>
              </div>
            </section>
          </div>

          <div className="mt-auto pt-8 text-[10px] text-white/40 text-center">
            © 2026 Nisarg Shah
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 md:p-12 bg-white">
          {/* Profile Summary */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-resume-green/10 rounded-lg text-resume-green">
                <Award size={20} />
              </div>
              <h2 className="text-xl font-bold text-resume-green">Profile</h2>
            </div>
            <p className="text-resume-muted leading-relaxed text-sm">
              Passionate Software Engineer with a strong foundation in Machine Learning and Web Development. 
              Experienced in building scalable applications, optimizing frontend performance, and developing 
              intelligent ML models. Proven track record of delivering high-quality projects and excelling in 
              collaborative environments.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-resume-green/10 rounded-lg text-resume-green">
                <Code size={20} />
              </div>
              <h2 className="text-xl font-bold text-resume-green">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-resume-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-resume-green" />
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-resume-green/10 rounded-lg text-resume-green">
                <Briefcase size={20} />
              </div>
              <h2 className="text-xl font-bold text-resume-green">Experience</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
              {internships.map((job, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-2 border-resume-green rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-resume-green rounded-full" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <span className="text-xs font-semibold text-resume-green bg-resume-green/5 px-2 py-1 rounded">{job.period}</span>
                  </div>
                  <p className="text-resume-green font-medium text-sm mb-2">{job.company}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-resume-muted">
                    {job.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-resume-green/10 rounded-lg text-resume-green">
                <Github size={20} />
              </div>
              <h2 className="text-xl font-bold text-resume-green">Key Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((proj, i) => (
                <div key={i} className="p-5 border border-gray-100 rounded-xl hover:border-resume-green/30 transition-colors group bg-gray-50/30">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold group-hover:text-resume-green transition-colors">{proj.name}</h3>
                    <span className="text-[10px] text-resume-muted uppercase tracking-wider font-semibold">{proj.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-resume-muted mb-4 leading-relaxed">
                    {proj.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-resume-green flex items-center gap-1 hover:underline w-fit"
                  >
                    VIEW REPOSITORY <Github size={10} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Award size={18} className="text-resume-green" />
              <h2 className="text-sm font-bold uppercase tracking-wider">Achievements</h2>
            </div>
            <p className="text-xs text-resume-muted leading-relaxed">
              Winner of Debate & Chemistry Quiz at djsAlcheme (2023). 
              IBM Certified in Machine Learning and Data Analysis.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
