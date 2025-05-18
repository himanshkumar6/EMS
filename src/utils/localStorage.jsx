
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        title: "Prepare project report",
        description: "Compile all data for the quarterly review.",
        date: "2025-05-12",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Email pending clients about invoice clearance.",
        date: "2025-05-10",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve issue with user session timeout.",
        date: "2025-05-14",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Diya",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "Design landing page",
        description: "Create responsive layout for new marketing page.",
        date: "2025-05-13",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Daily standup",
        description: "Share updates with team at 10AM.",
        date: "2025-05-14",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Backend API testing",
        description: "Ensure all endpoints are functioning as expected.",
        date: "2025-05-13",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update user docs",
        description: "Revise onboarding guides for version 2.0.",
        date: "2025-05-12",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Karan",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 3,
      completed: 1,
      failed: 2,
      newTask: 2
    },
    tasks: [
      {
        title: "Security audit",
        description: "Check codebase for security loopholes.",
        date: "2025-05-11",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize images",
        description: "Compress assets for faster load time.",
        date: "2025-05-13",
        category: "Performance",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix navigation bug",
        description: "Resolve double click issue in mobile nav.",
        date: "2025-05-12",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team sync-up",
        description: "Coordinate weekly planning with leads.",
        date: "2025-05-14",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Social media campaign",
        description: "Plan Facebook campaign for product launch.",
        date: "2025-05-15",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Design a functional component structure",
        description: "component,api,hooks,design",
        date: "2025-05-15",
        category: "Frontend Design",
        active: false,
        newTask: false,
        completed: true,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        title: "Database migration",
        description: "Migrate from MongoDB v4 to v5.",
        date: "2025-05-10",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review PRs from junior developers.",
        date: "2025-05-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix broken links",
        description: "Ensure all hyperlinks on dashboard work.",
        date: "2025-05-14",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Ravi",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "Slack bot integration",
        description: "Connect build alerts to Slack channels.",
        date: "2025-05-12",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write blog post",
        description: "Draft article about new feature rollout.",
        date: "2025-05-13",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Conduct interview",
        description: "Interview frontend developer candidate.",
        date: "2025-05-14",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Resolve feedback tickets",
        description: "Handle top priority issues from user feedback.",
        date: "2025-05-11",
        category: "Support",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Priya",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
}