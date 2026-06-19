var workProjects = [
  {
    title: "Workday Everywhere — Chat Integrations",
    desc: "End-to-end features on Workday for Microsoft Teams and Slack — unified task inbox, calendar, learning, time-off approvals, and employee feedback surveys. Owned production deploys, diagnostics, and security hardening across the chat platform.",
    tags: ["TypeScript", "React", "Node.js", "Teams Bot Framework", "Slack API", "AWS"],
    link: null
  },
  {
    title: "AI Agent Infrastructure",
    desc: "Modularized the AI agents codebase into domain submodules, enabling parallel team shipping. Integrated chat surfaces with agent orchestration backends and authored AI threat models for the Ask Workday assistant.",
    tags: ["TypeScript", "Node.js", "AI/Agents", "Threat Modeling"],
    link: null
  },
  {
    title: "Org-Wide Security Program",
    desc: "Program lead for secrets management audit across 12+ repositories. Delivered npm/CDK vulnerability fixes, cache-control hardening, DoS protections, and drove cross-team security compliance adoption.",
    tags: ["Security", "gitleaks", "Snyk", "CDK", "Compliance"],
    link: null
  },
  {
    title: "Amazon LMS Platform Migration",
    desc: "Migrated a Rails monolith to modern React frontends and service-oriented Rails APIs. Built and operated AWS production services (EC2, S3, CDK) and drove front-end architecture decisions.",
    tags: ["React", "Ruby/Rails", "AWS", "EC2", "S3", "CDK"],
    link: null
  }
];

function renderProjects(containerId, projects) {
  var container = document.getElementById(containerId);
  if (!container) return;

  projects.forEach(function (p) {
    var card = document.createElement("div");
    card.className = "project-card";

    var titleEl = document.createElement("h3");
    titleEl.className = "project-card-title";
    titleEl.textContent = p.title;

    var descEl = document.createElement("p");
    descEl.className = "project-card-desc";
    descEl.textContent = p.desc;

    var tagsEl = document.createElement("div");
    tagsEl.className = "project-card-tags";
    p.tags.forEach(function (t) {
      var tag = document.createElement("span");
      tag.className = "project-card-tag";
      tag.textContent = t;
      tagsEl.appendChild(tag);
    });

    card.appendChild(titleEl);
    card.appendChild(descEl);
    card.appendChild(tagsEl);

    if (p.link) {
      var linkEl = document.createElement("a");
      linkEl.className = "project-card-link";
      linkEl.href = p.link;
      linkEl.target = "_blank";
      linkEl.textContent = "View on GitHub \u2192";
      card.appendChild(linkEl);
    }

    container.appendChild(card);
  });
}
