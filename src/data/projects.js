import seatmatrixDashboard from "../assets/projects/seatmatrix-dashboard.png"
import iplImage from "../assets/projects/ipl-score-analysis.png"
import krishishayogImage from "../assets/projects/krishishayog.png"
const projects = [
  {
  id: "seatmatrix-ai",
  number: "01",
  category: "AI • SOFTWARE • AUTOMATION",
  title: "SeatMatrix AI",
  description:
    "An intelligent examination seating arrangement system designed to automate student allocation, hall management and structured seating output.",
  technologies: [
    "Python",
    "Flask",
    "Data Processing",
    "Automation",
  ],
  github:
    "https://github.com/Nishantpatil787/SeatMatrix-AI",
  image: seatmatrixDashboard,
},
 {
  id: "ipl-dashboard",
  number: "02",
  category: "DATA • ANALYTICS • VISUALIZATION",
  title: "IPL Score Analysis",
  description:
    "A Python-based IPL data analysis project exploring team performance, scoring trends, player statistics and match insights.",
  technologies: [
    "Python",
    "Pandas",
    "Matplotlib",
    "Seaborn"
  ],
  github:
    "https://github.com/Nishantpatil787/IPL-Score-Analysis",
  image: iplImage,
},
  {
    id: "krishishayog",
    number: "03",
    category: "REAL WORLD • TECHNOLOGY",
    title: "Krishishayog",
    description:
      "A technology-focused project aimed at addressing practical agricultural challenges through digital solutions.",
    technologies: [
      "Technology",
      "Problem Solving",
    ],
    image: krishishayogImage,
  },
]

export default projects