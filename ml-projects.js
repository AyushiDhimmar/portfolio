// ============================================================
//  ml-projects.js — Add or edit ML projects here
// ============================================================

const mlProjects = [
  {
    title: "Customer Churn Prediction",
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
//  HOW TO ADD A NEW PROJECT — paste this inside mlProjects[]
//
//  {
//    title: "Your Project Title",
//    type: "Classification / Regression / Clustering",
//    problem: "One line — what problem does this solve?",
//    did: [
//      "What you did + result #1",
//      "What you did + result #2",
//    ],
//    tools: ["Python", "Scikit-learn"],
//    github: "https://github.com/AyushiDhimmar/repo-name",
//  },
// ============================================================
