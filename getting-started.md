# Getting Started

## Signup for the CQL editor

If you don't have an account, first you need to signup for the CQL editor. Currently there are two ways to signup for the CQL Editor.

- Using your email address
- Using GitHub

::: tip
:bulb: Navigate to [Signup](http://cql.ruky.me/signup) to signup with your email address or using GitHub.
:::

### Signing up with email address

When Signing up with your email address, you will first have to provide some information. These include,

- Your name
- A working email address
- A password

After entering the above details click `Signup`.

**This will create your user user account and you will be automatically redirected to the [login](http://cql.ruky.me/login) page.**

And you can now login with your email address and password.

::: info
If you signup with an email address, you will not be able to push your CQL to GitHub. But don't worry you can always give access to GitHub later.
:::

### Signing up with GitHub

If you prefer to signup with GitHub which is more convinient (you don't have to remember a password), you can simply click `Login With GitHub` button.

**This will redirect you to the `CQL Pen` GitHub application which give permission to login to CQL Editor using your GitHub account.**

As similar to Signing up with your email address, Signing up with GitHub will automatically obtain your Name, and Email address used in your GitHub account.

In future can easily login to CQL editor using your GitHub account from the login page.

::: tip
We will automatically generate a profile picture for your account using [Gravatar](https://en.gravatar.com/). If you already have a profile picture defined using Gravatar, it will be used instead.
:::

## CQL Editor

The CQL Editor has few key fundemental concepts

- Projects
- Codes and CodeSystems
- The Editor

## Projects

A project is a collection of CQL and the associated documentation. So the first thing you will have to do is create a new project for you and the team after signing up for CQL editor.

There can be one or more collaborators, working a in a sigle project project. A project administrator can add collaborators and give access to a project.

When you first sign up for a project, you will be automatically given access to the demo project which is only creatred for deonstration purposes.

::: tip
Read more about Projects and managing your projects in the :book: [Projects](/projects) page.
:::

## Codes and CodeSystems

CodeSystem and Codes are concepts used in FHIR,

**Codes** in FHIR are standardized values that represent specific concepts in healthcare. They're used to represent diagnoses, medications, procedures, demographics, and other clinical and administrative information.

**CodeSystems** are collections of codes with assigned meanings. They define the set of possible values that can be used in specific contexts.

Before you start using CQL Editor, you will have to upload a `CodeSystem` with a `codes` (`concepts`) to CQL Editor. You can also connect a terminology server like OCL to get to `codes` from there.

**So it is very important that you upload a `CodeSystem` before you start writing CQL on CQL editor**

:::tip
Read more about managing your `CodeSystems` and `Codes` within CQL editor in the :book: [Codes and CodeSystems](/codes-and-codesystems) page.
:::

::: info
Read more about FHIR Codes and CodeSystems here: [Codes and CodeSystems in FHIR](https://claude.ai/share/ad75c90e-312e-4ea2-ad89-fff30dee48bf)
:::

## The Editor
