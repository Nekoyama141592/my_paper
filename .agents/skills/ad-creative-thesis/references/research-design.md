# Research Design for Advertising-Creative Theses

Use this reference when selecting a topic or designing, analyzing, or reviewing empirical studies.

## 1. Design canvas

Complete this before writing hypotheses.

| Element | Question |
|---|---|
| Focal manipulation | What single advertising element changes? |
| Comparator | What is the theoretically meaningful baseline? |
| Mechanism | What perception or emotion should transmit the effect? |
| Primary outcome | What one consumer response is the main endpoint? |
| Boundary | When or for whom should the effect change? |
| Context | Which product, platform, format, and exposure situation? |
| Population | Who can realistically encounter and evaluate the ad? |
| Confounds | What else might differ between conditions? |

Good focal manipulations include copy tone, disclosure, narrator identity, voice quality, music, visual direction, spokesperson type, account voice, targeting language, or ad-native versus user-like presentation. Avoid bundling multiple differences into one condition unless the treatment is deliberately holistic.

Choose one primary outcome. Common outcomes include ad attitude, brand attitude, purchase intention, trust, perceived authenticity, sharing intention, continued-viewing intention, recall, or choice. Secondary outcomes should serve the theory rather than compensate for an unclear primary endpoint.

## 2. Study sequence

### Default blueprint

Use the following structure unless the user has already fixed a different defensible design.

| Stage | Main question | Default measurement | Default analysis |
|---|---|---|---|
| Study 1 | Does the focal expression change the primary outcome? | One manipulated element, one stimulus per respondent, one 2-3 item primary outcome, essential checks, optional free response | t test or equivalent regression |
| Study 2 item generation | What impressions do viewers actually report? | Study 1 free responses and/or depth interviews; initial pool of about 25-30 statements reduced to 15-20 | Qualitative consolidation and content review |
| Study 2 factor discovery | What psychological factors organize those impressions? | The 15-20 impression items plus the primary outcome measured separately | EFA on impression items only, reliability, then regression predicting the outcome |

Do not place the primary outcome items inside the Study 2 factor analysis. Do not add a moderator, multiple mediators, or multiple competing outcomes to Study 1 unless the theory or user explicitly requires them.

### Study 1: establish the effect

Use a between-subject experiment by default when repeated exposure would reveal the manipulation or create demand effects. Use within-subject designs only when carryover and comparison effects are acceptable.

Typical structures:

- Two conditions: focal expression versus credible baseline.
- Three conditions: focal expression, low-intensity alternative, and ordinary control.
- Factorial design: two theoretically meaningful factors when the hypothesis concerns fit or interaction.

The local default is a two-condition comparison. Measure one primary outcome with 2-3 coherent items. Measure the manipulation check and only the stimulus-quality properties needed to rule out obvious confounds after the outcome. Add one free-response prompt when it will supply Study 2 item-generation material. A successful manipulation check does not prove the outcome hypothesis.

Keep Study 1 short. Do not add familiarity moderators, serial mediators, purchase intention, sharing intention, and several platform-use controls merely because they are available. Add a construct only when it answers the stated RQ or protects interpretation.

### Study 2: extract and test the psychological factors

Study 2 should include factor analysis as a standard stage. Use the following sequence:

1. Collect qualitative descriptions of why participants reacted to the focal advertising expression, using the Study 1 free response and/or depth interviews.
2. Create an initial pool of roughly 25-30 statements, then consolidate it to 15-20 clear, non-duplicative impression items. Add literature-derived items only when theory requires coverage missing from the qualitative data.
3. Review the items for one idea per statement, readable wording, content coverage, and unnecessary positive-negative duplicates. Use a supervisor, peer review, or cognitive interviews when feasible.
4. Administer the 15-20 impression items with the same primary outcome to a sample suitable for factor analysis.
5. Run exploratory factor analysis on the impression items only. Do not include the primary outcome, manipulation check, attention check, or demographic items in this EFA.
6. Name the factors from the shared meaning of their retained items, then check internal consistency.
7. Use factor scores or defensible scale means as predictors of the primary outcome in regression.
8. Add mediation only if theory, measurement, and temporal ordering justify it; regression is the default.

Study 2 may also add a boundary condition, replication, or corrected stimulus, but these should not replace the factor-analysis stage. When established scales are used, verify the expected measurement structure with CFA when feasible. If CFA is outside the available method or sample, conduct and label an exploratory factor-structure check rather than assuming the scale behaves identically in the new context.

Avoid treating same-sample factor discovery and outcome regression as strong independent confirmation. Prefer a split sample or a second sample when feasible. When this is not feasible, report the entire sequence as exploratory and reserve stronger confirmation for Study 3 or future research.

If Study 1 does not show a condition effect, do not claim that Study 2 discovered the mechanism behind an effect. Report Study 2 as an exploratory analysis of impression structure and associations with the outcome.

### Study 3 or additional verification

Add one only if it answers a remaining theoretical question. Suitable roles include:

- testing a mediator suggested but not established in Study 2;
- ruling out an alternative explanation;
- testing generalization across a second product or format;
- demonstrating that an unexpected null was caused by a correctable design issue;
- validating a serial or moderated mechanism with a new sample.

Do not rename opportunistic analyses as a new study. A same-sample follow-up is an additional or exploratory analysis unless it involved a distinct manipulation or data collection.

## 3. Stimulus and pretest checklist

Keep constant where relevant:

- brand familiarity and prior attitude;
- product, price, claim, information amount, and call to action;
- layout, typography, color, image, model, duration, and exposure order;
- voice speaker, pace, loudness, script, recording quality, and background sound;
- account history, follower count, engagement, posting frequency, and profile details.

Pretest only properties that threaten interpretation. Depending on the study, assess:

- manipulation recognition and perceived difference;
- realism and naturalness;
- comprehensibility and information amount;
- valence, arousal, humor, attractiveness, credibility, or familiarity;
- fit between image, copy, music, voice, platform, and product.

Select stimuli using the predeclared criterion; do not choose the version that happens to produce the desired dependent variable.

## 4. Measurement and analysis map

| Design or question | Suitable primary analysis |
|---|---|
| Two independent conditions | t test or equivalent regression |
| Three or more conditions | ANOVA/regression with planned contrasts |
| Two manipulated factors | Factorial ANOVA/regression with interaction |
| Continuous moderator | Regression with interaction; avoid arbitrary median splits when possible |
| Prespecified mediator | Bootstrap indirect-effect model with justified temporal order |
| Newly generated impression items | EFA, followed by reliability and regression using extracted factors |
| Established multi-item scale | CFA when feasible; otherwise a labeled exploratory structure check |
| Repeated responses from one person | Repeated-measures or multilevel model |

Before collection, specify the primary hypothesis, outcome, exclusions, target sample, stopping rule, and analysis. Use power analysis based on the smallest meaningful effect when possible; cohort precedents are descriptive, not a substitute for power planning.

### Factor-analysis procedure

- Ensure that every proposed factor has multiple interpretable items; do not design a one-item factor.
- Plan sample size from both the 15-20 impression items and expected loading strength. As a planning heuristic, aim for at least 5-10 usable responses per item and preferably at least 150 observations, then judge adequacy using KMO, communalities, and loading stability rather than the ratio alone.
- Check factorability with the correlation matrix, KMO, and Bartlett's test when available.
- Use a common-factor extraction method such as maximum likelihood or principal-axis factoring. Do not substitute principal component analysis without explaining that it answers a different question.
- Use an oblique rotation such as promax or oblimin because advertising perceptions are normally correlated.
- Decide the factor count using parallel analysis, scree plot, theory, and interpretability. Do not rely only on the eigenvalue-greater-than-one rule.
- Declare item-retention rules before the final model where possible. Review low loadings, low communalities, and problematic cross-loadings while preserving conceptual coverage.
- Report each item and loading, removed items with reasons, factor correlations, variance information when appropriate, and reliability such as omega or alpha.
- Name factors from their retained items, not from the result the researcher hoped to obtain.
- In the outcome regression, check multicollinearity and report standardized effects, model fit, uncertainty, and the exact hypothesis decision for every factor.

Report group sizes, missing data, exclusions, reliability, descriptive statistics, effect sizes, confidence intervals, and exact p-values where appropriate. Interpret null results as insufficient evidence for the predicted effect, not proof of equality unless the design supports an equivalence test.

## 5. Patterns from prior advertising-creative theses

Useful precedent patterns include:

- regulatory-focus ad content crossed with major/minor music, followed by emotion-mediated verification;
- influencer versus celebrity status crossed with positive/negative reputation information, followed by parasocial mediation;
- conventional official social posts versus character-as-real posts, followed by parasocial relationship analysis;
- ordinary mass advertising versus explicit target language, followed by curiosity-mechanism analysis;
- face direction crossed with challenge/trust copy, followed by processing-fluency testing;
- ordinary versus relatable everyday-life advertising across affective/cognitive products;
- medium-threat, low-threat, and empathy-inducing copy across low/high-involvement products.

Use these as structural precedents, not as templates to copy. The new thesis still needs a distinct theoretical gap, manipulation, and context.

## 6. Review questions

Before approving a design, answer:

1. Can a reader state the causal contrast in one sentence?
2. Does each hypothesis follow from named theory and cited evidence?
3. Could a non-focal stimulus difference explain the predicted effect?
4. Is the primary outcome identifiable before seeing results?
5. Does Study 1 remain a simple test of one focal contrast and one primary outcome?
6. Were the Study 2 impression items generated from qualitative evidence and reduced to roughly 15-20 without collapsing content coverage?
7. Is the primary outcome kept outside the Study 2 EFA?
8. Does Study 2 include a defensible factor-analysis plan and enough multi-item data to execute it?
9. Are factor count, rotation, item removal, naming, and reliability reported transparently?
10. Is the regression following factor discovery labeled exploratory when it uses the same sample?
11. Would the conclusion remain accurate if Study 1 is null?
