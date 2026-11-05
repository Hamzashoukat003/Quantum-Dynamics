// All company content is taken from the official "QD PROFILE - updated.docx" company profile.
import { ExperienceItem, ExperienceSector, IndustryItem, LeadershipMember, ServiceItem, TechnicalSpec } from '../types';
import heroImg from '../assets/images/hero_industrial_engineering_1793617580913.jpg';
import steelFabricationImg from '../assets/images/service_steel_fabrication_1793617581545.jpg';
import oilPetrochemImg from '../assets/images/industry_oil_petrochem_1793617582386.jpg';
import infrastructureErectionImg from '../assets/images/project_infrastructure_erection_1793617582040.jpg';
import refineryImg from '../assets/images/refinery.jpg';
import weldingImg from '../assets/images/welding.jpg';
import scaffoldCrewImg from '../assets/images/scaffold-crew.jpg';
import powerLinesImg from '../assets/images/power-lines.jpg';
import processPipingImg from '../assets/images/process-piping.jpg';
import hseSiteImg from '../assets/images/hse-site-team.jpg';
import siteTeamImg from '../assets/images/site-team.jpg';
import industrialPortImg from '../assets/images/industrial-port.jpg';
import earthworksImg from '../assets/images/earthworks.jpg';
import towerCranesImg from '../assets/images/tower-cranes.jpg';
import maintenanceServiceImg from '../assets/images/service_industrial_maintenance.jpg';
import fabricationServiceImg from '../assets/images/service_fabrication_erection.jpg';

// The flipbook company profile is copied into public/profile by "npm run sync:profile".
export const PROFILE_BOOK = '/profile/index.html';
export const PROFILE_PDF = '/profile/QD-Company-Profile.pdf';

export const COMPANY_INFO = {
  name: 'Quantum Dynamics Limited',
  shortName: 'QD',
  tagline: 'Engineering the Future',
  domain: 'www.qdl.com.pk',
  address: 'Shakir Kot, Airport Road, Sadiqabad, Rahimyarkhan',
  emailGeneral: 'info@qdl.com.pk',
  phonePrimary: '0300-8671833',
  phones: [
    { label: 'CEO', tel: '0300-8671833' },
    { label: 'Director of Finance', tel: '0300-6796379' },
  ],
  stats: [
    { value: '2 Decades', label: "Founders' experience in installation & erection" },
    { value: '400+', label: 'Trained workers & technicians' },
    { value: '3 Zeros', label: 'Zero injury · Zero accident · Zero life loss' },
    { value: '5', label: 'Business sectors served' },
  ],
};

// Turns "0300-8671833" into "+923008671833" for tel: links.
export const telHref = (phone: string) => `tel:+92${phone.replace(/\D/g, '').replace(/^0/, '')}`;

// The site has no backend, so enquiry forms open the visitor's email app addressed to QD.
export const openEnquiryEmail = (subject: string, fields: [string, string][]) => {
  const body = fields
    .filter(([, value]) => value.trim() !== '')
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');
  window.location.href = `mailto:${COMPANY_INFO.emailGeneral}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const REGISTRATION = [
  { label: 'Company Name', value: 'Quantum Dynamics Limited' },
  { label: 'PEC Registration No.', value: 'Mech/53430' },
  { label: 'NTN No.', value: '3817212-7' },
  { label: 'PST No.', value: 'P3817212-7' },
  { label: 'Incorporation No.', value: '0077000' },
  { label: 'General Sales Tax No.', value: '32-77-8761-987-47' },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  { name: 'Kaiwan Danish', role: 'Chief Executive Officer', phone: '0300-8671833', email: 'kaiwandanish@gmail.com' },
  { name: 'Shafiq Aslam', role: 'Director of Finance', phone: '0300-6796379', email: 'shafiqaslamsas@gmail.com' },
  { name: 'Awais Ali', role: 'Director of Tech/Operations', phone: '0300-2980098', email: 'aavais@outlook.com' },
];

export const IMAGES = {
  hero: heroImg,
  steelFabrication: steelFabricationImg,
  oilPetrochem: oilPetrochemImg,
  infrastructureErection: infrastructureErectionImg,
  refinery: refineryImg,
  welding: weldingImg,
  scaffoldCrew: scaffoldCrewImg,
  powerLines: powerLinesImg,
  processPiping: processPipingImg,
  hseSite: hseSiteImg,
  siteTeam: siteTeamImg,
  industrialPort: industrialPortImg,
  earthworks: earthworksImg,
  towerCranes: towerCranesImg,
  industrialMaintenance: maintenanceServiceImg,
  fabricationErection: fabricationServiceImg,
};

export const INTRO = {
  ambition:
    'Quantum Dynamics aims to become a world-class construction company — with its brand as the forerunner, management as the foundation, people at the core, innovation as the driving force, robust systems as the guarantee, information as the breakthrough and culture as the guide.',
  blessing:
    'With the blessings of Almighty Allah, QD is moving swiftly towards a splendid future through intelligence, courage and honesty.',
  established:
    'Since its establishment, the company has grown successfully and remains driven by excellence across the oil, chemical and petrochemical, power, cement, fertilizer and infrastructure sectors.',
  founders:
    'Even before QD was established, its founders had been involved in equipment installation, fabrication, and the erection of piping networks, tanks and steel structures for two decades.',
  position:
    "QD is a construction company with a distinct position in the market and very good relations with its clients. QD's main business is general contracting for mechanical and civil works, and equipment manufacturing.",
  team:
    "QD's team of executives and engineers is highly qualified, energetic and richly experienced in the construction industry. QD also has a team of more than 400 workers and technicians who have undergone specialised training in design, planning, fabrication, erection, insulation, sandblasting and painting.",
  timely:
    "Timely completion of every ongoing project always receives our highest priority. QD's activities have also been extended to diversified, large-scale projects of national significance — especially cement, fibre, chemical, oil refinery and power generation plants — backed by complete technical know-how.",
  quality:
    'The company is well equipped with modern tools and equipment, and takes special pride in its latest quality control facilities, which monitor, record and maintain the highest quality standards to the entire satisfaction of our valued clients. Emphasis on quality at every stage of design, planning and installation is the hallmark of our organisation, and has earned our team an enviable reputation in both the public and private sectors.',
  owners:
    'QD enjoys good relations and cooperation with project owners, the result of excellent coordination in every aspect — from civil works and equipment configuration to realising the best return on project investment.',
};

// Homepage "Brief Introduction": positions QD as an engineering and EPC company, not only a builder.
export const BRIEF_INTRO = {
  heading: 'An Engineering & Manufacturing Company with a Distinct Market Position',
  paragraphs: [
    'Quantum Dynamics Limited is an established engineering and industrial services company, built on more than two decades of hands-on experience in industrial projects. Our founders began in equipment installation, fabrication and erection, and that practical background still shapes how we plan and deliver work today.',
    'We combine mechanical and civil engineering with equipment manufacturing and installation. Our capabilities cover steel structures, storage tanks, piping networks, industrial erection, welding, insulation, sandblasting and painting, serving the oil and gas, petrochemical, chemical, cement, fertilizer, power generation and infrastructure sectors.',
    'Every project is executed with a disciplined focus on quality, safety, cost efficiency and timely delivery. Our experienced engineers, technical specialists and skilled workforce are guided by trust, honesty, integrity and professionalism, which is how we earn lasting partnerships with our clients.',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'industrial-maintenance-shutdown',
    title: 'Industrial Maintenance & Shutdown',
    tagline: 'Repair, modification and shutdown support for process plants.',
    description:
      'Planned and emergency maintenance, repair and modification of process plant equipment, including pressure vessels, storage tanks, heat exchangers, air coolers, columns, pipelines, flares and stacks, carried out during plant shutdowns.',
    image: IMAGES.industrialMaintenance,
    capabilities: [
      'Pressure Vessel Repair/Modification (Internals & Nozzles)',
      'Storage Tank Repair/Modification (API 653)',
      'Heat Exchanger Maintenance & Repair',
      'Air Cooler Cleaning, Nozzle Replacement & Tube Repairs',
      'Columns Tray Support Ring & Floor Replacement, Modifications',
      'Pipeline Construction, Repair & Modification',
      'Flare & Stack Maintenance and Repairs',
    ],
  },
  {
    id: 'fabrication-erection',
    title: 'Fabrication & Erection',
    tagline: 'Pipelines, process piping and tailored fabrication solutions.',
    description:
      'We offer comprehensive industrial fabrication and erection works for various construction needs, including pipelines, and process piping (metallic/non-metallic). Our expertise allows us to deliver high-quality, innovative, and tailored solutions.',
    image: IMAGES.fabricationErection,
    capabilities: [
      'Pipeline fabrication and erection',
      'Process piping (metallic)',
      'Process piping (non-metallic)',
      'Tailored, high-quality fabrication solutions',
    ],
  },
];

export const TECHNICAL_SPECS: TechnicalSpec[] = [
  { item: 'Crude oil storage tanks', detail: 'Floating-roof type, 62 m diameter', figure: '06', unit: 'Nos.' },
  { item: 'Gas turbine', detail: 'Installation', figure: '175', unit: 'MW' },
  { item: 'Pre-heater steel structure', detail: '263 ft height', figure: '750', unit: 'ton' },
  { item: 'Storage shed', detail: '135 m long × 52 m wide', figure: '135×52', unit: 'm' },
  { item: 'Boiler (H.T. boiler)', detail: '70 ton, 40 TPD', figure: '70', unit: 'ton' },
  { item: 'Cooling water storage tanks', detail: 'Fabrication and erection', figure: '08', unit: 'Nos.' },
];

export const TRADES = ['Design', 'Planning', 'Fabrication', 'Welding', 'Erection', 'Insulation', 'Sandblasting', 'Painting'];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description:
      'Storage tanks, piping networks and steel structures for oil refineries, gas fields and oil fields, including floating-roof crude oil storage tanks of 62 m diameter.',
    image: IMAGES.refinery,
    applications: ['Crude oil storage tanks (floating-roof)', 'Oil storage tanks', 'Process and utility piping', 'Pipe rack structures'],
    references: ['Attock Oil Refinery', 'Pak-Arab Refinery', 'Zamzama Gas Field (BHP)', 'Mazari Oil Field', 'Khaur Oil & Gas Battery (POL)', 'OMV Pakistan'],
  },
  {
    id: 'chemical-petrochemical',
    title: 'Chemical & Petrochemical',
    description:
      'Equipment installation, fabrication and piping for chemical, polyester and fibre plants, where QD has extended its activities to diversified projects of national significance.',
    image: IMAGES.industrialPort,
    applications: ['Equipment installation', 'Nitrogen plant piping', 'Process piping', 'Insulation, sandblasting and painting'],
    references: ['ICI Soda Ash Works', 'ICI Polyester Plant', 'Dewan Salman Acrylic Plant', '44 KTPA Polyester Staple Fibre Project'],
  },
  {
    id: 'power-cement',
    title: 'Power & Cement',
    description:
      'Turbine and generator installation for power generation plants, and heavy steel structures for cement plants — including a 750 ton, 263 ft pre-heater steel structure.',
    image: IMAGES.powerLines,
    applications: ['Gas turbine installation (175 MW)', 'Diesel power generators', 'Pre-heater steel structures', 'Boilers and cooling towers'],
    references: ['Thermal Power Station, Muzaffargarh', 'Doosan Power Plant, Daharki', 'D.G. Cement', 'Fauji Cement', 'Chakwal Cement Project'],
  },
  {
    id: 'fertilizer-infrastructure',
    title: 'Fertilizer & Infrastructure',
    description:
      'Annual scaffolding, sandblasting, turnaround and modification jobs for fertilizer plants, along with building construction and infrastructure works.',
    image: IMAGES.earthworks,
    applications: ['Annual scaffolding and sandblasting', 'Turnaround (TA) modification jobs', 'Knock-out drums, cyclones and suction ducts', 'Building construction'],
    references: ['FFCL Mukhtar Garh', 'FFBL Port Qasim', 'Engro Daharki', 'Defence Housing Scheme Phase-2'],
  },
  {
    id: 'food',
    title: 'Food Industries',
    description:
      'Food industries are one of the business sectors QD serves, drawing on the same mechanical, civil, piping and equipment installation capabilities.',
    image: IMAGES.processPiping,
    applications: ['Equipment installation', 'Utility piping', 'Storage tanks', 'Building construction'],
    references: [],
  },
];

// Reporting lines: CEO & President → Vice President → the three managers; the departments sit under the Operations Manager.
export const ORG_CHART = {
  top: 'CEO & President',
  second: 'Vice President',
  managers: ['Executive Secretary', 'Operations Manager', 'Commercial & Marketing'],
  departmentsUnder: 'Operations Manager',
  departments: [
    'Logistics',
    'HSE & Security',
    'Contracting & Procurement',
    'HR & Admin',
    'Legal',
    'Investment',
    'Finance & Accounting',
    'Strategic Planning',
    'IT',
    'Project Management',
  ],
};

export const CORE_VALUES = ['Honesty', 'Integrity', 'Courage', 'Respect and dignity', 'Prosperity for stakeholders, including employees'];

export const VALUES = [
  {
    title: 'Professionalism, Ethics and Integrity',
    body: 'We believe in professional, honest and ethical behaviour in all our activities, and that following the course of highest integrity will establish and maintain the highest professional and personal standards.',
  },
  {
    title: 'Commitment and Teamwork',
    body: 'We honour the commitments made to our internal and external clients and strive to work effectively as a team. We believe that teams with an appropriate diversity of skills and approaches can achieve a level of synergy that individuals alone cannot.',
  },
  {
    title: 'Candid and Open Environment',
    body: 'We encourage an environment where all communication is candid and courteous, and provides adequate information — enabling us to do our jobs more effectively and contributing to the quality of our decision-making.',
  },
];

export const STATEMENTS = [
  { label: 'Vision', text: 'To become a world-class engineering, manufacturing and construction company, operating nationally.' },
  {
    label: 'Mission',
    text: 'To provide our customers with quality, cost-effective and reliable solutions as an EPC contractor at home, and as a manufacturer of plant and equipment in the region.',
  },
  {
    label: 'Purpose',
    text: 'To bring prosperity and well-being to our stakeholders and to society at large by adding value through engineering, technology and management.',
  },
];

export const PROJECT_MANAGEMENT =
  'The QD team has a track record of successfully managing projects within the defined scope, budget, quality and safety parameters. Over the years, the management team has evolved and implemented various project management and control systems, enabling a sharp focus on cost and schedule control.';

export const SAFETY = {
  zeros: ['Zero Injury', 'Zero Accident', 'Zero Life Loss'],
  ppe: 'QD ensures the proper use of personal protective equipment (PPE) so that the risks encountered in construction are minimised.',
};

export const LIFECYCLE = [
  'Design',
  'Planning',
  'Fabrication',
  'Erection',
  'Insulation',
  'Sandblasting & Painting',
  'Hydro-testing',
  'Pre-commissioning & Commissioning',
];

export const SECTOR_LABELS: Record<ExperienceSector, string> = {
  fertilizer: 'Fertilizer',
  'oil-gas': 'Oil & Gas',
  chemical: 'Chemical, Polyester & Fibre',
  'power-cement': 'Power & Cement',
  infrastructure: 'Infrastructure & Industrial',
};

// "Experience of Key Personnel" from the company profile. Repeated rows are listed once.
export const EXPERIENCE: ExperienceItem[] = [
  { client: 'FFCL', title: 'Scaffolding — annual 3-year project', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'Annual sandblasting', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'Purlin sheets project', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'Annual Scaffolding-19 project', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'TA-19 scaffolding project', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'NP plant agitators — TA-19 project', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'TA-19 modification jobs', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'TA-19 NG drainage facility', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'Execution of O&U TA-19 MOCs', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'MTM cyclones — TA-19 job', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'Suction ducts — TA-19 job', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'Knock-out drum project', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFCL', title: 'LCO₂ plant', location: 'Mukhtar Garh, Sadiqabad', sector: 'fertilizer' },
  { client: 'FFBL', title: 'Scaffolding annual project', location: 'Port Qasim, Karachi', sector: 'fertilizer' },
  { client: 'Engro', title: 'Engro', location: 'Daharki', sector: 'fertilizer' },
  { client: 'FPCDL', title: 'Doosan Power Plant', location: 'Daharki', sector: 'power-cement' },
  { title: 'Thermal Power Station, Units 05 & 06', location: 'Muzaffargarh', sector: 'power-cement' },
  { title: 'Chakwal Cement Project', location: 'Chakwal', sector: 'power-cement' },
  { title: 'D.G. Cement', location: 'Chakwal', sector: 'power-cement' },
  { title: 'Fauji Cement Plant', location: 'Fateh Jang', sector: 'power-cement' },
  { title: 'Attock Oil Refinery', location: 'Rawalpindi', sector: 'oil-gas' },
  { title: 'Pak-Arab Refinery project', location: 'Pakistan', sector: 'oil-gas' },
  { client: 'BHP', title: 'Zamzama Gas Field', location: 'Dadu', sector: 'oil-gas' },
  { client: 'OMV', title: 'Kadanwari', location: 'Pakistan', sector: 'oil-gas' },
  { client: 'OMV', title: 'OMV Pakistan', location: 'Pakistan', sector: 'oil-gas' },
  { title: 'Mazari Oil Field Upgrade Project', location: 'Matli', sector: 'oil-gas' },
  { client: 'POL', title: 'Khaur Oil & Gas Battery, Pakistan Oilfields Ltd.', location: 'Pakistan', sector: 'oil-gas' },
  { client: 'ICI', title: 'ICI Pakistan', location: 'Pakistan', sector: 'chemical' },
  { client: 'ICI', title: 'ICI Polyester Plant', location: 'Sheikhupura', sector: 'chemical' },
  { client: 'ICI', title: 'ICI Soda Ash Works', location: 'Khewra', sector: 'chemical' },
  { title: '44 KTPA Polyester Staple Fibre Project', location: 'Pakistan', sector: 'chemical' },
  { title: 'Dewan Salman Acrylic Plant', location: 'Hattar', sector: 'chemical' },
  { title: 'Dewan Salman Polyester', location: 'Hattar', sector: 'chemical' },
  { title: 'Dewan Salman Polyester Plant No. 1', location: 'Hattar', sector: 'chemical' },
  { title: 'Dewan Salman Polyester Unit No. 2', location: 'Hattar', sector: 'chemical' },
  { title: 'Defence Housing Scheme Phase-2', location: 'Pakistan', sector: 'infrastructure' },
  { title: 'Frontier Works Organization', location: 'Pakistan', sector: 'infrastructure' },
  { title: 'National Development Complex', location: 'Pakistan', sector: 'infrastructure' },
  { title: 'Heavy Mechanical Complex', location: 'Taxila', sector: 'infrastructure' },
  { title: 'Shashi Pipe Factory', location: 'Karachi', sector: 'infrastructure' },
  { title: 'PAP Plant', location: 'Near Fateh Jang', sector: 'infrastructure' },
  { title: 'Paste Plant', location: 'Islamabad', sector: 'infrastructure' },
  { title: 'Berini', location: '—', sector: 'infrastructure' },
];

export const ORGANISATIONS = [
  'FFCL',
  'FFBL',
  'FPCDL',
  'Doosan',
  'Engro',
  'BHP',
  'OMV Pakistan',
  'Pakistan Oilfields Ltd.',
  'Attock Oil Refinery',
  'Pak-Arab Refinery',
  'ICI Pakistan',
  'Dewan Salman',
  'D.G. Cement',
  'Fauji Cement',
  'Chakwal Cement',
  'Heavy Mechanical Complex',
  'Frontier Works Organization',
  'National Development Complex',
];

export const FOOTPRINT = [
  { region: 'Punjab', places: ['Sadiqabad', 'Muzaffargarh', 'Sheikhupura', 'Khewra', 'Chakwal', 'Fateh Jang', 'Taxila', 'Rawalpindi'] },
  { region: 'Sindh', places: ['Karachi', 'Port Qasim', 'Daharki', 'Dadu', 'Matli'] },
  { region: 'Khyber Pakhtunkhwa', places: ['Hattar'] },
  { region: 'Islamabad Capital Territory', places: ['Islamabad'] },
];
