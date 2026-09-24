# Architecture in a Test & Learn Experiment

<p class="cf-lede">A bounded intervention through which uncertainty becomes evidence.</p>

Do not separate **experiment** and **pilot** into different stages. CustomerFirst uses **Test & Learn Experiment** for the bounded intervention used to test a hypothesis and create evidence for a decision.

```mermaid
flowchart TD
    A[What are we trying to learn?] --> B
    subgraph B[Test & Learn Experiment]
      H[Explicit hypothesis]
      S[Bounded scope]
      E[Known exposure]
      G[Appropriate guardrails]
      M[Measurable evidence]
      C[Stop conditions]
    end
    B --> D[Evidence]
    D --> F[Decision]
    F --> X[Scale]
    F --> Y[Test again]
    F --> Z[Modify]
    F --> Q[Stop]
```

A Test & Learn Experiment can legitimately involve real users, real operational processes, real environments and real data where appropriate.

The important questions are:

- What are we trying to learn?
- What decision will this inform?
- What exposure are we creating?
- What could cause harm?
- What guardrails are required?
- What evidence would support continuing?
- What evidence would cause us to modify or stop?

<div class="cf-panel cf-panel--assurance"><strong>Assurance</strong>Is this bounded experiment safe enough and useful enough to run?</div>

## Explore further

- [Guardrails](guardrails.md)
- [Bounded risk and exposure](bounded-risk.md)
- [Stop conditions](stop-conditions.md)
- [Experiment architecture checklist](../patterns/experiment-checklist.md)
