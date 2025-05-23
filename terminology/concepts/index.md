---
title: Introduction to Data Dictionary
---

# Terminology

Clinical concepts, the data dictionary and other content used to code CQL can be stored in the CQL Editor.

This allows the CQL editor to autocomplete with the codes stored within it when writing. These codes are referred to as `concepts` or `codes` in the CQL editor. This aligns with the terminology concept in FHIR, and the Data Dictonary in the DAK.

**This is CQL editor autocomplete in action:**

<iframe title="vimeo-player" src="https://player.vimeo.com/video/1081104117?h=9155afde6f" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

The benefits of auto-completion include:

- Minimize errors when writing CQL
- See the definition of these concepts
- Converting the CQL to a human-readable format later (Parsing)

## Concepts

Concepts can be clinical or non-clinical content, but the purpose of these concepts or terminology is to **standardize** the CQL code. This helps **eliminate** **ambiguity** when different authors are writing CQL, especially when multiple CQL files are involved in a single project.

These concepts are stored in FHIR format, in a resource known as a `CodeSystem`. Within the `CodeSystem`, they are stored as **concepts**.

Your collection of `concepts` in one or more `CodeSystems` is known as the Data Dictionary.

::: info
If you are not familiar with FHIR `CodeSystem`, read about `CodeSystems` in the FHIR documentation.
:::
