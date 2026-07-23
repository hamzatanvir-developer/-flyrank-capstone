# Project Rules

## AI Prompting Rules

1. Forms always use react-hook-form + zod. Never manual useState for 
   form fields or uncontrolled inputs.

2. Every input must have a label with htmlFor matching the input id. 
   No placeholder-only labels.

3. Every component prompt must include: stack, file name, constraints, 
   and a verification step. Vague prompts are not allowed.