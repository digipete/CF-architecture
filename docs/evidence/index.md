# Evidence

<p class="cf-lede">Architecture assumptions are hypotheses.</p>

<div class="cf-inset cf-inset--blue"><strong>If an architectural uncertainty matters to the decision, make it part of the experiment.</strong></div>

Architecture does not sit alongside the experiment producing documentation. Important uncertainty becomes something the experiment is deliberately designed to resolve.

## Turn assumptions into evidence

| Assumption | Test | Evidence |
| --- | --- | --- |
| “This will integrate” | Connect it | Integration evidence |
| “It will perform” | Load or performance test it | Measurements |
| “People will use it” | Put it in front of real users | Observed behaviour |
| “We need this data” | Trace the service and data journey | Actual information requirements |
| “This constraint cannot change” | Challenge or test the constraint | Proven constraint or disproven assumption |
| “This will be cheaper” | Model and test costs | Economic evidence |

**Observe · Prototype · Spike · Test · Measure · Challenge · Learn**

## Use the evidence

Evidence is only useful when it can influence the decision. Before testing, agree what result would support continuing, what would trigger another test or modification, and what would tell us to stop.

- [Identify uncertainty](identify-uncertainty.md)
- [Turn uncertainty into tests](turn-uncertainty-into-tests.md)
- [Record what we learn](record-what-we-learn.md)
