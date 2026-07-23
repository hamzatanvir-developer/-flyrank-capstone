# Workflow Comparison: Vague vs Precise Prompting

## What I Built
A React login form with email and password validation, built twice using two 
different prompting approaches to compare AI output quality.

## Round One — Vague Prompt
Prompt used: "build me a settings form with validation in react"

The AI produced a working form but with clear gaps:
- Labels had no `htmlFor` attribute — screen readers cannot link label to input
- Validation only fired on submit, not on blur — poor user experience
- No tests produced at all
- Used manual `useState` for form state instead of react-hook-form
- Error handling used `console.log(err)` — not real error handling
- Success feedback was an `alert()` popup, not inline UI

Review effort: High. I had to read every line carefully because I had no 
spec to check against. Took roughly 15 minutes just to identify issues.

## Round Two — Precise Prompt
Prompt included: stack, file names, field requirements, accessibility rules, 
noValidate constraint, inline success message requirement, and a test generation step.

Output differences:
- Labels had correct `htmlFor` matching input `id`
- Errors appeared on blur using react-hook-form mode: "onBlur"
- Submit button disabled until form valid via formState.isValid
- Success message rendered inside the card, no alert()
- Tests were generated covering 5 cases

AI mistake I caught: The test for "valid input enables submit button" was 
incorrect. The test filled both fields but did not trigger blur events, so 
react-hook-form never validated and the button stayed disabled. The test 
would have passed incorrectly if not reviewed.

## Time Comparison
Round one felt faster to prompt but took longer to review and fix.
Round two felt slower to write the prompt but the output needed 
significantly less review. End-to-end, Round two was faster.

## Key Lesson
The prompt is the spec. A vague prompt gives the AI permission to make 
every decision for you — including the wrong ones. A precise prompt 
transfers those decisions back to you where they belong.