// ============================================================
//  projects.js — All projects (DA + ML) in one file
//  Add new projects here — tools-used % auto-calculates
//  Fields: title, category ("DA" or "ML"), type, problem, did, tools, github
// ============================================================

const projects = [
  {
    title: "Healthcare Financial Performance Analysis",
    category: "DA",
    type: "SQL · Tableau",
    problem:
      "Hospital lacked visibility into which departments were profitable and where costs were bleeding.",
    did: [
      "Analyzed 12,851 patient records across 4 regions → tracked ₹33M revenue using SQL KPI queries.",
      "Built Tableau dashboard → identified 29.83% profit margin + underperforming departments.",
    ],
    tools: ["SQL", "Tableau", "KPI Analysis", "EDA"],
    github: "https://github.com/AyushiDhimmar/healthcare-financial-dashboard",
  },
  {
    title: "Sales Performance Dashboard",
    category: "DA",
    type: "SQL · Power BI",
    problem:
      "Business had no clear view of which product lines and regions were driving revenue across 19 countries.",
    did: [
      "Analyzed 2,823 sales records across 7 product lines → identified Classic Cars as top revenue driver at 40% of $10M.",
      "Built Power BI dashboard → surfaced deal size patterns and sales trends to support business decisions.",
    ],
    tools: ["SQL", "Power BI", "KPI Analysis", "Dashboard"],
    github: "https://github.com/AyushiDhimmar/sales-performance-dashboard",
  },
  {
    title: "Customer Churn Prediction",
    category: "ML",
    type: "Classification",
    problem:
      "Telecom company couldn't identify which customers were about to leave — losing revenue with no early warning.",
    did: [
      "Analyzed 7,043 records → identified high-risk segments (45.3% churn in electronic check users).",
      "Built Logistic Regression model → ROC-AUC 0.83, 79% recall on churn prediction.",
    ],
    tools: ["Python", "Scikit-learn", "Logistic Regression", "GridSearchCV"],
    github: "https://github.com/AyushiDhimmar/churn-prediction",
  },
  {
    title: "Diamond Price Prediction",
    category: "ML",
    type: "Regression",
    problem:
      "Diamond pricing is inconsistent and opaque — buyers and sellers need a reliable model to estimate fair value.",
    did: [
      "Trained Random Forest on 53,940 records → achieved R² 0.9786 and RMSE $580.",
      "Applied hyperparameter tuning + cross-validation → confirmed model generalization (CV score: 0.9759).",
    ],
    tools: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "GridSearchCV",
      "Cross-Validation",
    ],
    github: "https://github.com/AyushiDhimmar/diamond-price-prediction",
  },
];

// ============================================================
//  HOW TO ADD A NEW PROJECT — paste inside projects[] above
//
//  {
//    title: "Your Project Title",
//    category: "DA",              // or "ML"
//    type: "SQL · Tableau",
//    problem: "One line — what problem does this solve?",
//    did: [
//      "Action → Result #1",
//      "Action → Result #2",
//    ],
//    tools: ["SQL", "Tableau"],    // exact tool names — used for proficiency %
//    github: "https://github.com/AyushiDhimmar/repo-name",
//  },
//
//  Tip: keep tool names consistent (e.g. always "SQL" not "Sql" or "sql")
//  so the Tools & Proficiency section counts them correctly.
// ============================================================

// ============================================================
//  computeToolUsage() — counts how many projects use each tool
//  Returns array sorted by frequency, highest first
//  Used by script in index.html to render the proficiency bars
// ============================================================
function computeToolUsage() {
  const counts = {};
  const total = projects.length;

  projects.forEach((p) => {
    p.tools.forEach((tool) => {
      counts[tool] = (counts[tool] || 0) + 1;
    });
  });

  return Object.entries(counts)
    .map(([tool, count]) => ({
      tool,
      count,
      percent: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.count - a.count);
}
