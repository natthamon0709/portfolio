---
name: company-pr-security-review
description: >-
  Use this skill when a Head Dev, Lead, or security engineer reviews a PR, MR, or code diff before approval.
  Conducts an evidence-based security review prioritizing secrets, auth, input validation, sensitive data,
  cloud/IaC, dependencies, audit logs, and debug exposure. Reports findings ordered by severity with
  actionable fixes, concluding with a standardized decision (Request changes, Approve with security comments,
  Needs more evidence, or No security findings).
---

# Company AI Instructions - 03 Company PR Security Review

Use this adapter when a Head Dev or Lead reviews a PR/MR/diff before approval.

> Always follow the company PR security review skill in:
> `.ai/skills/company-pr-security-review/SKILL.md`

---

## 1. Overview & Scope

- **Primary Goal**: Prevent security regressions, secret leakage, access control flaws, and compliance violations from reaching production.
- **Scope**: Evaluate all modified code, added dependencies, configuration files, and infrastructure scripts within the PR/MR diff.
- **Companion Skills**:
  - `company-coding-standard`: Consult for general code quality, maintainability, and architectural patterns when needed.
  - `company-security-compliance`: Consult for deeper organizational policy requirements when the PR touches sensitive data or regulated domains.

---

## 2. Review Workflow

Execute the review in the following sequential order:

```
[1. Ingest Changed Code] ──► [2. Check Companion Policies] ──► [3. Audit Security Vectors] ──► [4. Compile Findings] ──► [5. Final Decision]
```

### Step 1: Review Changed Code First
- Inspect the diff hunks and identify all modified entry points, handlers, and data flows before reading broader context.
- Trace tainted inputs from request ingress to data sink (database, filesystem, external API, system command).

### Step 2: Contextual Policy Routing
- When general code smells or styling questions arise: evaluate against `company-coding-standard`.
- When cryptographic choices, PII handling, or cloud infrastructure changes arise: verify compliance against `company-security-compliance`.

### Step 3: High-Priority Security Vector Audit
Systematically inspect the PR against the following mandatory vectors:

1. **Secrets & Credentials**:
   - Hardcoded API keys, private keys, JWT signing secrets, database passwords, or auth tokens in code or config files.
   - Accidental commits of `.env`, staging credentials, or unencrypted secrets in test fixtures.
2. **Authentication & Authorization**:
   - Missing or broken access control checks on newly added or modified endpoints.
   - Insecure Direct Object References (IDOR), privilege escalation, or client-controlled authorization logic.
   - Improper session handling, JWT validation flaws (e.g. `alg: none`, missing expiration checks).
3. **Input Validation & Sanitization**:
   - Injection vulnerabilities: SQL/NoSQL injection, Command injection, SSRF, Path Traversal, and XSS.
   - Unvalidated type casting, missing boundary/length checks, or unsafe deserialization.
4. **Sensitive Data & Privacy (PII)**:
   - Sensitive fields logged in plain text (passwords, credit cards, national IDs, session tokens).
   - Unmasked sensitive data returned in API responses or serialized to client caches.
   - Insecure data transit (HTTP vs HTTPS) or unencrypted data storage at rest.
5. **File Transfer & Uploads**:
   - Missing file extension / MIME type allowlists or content inspection.
   - Unrestricted upload file size leading to DoS, or execution risks (SVG with script, executable binaries).
   - Unsafe archive extraction (Zip Slip / path traversal).
6. **Cloud & Infrastructure as Code (IaC)**:
   - Overly permissive IAM permissions (`Action: "*"` or `Resource: "*"`).
   - Publicly accessible buckets, open security group ingress (`0.0.0.0/0` on sensitive ports like 22, 3306, 5432).
   - Missing encryption at rest or exposed metadata services.
7. **Dependencies & Patching**:
   - Introduction of vulnerable dependencies, unpinned package versions, or suspicious third-party packages.
   - Tampered lockfiles or unverified package repository URLs.
8. **Audit Logs & Telemetry**:
   - Absence of audit log entries for critical security operations (login, password reset, role assignment, data export).
   - Log injection vulnerabilities allowing attackers to spoof log records.
9. **Production Debug Exposure**:
   - Development debug flags left enabled (`DEBUG=true`, verbose stack traces in HTTP responses).
   - Swagger / GraphQL introspection or internal diagnostics exposed without authentication in production environments.

---

## 3. Finding Reporting Rules

- **Ordering**: Report findings strictly ordered by severity from highest to lowest:
  1. `Critical`
  2. `High`
  3. `Medium`
  4. `Low`
  5. `Info`
  6. `Question`
- **Mandatory Finding Fields**: Every finding must contain:
  - **Severity**: Exact level (`Critical` | `High` | `Medium` | `Low` | `Info` | `Question`)
  - **Location**: `path/to/file.ext:line_number`
  - **Evidence**: The exact line or diff hunk demonstrating the issue
  - **Risk**: Concrete attack scenario or business impact (e.g., "Allows unauthenticated users to dump database tables")
  - **Required Fix**: Concrete, actionable code snippet or architectural resolution
- **Quality Guardrails**:
  - **NO subjective style issues**: Do not flag variable naming, indentation, or aesthetic choices as security findings. Use `company-coding-standard` if quality remarks are needed.
  - **Use `Question` for incomplete context**: If the diff does not provide enough surrounding context to confirm whether a policy or sanitization step is handled upstream/downstream, log a `Question` item requesting clarification from the author.

---

## 4. Final Decision Criteria

Every review must conclude with exactly one of the following decisions:

Decision | Condition
:--- | :---
`Request changes` | Found one or more `Critical` or `High` severity security vulnerabilities. Merge is blocked until remediated.
`Approve with security comments` | No Critical/High issues. `Medium` or `Low` findings are present that can be safely merged and resolved in a prioritized follow-up task.
`Needs more evidence` | Unable to verify security compliance because the diff is truncated, configuration context is missing, or blocking `Question` items remain unresolved.
`No security findings` | The diff has been audited across all vectors, is verified clean, and complies with company security policy.

---

## 5. Review Output Template

```markdown
## Security Review Summary

| Metric | Status |
| :--- | :--- |
| **Review Target** | `<PR Title or Diff Identifier>` |
| **Decision** | `Request changes` \| `Approve with security comments` \| `Needs more evidence` \| `No security findings` |
| **Findings Count** | Critical: X \| High: Y \| Medium: Z \| Low: W \| Info: V \| Question: Q |

---

### Security Findings

#### [SEVERITY] <Short Vulnerability Title>
- **Location**: `file/path.ext:L123-L130`
- **Evidence**:
  \`\`\`language
  <exact code hunk>
  \`\`\`
- **Risk**: <Explanation of threat, exploitability, and impact>
- **Required Fix**:
  \`\`\`language
  <remediated code snippet>
  \`\`\`

---

### Questions & Clarifications (if any)
- `file/path.ext:L45`: <Specific question regarding upstream validation or architectural context>

---

## Final Decision
**`[Decision State]`**
<Brief concluding rationale summarizing next actions for author and reviewers>
```
