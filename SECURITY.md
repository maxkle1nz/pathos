# Security

PATHOS handoffs must never contain secret values.

Do not include:

- API keys;
- passwords;
- cookies;
- private keys;
- personal access tokens;
- raw `.env` values;
- browser session tokens.

Do include:

- environment variable names;
- the service or owner responsible for the credential;
- where setup instructions live;
- whether access is intentionally unavailable;
- recovery steps for missing access.

If you find a secret in a handoff, rotate the credential and remove the value
from Git history according to your organization's incident response policy.
