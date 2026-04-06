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
      "Analyzed 7,043 records — found electronic check users (45.3% churn) and month-to-month contracts (42.7% churn) as highest risk segments.",
      "Built Balanced Logistic Regression with GridSearchCV achieving ROC-AUC 0.83 and 79% churn recall.",
    ],
    tools: ["Python", "Scikit-learn", "Logistic Regression", "GridSearchCV"],
    github: "https://github.com/AyushiDhimmar", // replace with actual repo
  },
  {
    title: "Diamond Price Prediction",
    type: "Regression",
    problem:
      "Diamond pricing is inconsistent and opaque — buyers and sellers need a reliable model to estimate fair value.",
    did: [
      "Trained Random Forest Regressor on 53,940 records — achieved R² of 0.9786 and RMSE of $580, outperforming Linear Regression and Decision Tree.",
      "Applied GridSearchCV hyperparameter tuning and 5-fold cross-validation (CV score: 0.9759) confirming strong generalization.",
    ],
    tools: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "GridSearchCV",
      "Cross-Validation",
    ],
    github: "https://github.com/AyushiDhimmar", // replace with actual repo
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
