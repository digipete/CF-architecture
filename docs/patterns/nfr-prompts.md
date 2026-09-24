# Non-functional requirement prompts

Use these as prompts when the quality of the service could materially affect the decision.

## Performance and scale
- What response or processing time matters to the outcome?
- What volume do we need to prove now?
- What would materially change at larger scale?

## Availability and resilience
- What happens if this fails?
- How long can the service be unavailable?
- Which dependencies are critical?

## Security and privacy
- What could cause harm?
- What data and identities are exposed?
- What controls are proportionate to this experiment?

## Accessibility
- Who could be excluded by this design?
- What needs testing with users or assistive technology?

## Operability
- How will we deploy, observe, support and recover it?
- Who owns the operational response?

## Maintainability
- What is likely to change?
- How easily can components, dependencies or suppliers be replaced?
