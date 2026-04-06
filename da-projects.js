// ============================================================
//  da-projects.js — Add or edit DA projects here
//  Fields: title, type, problem, did, tools, github
// ============================================================

const daProjects = [
  {
    title: "Healthcare Financial Performance Analysis",
    type: "SQL · Tableau",
    problem:
      "Hospital lacked visibility into which departments were profitable and where costs were bleeding.",
    did: [
      "Analyzed 12,851 patient records across 4 regions & 6 departments tracking ₹33M revenue using SQL KPI queries.",
      "Built an interactive Tableau dashboard with cost efficiency heatmap — revealed 29.83% profit margin and identified underperforming units.",
    ],
    tools: ["SQL", "Tableau", "KPI Analysis", "EDA"],
    github: "https://github.com/AyushiDhimmar/healthcare-financial-dashboard",
  },
  {
    title: "Sales Performance Dashboard",
    type: "SQL · Power BI",
    problem:
      "Business had no clear view of which product lines and regions were driving revenue across 19 countries.",
    did: [
      "Analyzed 2,823 sales records across 7 product lines using SQL — identified Classic Cars as top driver at 40% of $10M revenue.",
      "Built Power BI dashboard with KPI cards, sales trend, and deal size analysis to support strategic business decisions.",
    ],
    tools: ["SQL", "Power BI", "KPI Analysis", "Dashboard"],
    github: "https://github.com/AyushiDhimmar/sales-performance-dashboard",
  },
];

// ============================================================
//  HOW TO ADD A NEW PROJECT — paste this inside daProjects[]
//
//  {
//    title: "Your Project Title",
//    type: "Tool · Tool",
//    problem: "One line — what problem did the business have?",
//    did: [
//      "What you did + result #1",
//      "What you did + result #2",
//    ],
//    tools: ["SQL", "Tableau"],
//    github: "https://github.com/AyushiDhimmar/repo-name",
//  },
// ============================================================
