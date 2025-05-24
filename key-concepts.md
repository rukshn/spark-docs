---
title: Key Concepts in Spark Editor
---

# Key Concepts in Spark Editor

Before getting started it's very improtant to learn about the few basic concepts that the Spark editor is built on. This will help you to easily use the Spark editor,

:::tip
If you are new to SMART Guidelines, reading about SMART guideliens will also help you to understand more about CQL and digital clinical guidelines
:::

## The Spark sditor

The CQL Editor has few key **fundamental** concepts

- Projects
- Codes and CodeSystems
- The Editor

## Projects

A project is a collection of CQL and the associated documentation. So the first thing you will have to do is create a new project for you and the team after **signing up** for CQL editor.

There can be one or more collaborators, working a in a **single project**. A project administrator can add collaborators and give access to a project.

When you first **sign up** for a project, you will be automatically given access to the demo project which is only **created** for **demonstration** purposes.

::: tip
Read more about Projects and managing your projects in the :book: Projects page.
:::

## Codes and CodeSystems

CodeSystem and Codes are concepts used in FHIR,

- **Codes** in FHIR are standardized values that represent specific concepts in healthcare. They're used to represent diagnoses, medications, procedures, demographics, and other clinical and administrative information.

- **CodeSystems** are collections of codes with assigned meanings. They define the set of possible values that can be used in specific contexts.

Before you start using CQL Editor, you will have to upload a `CodeSystem` with a `codes` (`concepts`) to CQL Editor. You can also connect a terminology server like OCL to get to `codes` from there.

**So it is very important that you upload a `CodeSystem` before you start writing CQL on CQL editor to use the auto-complete feature.**

You can still use the CQL editor without uploading a CodeSystem a terminology server, the editor will still provide you with syntax highlighting and error checking, but you will not get the nice autocomplete and parsing.

:::tip
Read more about managing your `CodeSystems` and `Codes` within CQL editor in the :book: Codes and CodeSystems page.
:::

::: info
Read more about FHIR Codes and CodeSystems here: Codes and CodeSystems in FHIR
:::

## The Editor

After you created the project, you can start writing CQL on the editor. The editor is a powerful tool that allows you to write, collaborate and check for errors in your CQL.

The editor has the CQL documentation built in, where you can see the documentation popping up when you hover important keywords.

Also if you have uploaded or connected a CodeSystem, you will see the definitions of the `Codes` popping up when you **hover** over the codes, you can also parse the CQL to human readable format and has many more features.

::: tip
Read more about the editor in the :book: Editor page.
:::
