# EZ-Robot
CGY-121-FULL · version 1 · **final copy pending** · proposal approved 20 October 2026

## Question

How can a robot use a sensor reading to choose its next move?

A sensor reading becomes useful when a program turns it into a safe action.

## About the organization

EZ-Robot provides educational robots, components and programming tools from Calgary.

Who it serves: Learners and educators exploring robotics.

Calgary connection: EZ-Robot lists a Calgary office for its educational-robotics business.

Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.

## How it works

1. Define the task: decide what the robot should do in a simple environment.
2. Read the sensor: a distance measurement supplies information, not a decision by itself.
3. Apply a rule: compare the reading with a chosen condition and select an action.
4. Test the boundary: check what happens near the threshold and when a reading is missing.

## Classroom use

**Try it:** In a simulation, write pseudocode: if an obstacle is too close, stop; otherwise move slowly. Test near-threshold and missing-reading cases, with safe defaults.
**Discuss:** What should a robot do when its sensor cannot provide a trustworthy reading?
**Teacher note:** The source verifies an ultrasonic distance-sensor capability. The rule is a fictional classroom program, not EZ-Robot’s internal control code. CSE1240 has CSE1110 as a prerequisite.

**Curriculum:** CSE1240; 1.3; 3.1; 3.2; 3.3. verified anchor; classroom application interpreted
[Official curriculum source](https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1240) · provenance: [curriculum-sources.json](curriculum-sources.json).
Level: Introductory. Prerequisites: CSE1110. Original course check: 2026-10-19.

## Who does this work

The following links describe relevant work areas, not current vacancies or a verified local employee roster. Full task and collaborator copy is in [the shared role library](role-library.md).

- **Software and data systems** (`work-software`): Turn sensor information into a tested program.
- **Instrumentation and controls** (`work-controls`): Connect physical sensing and action with safe operating constraints.

## Ways in

Exact proposed pathway descriptions and entry boundaries: [pathway library](pathway-library.md).

- [Software Development diploma](https://www.sait.ca/programs-and-courses/diplomas/software-development) — SAIT, Calgary; `route-software`.
- [Electrical Engineering Technology diploma](https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology) — SAIT, Calgary; `route-electrical`.

## Discover coverage

- **Software Developer** — extend card 03; `OCT20-EXTEND-03`.
  - Exact clue: A person types at a desk with code on one screen, maps and graphs on another, and a diagram in a notebook.
  - Additional example route: `route-software`. Preserve existing employer/job links.
- **Instrumentation technician** — extend card 13; `OCT20-EXTEND-13`.
  - Exact clue: At a training bench with closed electrical panels, a person checks a small pressure instrument and a signal display.
  - Additional example route: `route-electrical`. Preserve existing employer/job links.

[Complete Discover proposals, exact links and portrait briefs](discover-proposals.json).

## Jobs

No new live job posting proposed. Role links describe work areas, not vacancies.

## Illustrations — briefs for review, not generated artwork

**Story:** A fictional robotics developer tests a small wheeled educational robot in a marked tabletop obstacle area, hands safely away from movement.
**Teaching:** Sensor reading → validity check → distance condition → stop or move → repeat. Include a visible stop path for invalid data.
**Style and layout:** Follow docs/design/image-direction.md: graphic-novel / limited-colour screenprint; forest green, ivory, sage, orange and blue. Fictional anatomically coherent people and generic equipment; no stray hands, misleading precision or organization logos. Example images have no title or caption strips. Static teaching arrows and live HTML explanations; full aspect ratio, maximum 680px desktop.
Alt text uses the corresponding scene description; explanations remain live page text.

## Review notes

Net difference: Adds an approachable physical/simulated robotics task distinct from the known Attabotics warehouse lead.
Remaining condition: No additional source-specific hold in this wording; final-copy and visual review still required.
Review choice: approve v1 / revise v1 / hold v1. This does not publish the example.

## Sources

- [https://www.ez-robot.com/](https://www.ez-robot.com/) — captured/observed 2026-10-20
- [https://www.ez-robot.com/contact-us.html](https://www.ez-robot.com/contact-us.html) — captured/observed 2026-10-20
- [https://www.ez-robot.com/learn-robotics-movement-panels.html](https://www.ez-robot.com/learn-robotics-movement-panels.html) — captured/observed 2026-10-20
- [https://www.ez-robot.com/store/p15/ultrasonic-sensor.html](https://www.ez-robot.com/store/p15/ultrasonic-sensor.html) — captured/observed 2026-10-20

Source observations and hashes: [evidence manifest](evidence-manifest.json). Prior source failures remain recorded; no missing page is treated as evidence.
