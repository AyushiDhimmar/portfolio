// ============================================================
//  projects.js — Add or edit your projects here easily!
//  Each project object has the following fields:
//    title       : Project name
//    description : Short summary of the project
//    tools       : Array of tools/technologies used
//    insights    : Array of 1–2 key takeaways or achievements
//    github      : URL to your GitHub repository
// ============================================================

const projects = [
  {
    title: "Healthcare Financial Performance Analysis",
    description:
      "Analyzed a hospital financial dataset to evaluate revenue, expenses, and department profitability. Built interactive dashboards to surface key financial trends.",
    tools: ["SQL", "Tableau"],
    insights: [
      "Used SQL queries and KPI calculations to assess departmental revenue and expense patterns.",
      "Developed an interactive Tableau dashboard to identify financial trends and underperforming units.",
    ],
    github: "https://github.com/ayushidhimmar", // replace with actual repo link
  },
  {
    title: "AI Support System",
    description:
      "Built a career readiness evaluation system using clustering and classification models on a synthetic student dataset.",
    tools: ["Python", "Scikit-learn"],
    insights: [
      "Applied K-Means clustering and classification with feature engineering and statistical analysis.",
      "Performed full data preprocessing, feature engineering, and model evaluation pipeline.",
    ],
    github: "https://github.com/ayushidhimmar", // replace with actual repo link
  },
  {
    title: "IPL Match Win Probability Predictor",
    description:
      "Predicted IPL match win probability in real-time using match-state features and logistic regression.",
    tools: ["Python", "Scikit-learn"],
    insights: [
      "Achieved ROC-AUC of 0.87 and ~78% accuracy after thorough feature engineering.",
      "Used match-state features such as runs, wickets, and overs to power live predictions.",
    ],
    github: "https://github.com/ayushidhimmar", // replace with actual repo link
  },
];

// ============================================================
//  HOW TO ADD A NEW PROJECT:
//  Copy the template below, fill in your details, and paste
//  it inside the `projects` array above (before the closing ];)
//
//  {
//    title: "Your Project Title",
//    description: "A short description of what the project does.",
//    tools: ["Tool1", "Tool2", "Tool3"],
//    insights: [
//      "Key insight or result #1",
//      "Key insight or result #2",
//    ],
//    github: "https://github.com/yourusername/repo-name",
//  },
// ============================================================
