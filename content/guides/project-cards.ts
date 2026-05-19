export type ProjectCard = {
  title: string;
  summary: string;
  publishedAt: string;
  url: string;
  tags?: string[];
};

export const PROJECT_CARDS: ProjectCard[] = [
  {
    title: "Hybrid Phish Detection Engine",
    summary:
      "A multi-tiered phishing detection pipeline combining real-time HTML scraping, feature extraction, and a Decision Tree classifier with a production FastAPI service.",
    publishedAt: "2025",
    url: "/guides/hybrid-phish-detection-engine",
    tags: ["FastAPI", "PostgreSQL", "Machine Learning"],
  },
  {
    title: "Malware Detection via CNN Visual Fingerprinting",
    summary: "Converts binaries into grayscale images and classifies them using a compact CNN for malware family detection.",
    publishedAt: "2024",
    url: "/guides/malware-detection-cnn-visual-fingerprinting",
    tags: ["Keras", "CNN", "Malware"],
  },
  {
    title: "Localized Histogram XGBoost for Sparse Time-Series Traffic Forecasting",
    summary: "A traffic forecasting pipeline using localized histogram features and XGBoost to handle sparse junction counts with high accuracy.",
    publishedAt: "2024",
    url: "/guides/localized-histogram-xgboost-time-series-forecasting",
    tags: ["XGBoost", "Time-Series", "Research"],
  },
  {
    title: "Hybrid C + Assembly Cache Simulator",
    summary: "Trace-driven CPU cache simulator combining C and x86-64 assembly for bit-level address handling and fast microbenchmarks.",
    publishedAt: "2023",
    url: "/guides/hybrid-c-assembly-cache-simulator",
    tags: ["C", "Assembly", "Cache"],
  },
  {
    title: "Relational Online Examination and Assessment System",
    summary: "A secure online examination platform implemented in ASP.NET Core with MSSQL and EF Core, optimized for transactional integrity.",
    publishedAt: "2023",
    url: "/guides/relational-online-exam-system",
    tags: ["ASP.NET Core", "MSSQL", "EF Core"],
  },
  {
    title: "DSP Audio Noise Reduction System",
    summary: "A signal-processing pipeline applying FFT-based noise estimation and Butterworth filtering to reduce background noise in digital audio.",
    publishedAt: "2024",
    url: "/guides/dsp-audio-noise-reduction-system",
    tags: ["DSP", "Python", "FFT"],
  },
];

export default PROJECT_CARDS;
