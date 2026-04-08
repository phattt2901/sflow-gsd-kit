<div align="center">

# Sflow GSD Kit (Optimized for Antigravity)

**A powerful meta-prompting, context engineering, and spec-driven development system.**<br>
*Originally based on "Get Shit Done" by TÂCHES, rewriten & customized natively for the Antigravity system.*

[![npm version](https://img.shields.io/npm/v/@sflow/ag-kit?style=for-the-badge&logo=npm&logoColor=white&color=black)](https://www.npmjs.com/package/@sflow/ag-kit)
[![GitHub](https://img.shields.io/github/stars/phattt2901/sflow-gsd-kit?style=for-the-badge&logo=github&color=black)](https://github.com/phattt2901/sflow-gsd-kit)

</div>

---

## 🌟 Introduction

This is a customized fork of the legendary [Get Shit Done (GSD)](https://github.com/gsd-build/get-shit-done), specifically rewritten to fully integrate with **Antigravity**.

While the original GSD was built mostly for Claude Code and Gemini CLI, **Sflow GSD Kit** bridges that gap by providing a ready-to-go context system that Antigravity agents can perfectly understand. We have adapted the tool mappings (\`view_file\`, \`write_to_file\`, \`run_command\`, etc.), restructured the agent headers with \`<antigravity_adapter>\`, and integrated \`browser_subagent\` capabilities for visual web tasks.

## 🚀 Getting Started

Installing this toolkit globally provides you with the \`ag-kit\` utility, which you can run inside any of your Sflow project directories.

\`\`\`bash
# 1. Install globally via NPM
npm install -g @sflow/ag-kit

# 2. Go to your project folder
cd your-project

# 3. Initialize Antigravity Workspace
ag-kit init
\`\`\`

This will automatically configure the \`.agent\` folder with all required workflows, agents, and instructions specifically mapped to Antigravity. 

## ✨ Antigravity-specific Features

1. **Native Tool Mapping:** Translates Claude-centric tools to Antigravity's specific tools accurately.
   - \`Read\` → \`view_file\`
   - \`Write\` → \`write_to_file\`
   - \`Bash\` → \`run_command\`
   - \`Glob\` → \`list_dir\`
   - \`Grep\` → \`grep_search\`
   - \`WebSearch\` → \`search_web\`
   - \`WebFetch\` → \`read_url_content\`
2. **Built-in \`browser_subagent\` Integration:** Automatic subagent injections for workflows that require complex web navigation, visual verification tasks, or authenticated browsing.
3. **Antigravity Adapters:** System prompts have been wrapped with \`<antigravity_adapter>\` blocks so the Antigravity model processes contexts and multi-agent coordination without friction.

## 🛠 Workflow Guides

Inside your initialized project, you can invoke Antigravity and ask it to execute standard GSD commands:
- \`/gsd-new-project\` - Start a brand new architecture planner and milestone map.
- \`/gsd-plan-phase\` - Plan a specific module of your app.
- \`/gsd-execute-phase\` - Write and implement the code according to the planned architecture.
- \`/gsd-help\` - View all capabilities.

The system ensures Antigravity is provided everything it needs to execute tasks atomically, with strict instructions to verify constraints, security checks, and code logic before completion.

---

*This project is proudly maintained as part of the Sflow toolkit ecosystem.*
