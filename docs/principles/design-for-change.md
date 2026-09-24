# Design for change

<p class="cf-lede">Keep decisions, components and technologies replaceable where possible.</p>

<div class="cf-panel cf-panel--principle"><strong>Principle</strong>Keep decisions, components and technologies replaceable where possible.</div>

## Why this matters

Requirements, organisations, suppliers, policies and technologies change. Good architecture keeps the cost of changing our mind proportionate.

## What this means in practice

Use this principle to make the decision smaller, clearer and easier to revisit as evidence changes.

## Questions to ask

- Where are we creating coupling?
- Can this component change independently?
- What contract or interface makes the boundary clear?
- How expensive would it be to replace this choice?

## During a Test & Learn Experiment

Test the parts most likely to create irreversible coupling. Prefer boundaries that let the team change one part without redesigning everything else.

## Watch out for

- Shared databases used as integration
- Hidden dependencies
- Designing around today's organisation chart

## Related guidance

- [Test & Learn Experiments](../test-and-learn/)
- [Evidence](../evidence/)
- [Assurance](../assurance/)
