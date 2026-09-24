<div class="cf-hero" markdown>

<span class="cf-kicker">CustomerFirst Technology & Architecture</span>

# Architecture at CustomerFirst

<p class="cf-lede">Architecture creates confidence to make the next decision.</p>

**Not a gate. Not a phase. Not a document.**

</div>

CustomerFirst uses architecture to help teams understand uncertainty, make proportionate technology decisions and safely learn what should happen next.

Architecture is a continuous capability. It helps teams decide what they need to understand now, what they can safely defer, what they should test, and whether the evidence supports increasing their commitment.

<div class="cf-inset cf-inset--blue">
<strong>Architecture is not about proving that a design is correct.</strong><br>
It is about creating enough confidence to make the next good decision.
</div>

## The four-part model

<div class="cf-four-part">
  <div class="principles"><strong>PRINCIPLES</strong>How we think</div>
  <div class="domains"><strong>DOMAINS</strong>What we consider</div>
  <div class="decision"><strong>THE NEXT<br>GOOD DECISION</strong></div>
  <div class="evidence"><strong>EVIDENCE</strong>What we know</div>
  <div class="assurance"><strong>ASSURANCE</strong>Enough confidence to act?</div>
</div>

**Principles** tell us how to think. **Domains** ensure we consider the whole system. **Evidence** tells us what we actually know. **Assurance** determines whether we have enough confidence to act.

<div class="cf-grid">
<div class="cf-card" markdown>
### [Principles](principles/)
Decision-making tools that help teams make consistent choices without prescribing a single solution.
</div>
<div class="cf-card" markdown>
### [Domains](domains/)
Six lenses that help us consider the whole service without creating architecture silos.
</div>
<div class="cf-card" markdown>
### [Evidence](evidence/)
Turn important architectural assumptions into things that can be tested and learned from.
</div>
<div class="cf-card" markdown>
### [Assurance](assurance/)
Decide whether we understand enough about the risk and evidence to make the next move.
</div>
</div>

## Architecture in evidence-led delivery

```mermaid
flowchart TD
    A[Problem] --> B[Decision we need to make]
    B --> C[Assumptions]
    C --> D[Hypothesis]
    D --> E[Test & Learn Experiment]
    E --> F[Evidence]
    F --> G[Decision]
    G --> H[Scale]
    G --> I[Test again]
    G --> J[Modify]
    G --> K[Stop]
```

<div class="cf-inset">
Architecture helps us make the experiment <strong>safe enough to run</strong>, and the resulting decision <strong>strong enough to act on</strong>.
</div>

We are not architecting a complete solution and then testing whether it works. Architecture helps shape the mechanism through which we learn what should happen next.

## Test & Learn Experiment

A **Test & Learn Experiment** is a bounded intervention designed to create enough evidence to inform a decision. It may involve real users, real operational processes, real environments and — where appropriate — real data.

The important question is not whether the work resembles a traditional prototype or pilot. It is whether we understand the exposure, have appropriate guardrails and know what evidence we need.

[Use architecture in a Test & Learn Experiment →](test-and-learn/)

## The decisions we make

<div class="cf-outcomes">
  <div>SCALE</div>
  <div>TEST AGAIN</div>
  <div>MODIFY</div>
  <div>STOP</div>
</div>

**Scale** when the evidence supports increasing commitment or exposure. **Test again** when important uncertainty remains. **Modify** when the evidence points to a different approach. **Stop** when further investment is not justified.

Stopping based on evidence is a valid outcome.

## Continuous architecture

Architecture changes as the evidence changes. We frame the decision, shape the intervention, identify uncertainty, test and learn, then act on what we have learned.

[See the continuous architecture model →](continuous-architecture/)
