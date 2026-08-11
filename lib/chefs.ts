import type { Chef, Level } from './types';

/**
 * Transcribed from the eleven CVs supplied by the chefs themselves.
 *
 * Deliberately omitted from this public directory: citizenship ID numbers,
 * dates of birth, driving licence numbers, height/weight, parents' names and
 * phone numbers, and referees' direct contact details. Those appear on some of
 * the source CVs but have no place on a public page. Referees are listed by
 * name and role only; their contact details stay with the original PDF.
 *
 * Ordered by kitchen seniority.
 */
export const chefs: Chef[] = [
  {
    slug: 'thinley-jamtsho',
    name: 'Thinley Jamtsho',
    title: 'Executive Chef',
    region: 'Trongsa',
    location: 'Trongsa, Bhutan',
    level: 'Executive & Head Chef',
    years: 15,
    photo: '/chefs/thinley-jamtsho.jpg',
    photoAlt: 'Thinley Jamtsho in chef whites',
    cv: '/cv/thinley-jamtsho.pdf',
    summary:
      'Results-driven Executive Chef with over 15 years in luxury hotels and boutique properties, currently leading kitchen operations at Willing Resort in Trongsa. Known for menu engineering, food cost control, team leadership, and holding a kitchen to international hygiene standards.',
    specialities: [
      'Strategic menu planning and development',
      'Banquet and event catering',
      'Luxury hotel kitchen operations',
    ],
    accolades: [
      'Executive Chef at Willing Resort, Trongsa',
      'Six years with Aman Resorts (2005–2011)',
      'Aman Philosophy and Leadership Training graduate',
    ],
    contact: { email: 'jamtsho253@gmail.com', phone: '+975 77409672' },
    experience: [
      {
        role: 'Executive Chef',
        org: 'Willing Resort',
        location: 'Trongsa',
        period: 'Present',
        points: [
          'Leads and manages full kitchen operations to a consistent culinary standard.',
          'Designs seasonal menus around guest preference and market trends.',
          'Controls food cost, purchasing and inventory.',
          'Trains, mentors and supervises the kitchen brigade.',
          'Maintains hygiene, safety and quality control standards.',
        ],
      },
      {
        role: 'Senior Culinary Professional',
        org: 'Aman Resorts',
        period: '2005–2011',
        points: [
          'Delivered international and local cuisine in a luxury hospitality setting.',
          'Held strict hygiene and quality standards across service.',
          'Completed leadership and supervisory development programmes.',
        ],
      },
      {
        role: 'Chef / Kitchen Supervisor',
        org: 'Naksel Boutique Hotel & Spa',
        period: '2012–2013, 2017–2020',
        points: [
          'Managed kitchen operations and supervised the culinary team.',
          'Designed seasonal menus and controlled inventory.',
          'Ensured consistency in food presentation and service standards.',
        ],
      },
      {
        role: 'Chef',
        org: 'ZheyGo Express · Hotel Pedling · City Hotel Thimphu',
        period: '2013–2016',
        points: [
          'Handled high-volume food production while holding quality standards.',
          'Assisted with menu planning, stock control and cost management.',
        ],
      },
    ],
    education: [
      { qualification: 'Higher Secondary School', institution: 'Bhutan' },
    ],
    training: [
      {
        qualification: 'Aman Philosophy & Leadership Training',
        institution: 'Aman Resorts',
      },
      { qualification: 'Service Excellence', institution: 'Aman Resorts' },
      { qualification: 'Firefighting & First Aid', institution: 'Certified' },
    ],
    skills: [
      'Strategic menu planning and development',
      'Food costing and budget management',
      'Kitchen operations and workflow optimisation',
      'Team leadership and staff training',
      'HACCP and international food safety standards',
      'Inventory control and waste reduction',
      'Banquet and event catering management',
      'Quality assurance and presentation',
      'Guest experience enhancement',
      'Vendor coordination and procurement',
    ],
    languages: ['Dzongkha', 'English', 'Hindi', 'Nepali'],
    references: [{ name: 'Geden Wangdi', role: 'Manager, City Hotel Thimphu' }],
  },

  {
    slug: 'nima-nima',
    name: 'Nima Nima',
    title: 'Head Chef',
    region: 'Paro',
    location: 'Paro, Bhutan',
    level: 'Executive & Head Chef',
    years: 9,
    photo: '/chefs/nima-nima.jpg',
    photoAlt: 'Nima Nima in kitchen uniform and chef cap',
    cv: '/cv/nima-nima.pdf',
    summary:
      'Head Chef at Paro Grand Resort with nine years in the hotel industry, spanning Bhutan and Kuwait. Runs the full Indian, continental and Asian sections, and has catered for VVIP and government functions at royal banquets.',
    specialities: [
      'Indian, continental and Asian cuisine',
      'VVIP and royal banquet catering',
      'Portion control and standard recipes',
    ],
    accolades: [
      'Head Chef, Paro Grand Resort since December 2022',
      'Certificate for Best Department of the Season, Paro Grand Resort 2023',
      "DCDP at TGI Friday's, Kuwait (2019–2021)",
      'VVIP and government catering at royal banquets',
    ],
    contact: { email: 'nimaedward@gmail.com', phone: '+975 17773177' },
    experience: [
      {
        role: 'Head Chef',
        org: 'Paro Grand Resort',
        location: 'Paro',
        period: 'December 2022 – present',
        points: [
          'Handles the entire Indian, continental and Asian sections.',
          'Opens and closes the operation shift.',
          'Supports senior chefs on anything affecting guest satisfaction.',
          'Ensures safety and security of guests, colleagues and hotel property.',
          'Meets guests, collects preferences and builds the experience around them.',
        ],
      },
      {
        role: 'Demi Chef de Partie',
        org: "TGI Friday's, International Restaurant",
        location: 'Kuwait',
        period: 'March 2019 – May 2021',
        points: ['Worked to American food quality standards in a high-volume international restaurant.'],
      },
      {
        role: 'Demi Chef de Partie',
        org: 'Hotel Tashi Yoedling',
        period: 'December 2016 – August 2018',
      },
      {
        role: 'Commis I',
        org: 'Hotel Tashi Yoedling',
        period: 'January – December 2016',
      },
    ],
    education: [
      {
        qualification: 'Class XII',
        institution: 'Kelki Higher Secondary School',
        period: '2012–2013',
      },
    ],
    training: [
      {
        qualification: 'Culinary and Commercial Cooking (six months)',
        institution: 'Yarab Institute for Hospitality Management',
        period: 'July 2015 – January 2016',
      },
      {
        qualification: 'On-the-job training (two months)',
        institution: 'Hotel Jumolhari',
        period: 'November – December 2015',
      },
    ],
    skills: [
      'Indian, continental and Asian sections',
      'Portion control and standard recipes',
      'High-volume banquet catering',
      'Shift opening and closing',
      'Guest interaction and preference handling',
      'Kitchen safety and security',
    ],
    references: [
      { name: 'Sonam', role: 'Former General Manager, Paro Grand Resort' },
      { name: 'Jigme Losel', role: 'General Manager, Paro Grand Resort' },
    ],
  },

  {
    slug: 'dawa-dakpa',
    name: 'Dawa Dakpa',
    title: 'Head Chef',
    region: 'Paro',
    location: 'Paro, Bhutan',
    level: 'Executive & Head Chef',
    years: 10,
    photo: '/chefs/dawa-dakpa.jpg',
    photoAlt: 'Dawa Dakpa in a white double-breasted chef jacket',
    cv: '/cv/dawa-dakpa.pdf',
    summary:
      'Head Chef at Paro Grand Resort with ten years in the hotel industry. Works across Indian, continental and Asian dishes, with a focus on portion control, standard recipes and the guest relationships that come with them.',
    specialities: [
      'Indian, continental and Asian dishes',
      'Portion control and standard recipes',
      'Resort kitchen operations',
    ],
    accolades: [
      'Head Chef, Paro Grand Resort since October 2021',
      'Ten years of hotel industry experience',
      'Culinary and commercial cooking trained at BHITS',
    ],
    contact: { email: 'dakpa392@gmail.com', phone: '+975 17355020' },
    experience: [
      {
        role: 'Head Chef',
        org: 'Paro Grand Resort',
        location: 'Paro',
        period: 'October 2021 – present',
        points: [
          'Handles the entire Indian, continental and Asian sections.',
          'Supports senior chefs on matters affecting guest satisfaction.',
          'Ensures safety and security of guests, colleagues and hotel property.',
          'Interacts with guests, collects preferences and builds pleasant experiences.',
          'Available to work flexibly across shifts.',
        ],
      },
    ],
    education: [
      {
        qualification: 'Class XII',
        institution: 'Kelki Higher Secondary School',
        period: '2010–2011',
      },
    ],
    training: [
      {
        qualification: 'Culinary and Commercial Cooking (six months)',
        institution: 'BHITS, for hospitality management',
        period: 'July 2015 – January 2016',
      },
    ],
    skills: [
      'Indian cuisine',
      'Continental cuisine',
      'Asian cuisine',
      'Portion control',
      'Standard recipe development',
      'Guest satisfaction',
      'Flexible shift working',
    ],
    references: [
      { name: 'Damema Rika Dorji', role: 'General Manager, Paro Grand Resort' },
      { name: 'Jigme Losel', role: 'Operations Manager, Paro Grand Resort' },
    ],
  },

  {
    slug: 'ugyen-nima',
    name: 'Ugyen Nima',
    title: 'Chef',
    region: 'Thimphu',
    location: 'Thimphu, Bhutan',
    level: 'Chef',
    years: 10,
    photo: '/chefs/ugyen-nima.jpg',
    photoAlt: 'Ugyen Nima in a light kitchen jacket',
    cv: '/cv/ugyen-nima.pdf',
    summary:
      'More than ten years in hospitality, preparing continental and Asian cuisine for upscale properties. Recognised for leading kitchen teams to streamline operations, cut waste and hold food safety standards — and for the working relationships that make that possible.',
    specialities: [
      'Multi-cuisine, continental and Asian',
      'Catering and hotel events',
      'Recipe development and costing',
    ],
    accolades: [
      'Chef at City Hotel Thimphu since 2016',
      'Scored 86.83% — competent with distinction — at BISHT',
      'Fully funded scholarship from the Ministry of Industry, Commerce and Employment',
      'Certified in Thai cuisine and commercial cooking',
    ],
    contact: { email: 'nimaugyen95@gmail.com', phone: '+975 17645366' },
    experience: [
      {
        role: 'Chef',
        org: 'City Hotel',
        location: 'Thimphu',
        period: '2016 – present',
        points: [
          'Supervises food and beverage production.',
          'Coordinates hotel events and trains new staff.',
          'Develops recipes, menus and their costing.',
          'Runs monthly closing and costing.',
          'Conducts food and beverage hygiene audits.',
          'Reduced food waste and improved food quality, with consistent guest feedback.',
        ],
      },
      {
        role: 'Line Cook / Chef Assistant',
        org: 'Hotel Dewachen',
        period: 'November 2014 – September 2016',
        points: [
          'Supervised kitchen staff and coordinated with the head chef.',
          'Set up menus for staff meals and guests.',
          'Followed recipes precisely, including measuring and weighing.',
          'Presented, garnished and arranged final dishes.',
          'Managed multiple stations while maintaining kitchen efficiency.',
          'Developed a training programme for new cooks that cut onboarding time.',
        ],
      },
    ],
    education: [
      {
        qualification: 'School of Hospitality',
        institution: 'Bhutan International School of Hospitality and Tourism, Thimphu',
        period: 'September – December 2014',
        detail: 'Score 86.83% — competent with distinction. Fully funded scholarship by the Ministry of Industry, Commerce and Employment.',
      },
      {
        qualification: 'Class XII (Science)',
        institution: 'Jakar Higher Secondary School',
        period: '2011',
      },
      {
        qualification: 'Class X–XI',
        institution: 'Mongar Higher Secondary School',
        period: '2009–2010',
      },
    ],
    certificates: [
      'Thai Cuisine',
      'Commercial Cooking',
      'Food and Beverage Services Certified',
      'Emergency First Aid at Work',
      'Driving Licence',
    ],
    skills: [
      'Multi-cuisine',
      'Catering experience',
      'Recipe development and costing',
      'Hygiene auditing',
      'Computer literacy',
      'Communication skills',
      'Leadership',
      'Guest services',
    ],
    references: [{ name: 'Geden Wangdi', role: 'Manager, City Hotel Thimphu' }],
  },

  {
    slug: 'tandin-jamtsho',
    name: 'Tandin Jamtsho',
    title: 'Chef de Partie',
    region: 'Thimphu',
    location: 'Babesa, Thimphu',
    level: 'Chef de Partie',
    years: 6,
    photo: '/chefs/tandin-jamtsho.jpg',
    photoAlt: 'Tandin Jamtsho in a grey gho',
    cv: '/cv/tandin-jamtsho.pdf',
    summary:
      'Chef de Partie with over six years across luxury hotels and high-volume commercial kitchens in Bhutan, India and Qatar — including the 2022 FIFA World Cup in Doha. Works à la carte and buffet, leads junior team members, and is comfortable in multicultural kitchen environments.',
    specialities: [
      'À la carte and buffet service',
      'International cuisine',
      'High-volume kitchen operations',
    ],
    accolades: [
      'Chef de Partie at Six Senses Bhutan',
      'Culinary team, FIFA World Cup 2022 — W Doha Hotels & Residences',
      'Train the Trainer, Six Senses (2026)',
      'Advanced Diploma, International School of Hospitality Management',
    ],
    contact: { email: 'Jamtshotandin88@gmail.com', phone: '+975 17715892' },
    experience: [
      {
        role: 'Chef de Partie',
        org: 'Six Senses',
        location: 'Bhutan',
        period: 'January 2026 – present',
        points: [
          'Delivers high-quality meals through high-volume service while holding hygiene standards, teamwork and operational efficiency.',
        ],
      },
      {
        role: 'Demi Chef de Partie',
        org: 'Six Senses',
        location: 'Bhutan',
        period: 'May 2024 – 2026',
        points: [
          'Ensured quality in the assigned department and managed materials control.',
          'Created dishes using seasonal and locally available ingredients.',
          'Monitored stock levels and minimised waste through portion management.',
        ],
      },
      {
        role: 'Head Chef',
        org: 'Hotel Nordhenma (3-star)',
        period: 'March – May 2023',
        points: [
          'Created dishes to food cost and portion control targets.',
          'Prepared seasonal specials.',
          'Ran both à la carte and buffet operations.',
        ],
      },
      {
        role: 'Commis — Extended Culinary Intern, FIFA World Cup 2022',
        org: 'W Doha Hotels and Residences',
        location: 'Qatar',
        period: 'November – December 2022',
        points: [
          'Executed preparation and plating in a high-volume kitchen through the tournament, meeting tight deadlines for thousands of international guests.',
          'Worked daily with an international culinary team, adapting to different kitchen hierarchies, languages and standards.',
          'Held food quality standards through peak tournament rushes.',
        ],
      },
      {
        role: 'Commis I',
        org: 'Fairfield by Marriott',
        period: 'January 2022 – January 2023',
        points: [
          'Prepared, cooked and served food to agreed standards under senior chefs.',
          'Applied working knowledge of cooking trends and best practice.',
        ],
      },
      {
        role: 'Commis II and III',
        org: 'Fairfield by Marriott',
        period: 'January 2021 – January 2022',
        points: [
          'Handled deliveries, food rotation, cleaning, sanitisation and trash management.',
          'Maintained service levels while managing work to time.',
        ],
      },
      {
        role: 'On-the-job training',
        org: 'Fairfield by Marriott',
        period: 'November 2020 – April 2021',
        points: [
          'Food prep, mise en place and workstation stocking ahead of service.',
          'Kitchen cleanliness and health and safety compliance.',
          'Supported line cooks and senior chefs through busy service.',
        ],
      },
    ],
    education: [
      {
        qualification: 'Food Technology, Menu Planning, Food Knowledge',
        institution: 'BIHT — Bongde Institute of Hospitality and Tourism',
        period: 'August 2021 – January 2022',
        detail: 'Based on the Swiss Learning Exchange Foundation curriculum.',
      },
      {
        qualification: 'Advanced Diploma in Hospitality Management',
        institution: 'ISHM — International School of Hospitality Management',
        period: 'August 2020 – January 2022',
      },
      {
        qualification: 'Class XII',
        institution: 'Yangchenphug Higher Secondary School',
        period: '2018',
      },
      {
        qualification: 'Class X',
        institution: 'Phelkhil Higher Secondary School',
        period: '2015',
      },
    ],
    certificates: [
      'Course Certificate — Bongde Institute of Hotel and Tourism, with on-the-job training',
      'Advanced Diploma — International School of Hospitality Management',
      'FIFA World Cup 2022 — W Doha Hotels and Residences',
      'Certificate of Completion, Indian Cuisine Training — Six Senses (December 2023)',
      'Certificate of Achievement, Train the Trainer — Six Senses (2026)',
    ],
    skills: [
      'Commercial kitchen expertise',
      'Communication skills',
      'Working under pressure',
      "Food Handler's Licence",
      'Management skills',
      'Inventory and stock checks',
    ],
    languages: ['English', 'Dzongkha', 'Hindi', 'Nepali'],
    interests: [
      'Cooking',
      'Reading cookery books',
      'Exploring modern technology',
      'Playing the guitar',
    ],
    references: [
      { name: 'Sonam Tshering', role: 'Director, Bongde Institute of Hotel and Tourism' },
      { name: 'Chef Ronith', role: 'Culinary Teacher, ISHM Kolkata' },
      { name: 'Chef Rupak Ghosh', role: 'Demi Chef de Partie, Fairfield by Marriott' },
      { name: 'Chef Juan Pablo', role: 'Sous Chef, W Doha Hotels and Residences' },
      { name: 'Chef Milan Magar', role: 'Chef de Partie, Six Senses' },
      { name: 'Chef Choda Jamtsho', role: 'Executive Chef, Six Senses' },
    ],
  },

  {
    slug: 'tashi-penjor',
    name: 'Tashi Penjor',
    title: 'Demi Chef de Partie',
    region: 'Thimphu',
    location: 'Thimphu, Bhutan',
    level: 'Chef de Partie',
    photo: '/chefs/tashi-penjor.jpg',
    photoAlt: 'Tashi Penjor in a dark chef jacket',
    cv: '/cv/tashi-penjor.pdf',
    summary:
      'Demi Chef de Partie at Tashi Yoedling, working across continental, Indian and western cuisine. Came up through an internship at Pemako and looks for kitchens that push him to grow professionally.',
    specialities: ['Continental cuisine', 'Indian cuisine', 'Western cuisine'],
    accolades: [
      'Demi Chef de Partie at Tashi Yoedling',
      'Internship at Pemako, Thimphu',
      'Gold medal, inter-school table tennis',
      'First place, inter-school basketball',
    ],
    contact: { email: 'tpenjor710@gmail.com', phone: '+975 77650707' },
    experience: [
      {
        role: 'Demi Chef de Partie',
        org: 'Tashi Yoedling',
        location: 'Thimphu',
        period: 'January 2025 – present',
      },
      {
        role: 'Demi Chef de Partie (internship)',
        org: 'Pemako',
        period: 'June – September 2024',
      },
    ],
    education: [
      { qualification: 'Higher Secondary School', institution: 'Bhutan', period: '2018' },
    ],
    certificates: [
      'Certificate award, inter-school table tennis competition',
      'First position, inter-school basketball competition',
      'Third position, inter-dzongkhag football competition',
      'Gold medal, inter-school table tennis competition',
    ],
    skills: [
      'Continental cuisine',
      'Indian cuisine',
      'Western cuisine',
      'Decision making',
    ],
    languages: ['English', 'Hindi', 'Dzongkha', 'Nepali'],
    interests: ['Sports', 'Workout'],
    references: [
      { name: 'Tshewang Dhendup', role: 'Head Chef, Tashi Yoedling' },
    ],
  },

  {
    slug: 'pema-tashi',
    name: 'Pema Tashi',
    title: 'Chef',
    region: 'Thimphu',
    location: 'Babesa, Thimphu',
    level: 'Chef',
    years: 9,
    photo: '/chefs/pema-tashi.jpg',
    photoAlt: 'Pema Tashi in a dark gho',
    cv: '/cv/pema-tashi.pdf',
    summary:
      'Nine years in professional kitchens across Bhutan and India, from resort service to running his own restaurant. Specialises in Chinese, Indian, Bhutanese and Thai cuisine, and works efficiently under pressure in fast-paced kitchens.',
    specialities: [
      'Chinese, Indian, Bhutanese and Thai cuisine',
      'Food preparation and presentation',
      'Kitchen operations',
    ],
    accolades: [
      'Nine years of professional kitchen experience',
      'Former owner and chef of his own restaurant',
      'Three-year professional culinary training at Hotel Sher-E-Punjab, Gangtok',
    ],
    contact: { phone: '+975 77769384' },
    experience: [
      {
        role: 'Chef',
        org: 'Virama Resort',
        location: 'India',
        period: '2 years',
        points: [
          'Prepared high-quality meals while maintaining food safety and hygiene standards.',
          'Assisted in daily kitchen operations in a fast-paced environment.',
        ],
      },
      {
        role: 'Chef',
        org: 'Hotel Kisa',
        period: '1 year',
        points: [
          'Prepared and presented a variety of dishes.',
          'Maintained cleanliness, quality and consistency in food preparation.',
        ],
      },
      {
        role: 'Owner & Chef',
        org: 'Self-owned restaurant',
        points: [
          'Managed daily restaurant operations: menu planning, food preparation, inventory and customer service.',
        ],
      },
      {
        role: 'Chef',
        org: 'Hotel Ratna Vara',
        period: '2 years',
        points: [
          'Prepared a wide range of dishes to high standards of taste and presentation.',
        ],
      },
    ],
    education: [],
    training: [
      {
        qualification: 'Professional Culinary Training',
        institution: 'Hotel Sher-E-Punjab, Gangtok',
        period: '3 years',
        detail:
          'Hands-on training in food preparation, kitchen operations, hygiene, food safety and professional cooking techniques.',
      },
    ],
    skills: [
      'Chinese cuisine',
      'Indian cuisine',
      'Bhutanese cuisine',
      'Thai cuisine',
      'Food preparation and presentation',
      'Kitchen operations',
      'Food safety and hygiene',
      'Inventory and stock control',
      'Teamwork and time management',
    ],
  },

  {
    slug: 'pema-samdrup',
    name: 'Pema Samdrup',
    title: 'Chef',
    region: 'Sarpang',
    location: 'Gelephu, Sarpang',
    level: 'Chef',
    photo: '/chefs/pema-samdrup.jpg',
    photoAlt: 'Pema Samdrup in a dark gho',
    cv: '/cv/pema-samdrup.pdf',
    summary:
      'Culinary professional with hands-on experience across a range of kitchen environments, from an ecolodge to heritage hotels. Brings food preparation, kitchen management and menu planning, and is still adding to all three.',
    specialities: [
      'Food preparation and kitchen operations',
      'Menu execution',
      'Kitchen safety and hygiene',
    ],
    accolades: [
      'Six-month Hospitality certificate at Bongde Institute of Hotel and Tourism, Paro',
      'Two years at Berti Ecolodge',
      'Internship at Hotel Zhiwaling Heritage, Paro',
    ],
    contact: { email: 'samdruppema56@gmail.com', phone: '+975 17720518' },
    experience: [
      {
        role: 'Chef',
        org: 'Hotel Yarkhel',
        period: 'April – August 2025',
        points: ['Supported daily kitchen operations and food preparation over four months.'],
      },
      {
        role: 'Chef',
        org: 'Paro Heritage',
        period: 'August 2024 – March 2025',
        points: ['Handled kitchen operations and menu execution across eight months.'],
      },
      {
        role: 'Chef (internship)',
        org: 'Hotel Zhiwaling Heritage',
        location: 'Paro',
        period: 'June – July 2024',
        points: [
          'Assisted in preparing high-quality dishes and maintaining kitchen standards.',
        ],
      },
      {
        role: 'Chef',
        org: 'Berti Ecolodge',
        period: 'January 2021 – June 2023',
        points: [
          'Two years of hands-on culinary preparation and guest service.',
        ],
      },
    ],
    education: [
      {
        qualification: 'Class XII',
        institution: 'Losel Gyatsho Academy',
        period: '2020',
        detail: '73%',
      },
      {
        qualification: 'Class X',
        institution: 'Zhemgang Central School',
        period: '2017',
        detail: '65.6%',
      },
    ],
    training: [
      {
        qualification: 'Certificate in Hospitality (six months)',
        institution: 'Bongde Institute of Hotel and Tourism, Paro',
        detail: 'Food Production, Food and Beverage Service, and Room Division.',
      },
      {
        qualification: 'Acting — Black Box Theatre (three months)',
        institution: 'Skills Development Programme',
      },
    ],
    skills: [
      'Cooking and food preparation',
      'Kitchen safety and hygiene',
      'Working under pressure',
      'Teamwork and communication',
      'Basic inventory and stock management',
    ],
    languages: ['Dzongkha', 'English', 'Lhotshampa'],
  },

  {
    slug: 'karma-kelzang-namgay',
    name: 'Karma Kelzang Namgay',
    title: 'Culinary Science Graduate',
    region: 'Thimphu',
    location: 'Thimphu, Bhutan',
    level: 'Emerging talent',
    photo: '/chefs/karma-kelzang-namgay.jpg',
    photoAlt: 'Karma Kelzang Namgay behind a dim sum station in chef blacks',
    cv: '/cv/karma-kelzang-namgay.pdf',
    summary:
      'Culinary science graduate of Chandigarh University with a passion for innovative food preparation and a grounding in food science. Works across recipe development, food safety, menu planning, food processing and quality control — and has twice represented Bhutanese cuisine at the Corporate Advocate Board.',
    specialities: [
      'Food science and product development',
      'Continental cuisine',
      'Bhutanese cuisine representation',
    ],
    accolades: [
      'BSc in Culinary Science, Chandigarh University — CGPA 7.28/10',
      'Represented Bhutanese cuisine at the Corporate Advocate Board, 2023 and 2025',
      'Chef Conclave — innovation and regeneration in food production',
      'Continental cuisine intern, Le Méridien Thimphu',
    ],
    contact: { email: 'karmaknamgyelnoobiekaku@gmail.com', phone: '+975 17736052' },
    experience: [
      {
        role: 'Bhutanese Cuisine Representative',
        org: 'Corporate Advocate Board',
        period: '2023 and 2025',
        points: [
          'Represented Bhutanese cuisine at the event, managing preparation and presentation.',
        ],
      },
      {
        role: 'Participant',
        org: 'Chef Conclave',
        points: ['Innovation and regeneration in food production.'],
      },
      {
        role: 'Continental Cuisine Intern',
        org: 'Le Méridien',
        location: 'Thimphu',
        period: 'July – November 2024',
        points: [
          'Learned food processing and management with on-field experience through live stations and outdoor catering.',
        ],
      },
      {
        role: 'Management and Development Intern',
        org: 'Peday Bistro',
        location: 'Thimphu',
        period: 'January – June 2021',
        points: [
          'Focused on prep during kitchen operation and helped with kitchen management.',
        ],
      },
    ],
    education: [
      {
        qualification: 'BSc in Culinary Science',
        institution: 'Chandigarh University',
        period: '2022–2025',
        detail:
          'CGPA 7.28/10. Coursework in food science and technology, culinary maths, continental cuisine and food hazards.',
      },
      {
        qualification: 'Class XII',
        institution: 'Losel Gyatsho Academy',
        period: '2021',
        detail: '74.5%, with a focus on mathematics and economics in the arts stream.',
      },
    ],
    certificates: [
      'Gender Bias Awareness Training: leadership strategies for women, becoming a male ally at work',
      'Entrepreneurship: cultivating presence and impact in a live and virtual world',
      'Critical Thinking: a more creative approach to problem solving and quick decisions',
      'Creativity and Innovation: leading with a futuristic approach',
    ],
    projects: [
      {
        title: 'Innovative food preservation methods for extended shelf life and nutrient retention',
        detail: 'Research project on food preservation.',
      },
      {
        title: 'Sustainable packaging alternatives for takeaway and delivery services',
        detail:
          'Identified challenges and opportunities in implementing sustainable packaging within the food industry.',
      },
    ],
    skills: [
      'Knife skills',
      'Cooking techniques',
      'Soup and sauce preparation',
      'Meat, poultry and seafood prep',
      'Plating and presentation',
      'Food safety and sanitation',
      'Kitchen equipment operation',
      'Communication and teamwork',
      'Time management and adaptability',
    ],
  },

  {
    slug: 'phurpa-wangdi',
    name: 'Phurpa Wangdi',
    title: 'Commis I',
    region: 'Paro',
    location: 'Paro, Bhutan',
    level: 'Commis',
    photo: '/chefs/phurpa-wangdi.jpg',
    photoAlt: 'Phurpa Wangdi in a white kitchen jacket and cap',
    cv: '/cv/phurpa-wangdi.pdf',
    summary:
      'Commis I at Bhutan Spirit Sanctuary and a member of its pre-opening team — the first all-inclusive sanctuary concept in Bhutan. Enjoys being set a challenge and then overcoming it, and works as well alone as in a brigade.',
    specialities: [
      'All-section basics',
      'Food safety and hygiene practice',
      'Stock acceptance and storage',
    ],
    accolades: [
      'Pre-opening team member, Bhutan Spirit Sanctuary — the first all-inclusive sanctuary concept in Bhutan',
      'Certified in Food Production by the Bhutan Exchange Foundation, Switzerland',
    ],
    contact: { email: 'pwangdi787@gamil.com', phone: '+975 17601787' },
    experience: [
      {
        role: 'Commis I (pre-opening team member)',
        org: 'Bhutan Spirit Sanctuary',
        location: 'Bhutan',
        period: 'August 2018 – present',
        points: [
          'Prepares, cooks and serves food to high standards of preparation and presentation across a 24-room property.',
          'Executes daily and weekly procedures including temperature checks, food labelling, dating and storage.',
          'Assists with acceptance and storage of deliveries, reconciling inventory against purchase orders and reporting damaged goods.',
          'Maintains a safe working environment to OSHA standards, removing hazards and identifying equipment malfunctions.',
        ],
      },
    ],
    education: [
      { qualification: 'High School Graduate', institution: 'Bhutan' },
    ],
    training: [
      {
        qualification: 'Certified in Food Production',
        institution: 'Bhutan Exchange Foundation, Switzerland',
      },
    ],
    skills: [
      'Basic knowledge of all sections',
      'Producing good quality basic food',
      'Health and safety understanding',
      'Basic food hygiene practices',
      'Oral communication',
      'Team management',
      'Attention to detail',
      'Adaptability to new ideas and processes',
      'Working unsupervised',
    ],
  },

  {
    slug: 'sonam-phuntsho',
    name: 'Sonam Phuntsho',
    title: 'Commis III',
    region: 'Paro',
    location: 'Shaba, Paro',
    level: 'Commis',
    photo: '/chefs/sonam-phuntsho.jpg',
    photoAlt: 'Sonam Phuntsho in a checked gho',
    cv: '/cv/sonam-phuntsho.pdf',
    summary:
      'Commis III in the food and kitchen department at Bhutan Spirit Sanctuary, Paro. Trained in commercial cookery and bakery at the Bhutan Institute of Tourism and Industry, and has worked across several Thimphu kitchens.',
    specialities: [
      'Commercial cookery',
      'Bakery',
      'Working across stations',
    ],
    accolades: [
      'Commis III at Bhutan Spirit Sanctuary, Paro',
      'Commercial Cookery, Bhutan Institute of Tourism and Industry',
      'Three-month internship at Pemako Hotel, Thimphu',
    ],
    contact: { email: 'sonampimpsay245@gmail.com', phone: '+975 17563099' },
    experience: [
      {
        role: 'Commis III',
        org: 'Bhutan Spirit Sanctuary',
        location: 'Paro',
        period: 'Present',
        points: ['Works in the food and kitchen department.'],
      },
      {
        role: 'Chef Assistant (internship)',
        org: 'Pemako Hotel',
        location: 'Thimphu',
        period: 'March – May 2025',
        points: [
          'Three-month internship in the food and kitchen department, placed by the Bhutan Institute of Tourism and Industry.',
        ],
      },
      {
        role: 'Chef Assistant',
        org: 'Migmar Hotel',
        location: 'Thimphu',
        period: 'April – July 2024',
      },
      {
        role: 'Intern, ICT Section',
        org: 'Mongar Dzongkhag',
        period: '3 months',
      },
    ],
    education: [
      {
        qualification: 'Commercial Cookery',
        institution: 'Bhutan Institute of Tourism and Industry, Thimphu',
        period: 'December 2024 – May 2025',
      },
      {
        qualification: 'Bakery',
        institution: 'Bhutan Institute of Tourism and Industry, Thimphu',
        period: '17–26 February 2025',
      },
      {
        qualification: 'Class XII (Commerce)',
        institution: 'Desi High School',
        period: '2020',
        detail: '66.75%',
      },
      {
        qualification: 'Class X (Economics)',
        institution: 'Mongar Higher Secondary School',
        period: '2016',
        detail: '62.8%',
      },
    ],
    skills: [
      'Working across different stations',
      'Multitasking',
      'Strong work ethic',
      'Time management',
      'Working independently',
      'Quick learner',
    ],
    languages: ['Sharchop', 'Dzongkha', 'English'],
  },
];

export const levels: Level[] = [
  'Executive & Head Chef',
  'Chef de Partie',
  'Chef',
  'Commis',
  'Emerging talent',
];

export const regions: string[] = Array.from(
  new Set(chefs.map((c) => c.region)),
).sort();

export function getChef(slug: string): Chef | undefined {
  return chefs.find((c) => c.slug === slug);
}

/** Previous / next chef, wrapping around the directory. */
export function getNeighbours(slug: string) {
  const i = chefs.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: chefs[(i - 1 + chefs.length) % chefs.length],
    next: chefs[(i + 1) % chefs.length],
  };
}
