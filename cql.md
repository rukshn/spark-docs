---
title: What is CQL?
---

# Welcome to the world of CQL

Clinical Quality Language (CQL) is a high-level, human-readable programming language specifically designed for the healthcare sector. You can also tell CQL as a domain specific langualge (DSL) for healthcare.

Developed by Health Level Seven (HL7) International CQL provides a standardized way to express clinical quality measures and clinical decision support rules.

## The "Why" Behind CQL: Bridging the Gap in Healthcare

At its core, CQL was created to address a critical challenge in healthcare: the need for a common language to define and share clinical logic.

Before CQL, quality measures and clinical guidelines were often written in ambiguous, human-readable formats that were difficult to implement consistently across different electronic health record (EHR) systems.

This ambiguity led to variations in how quality measures were calculated and how clinical decision support was delivered, ultimately impacting patient care.

**CQL solves this by being both human-readable and machine-executable.** This dual nature allows clinical experts to write and understand the logic, while also enabling computer systems to interpret and execute it precisely.

:::tip
This ensures that a quality measure, such as "percentage of diabetic patients with controlled blood sugar," is calculated the same way regardless of the healthcare organization or the specific EHR system being used.
:::

## Key Components of the CQL Ecosystem

To understand how CQL functions, it's helpful to be familiar with a few key concepts:

- **Libraries:** CQL logic is organized into libraries. A library can contain definitions of populations, variables, functions, and expressions that can be reused across different quality measures or decision support rules.

- **Value Sets:** These are externally defined lists of codes used to identify clinical concepts like diagnoses, medications, or procedures. For example, a value set for "Diabetes" would include all the relevant ICD-10 codes for that condition. CQL uses value sets to retrieve specific data from a patient's record.

- **Data Models:** CQL is designed to work with various health data models, with the most prominent being the Quality Data Model (QDM) and Fast Healthcare Interoperability Resources (FHIR®). These models define the structure of clinical data, allowing CQL to query for specific information like patient demographics, encounters, and lab results.

- **Expression Logical Model (ELM):** When a CQL script is written, it is translated into an XML-based format called the Expression Logical Model (ELM). This is the machine-readable version of the logic that can be executed by a CQL engine.

- **CQL Engine:** This is the software component that processes the ELM, retrieves the necessary patient data from an EHR or other data source, and produces a result. For a quality measure, this result might be whether a patient meets the criteria for the measure's numerator and denominator.

## The Impact of CQL in Modern Healthcare

The adoption of CQL is a significant step towards a more interoperable and data-driven healthcare system. Its primary applications include:

Electronic Clinical Quality Measures (eCQMs): CQL is the standard for defining the logic for eCQMs used in various quality reporting programs, such as those administered by the Centers for Medicare & Medicaid Services (CMS).

Clinical Decision Support (CDS): Healthcare systems can use CQL to create rules that provide real-time alerts and recommendations to clinicians within their workflow. For instance, a CDS rule could alert a physician if they are about to prescribe a medication to which a patient is allergic.

By providing a clear and consistent way to express clinical knowledge, CQL is helping to improve the quality, safety, and efficiency of healthcare delivery.

## How Spark Editor Help in Coding CQL?

Spark Editor is a tool used for CQL coding, it provides powerful features such as syntax highlighting, error checking, built in CQL documentation.

It allows you to quickly write CQL by providing auto-completion by tapping into the data dictonary or a terminology server.

This allows you to rapidly code CQL, and export it as a FHIR library and execute it using a CQL engine. Saving time, and minimizing the errors that you can include when coding CQL.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/Oij2B3O5HjW0Wp6Xb1" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
