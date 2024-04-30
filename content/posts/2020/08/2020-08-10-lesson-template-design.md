---
layout: page
authors: ["François Michonneau", "Zhian N. Kamvar", "Erin Becker"]
teaser: "Twelve Design principles to guide the development of the next lesson template"
title: "Design principles for the next iteration of The Carpentries lesson template"
date: 2020-08-10
time: "09:00:00"
tags: ["Lessons", "Infrastructure", "Lesson Infrastructure", "Incubator", "Carpentries Lab"]
---

This blog post introduces twelve design principles that will guide the development of the next version of The Carpentries lesson template. First, we provide some background and definitions. If you are more interested in the principles themselves, you can skip forward to the [Design Principles section](#design-principles-for-the-next-iteration-of-the-carpentries-lesson-template).

## Background

In The Carpentries' history (including Data Carpentry, Library Carpentry, and Software Carpentry), we have learned a lot about lesson templates. We have had two main versions of the template that relied on [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages). As the community grows, we are adding more lessons through [our community-developed lessons]({{ site.url }}/community-lessons/) ([The Carpentries Incubator](https://github.com/carpentries-incubator) and [The Carpentries Lab](https://github.com/carpentrieslab)) every week; and we are starting to see the limitations of our current workflow. Given changes in the tools and infrastructure, we are envisioning the next iteration of the lesson template.

The next iteration of the lesson template needs to be accessible, inclusive, and intuitive. We want this to be true for all its users, within and beyond The Carpentries.

### Anatomy of a lesson workflow

![Drawing of the components that lead to rendered lesson. A rendered lesson is the output by a rendering tool of a lesson template and the lesson content]({{ site.urlimg }}/blog/2020/08/2020-08-10-lesson-components.svg)

Our lesson template workflow consists of four main parts: the rendered lesson, lesson content, styling elements, and rendering tool. All of these components are open source and accept contributions from all members of our community. Since we will be using these terms thoroughout the blog post, we should define them here (arranged in order of visiblity to a learner):  

* **Rendered lesson** is the output (typically a website) that learners and instructors use.
* **Lesson content** is the actual content of the lesson. It is a series of episode files (typically written in Markdown or RMarkdown) and a few other files (images, datasets) that together compose what the instructor uses to teach and the learners to learn.
* **Styling elements** is a group of files that control the styling of the final output. It is formed by a combination of CSS, JavaScript, and HTML templates.
* **Rendering tool** is the software that combines the lesson content and the styling elements to generate the rendered lesson. There are two main categories of tools to do this. Some rely on having a server-side system that generates the pages on demand for the users of the website. Other tools are static site generators, the rendering tool generates all the pages in advance. In The Carpentries, we have been relying on [Jekyll](https://jekyllrb.com/) (a static site generator) because it is what GitHub Pages uses, and not having a server to manage to render our lessons is easier. With a static site generator, it is also easier to work with the lessons without an Internet connection.

### Who uses the template?

There are six types of users for the lesson template (arranged by level of interaction with the template):

- **Learners** use the rendered lesson to gain knowledge about the subject material.
- **Instructors** teach the lessons. They need the rendered lesson to provide clear content they can use to guide their instruction. They are also required to [contribute a small improvement to lesson content](https://carpentries.github.io/instructor-training/checkout/#part-1-submit-a-small-contribution-to-one-of-our-lessons) as part of the [instructor training checkout process](https://carpentries.github.io/instructor-training/checkout/).
- **Lesson contributors** --- In The Carpentries, we use an open-source model of lesson development. Lesson contributors detect something that can improved in the rendered lesson, and need to find what to change in the lesson content to make this improvement.
- **Lesson maintainers** are responsible for triaging contributions to the lesson content. They need to ensure that the contributions they merge are valid (i.e., they follow the syntax expected by the template and the rendering tool). They also need to be able to preview the rendered lesson before the proposed changes are merged upstream.
- **Lesson creators** are the original authors of the lesson. Similarly to lesson maintainers, they want to focus on the lesson content rather than the tooling that will generate the rendered lesson.
- **Template contributors** want to address bugs and improve the styling elements of the template. They should quickly find the files they need to edit to suggest their changes, and easily generate a rendered lesson to test the impact of their suggested changes.

The tooling, template, and syntax should support the needs of all of these users.

### Pain points with the current template

Our lesson template was initially designed in an era when the simplest way to deploy a markdown-based website was through GitHub Pages, which uses --- and continues to use --- the Jekyll static site generator. This model has supported over 20 official lessons, as well as many lessons that are not part of our official offerings. It has even been [adapted for non-Carpentries materials](https://sgibson91.github.io/cross-stitch-carpentry/). However, the template has shown itself to be a bit of a [Norman door](https://uxdesign.cc/intro-to-ux-the-norman-door-61f8120b6086) in the following ways:

1. Previewing the site locally requires people to have or install Git, Make, Python, Ruby, and Bundler. If they want to develop lessons for R, then they need R installed as well. Installing these elements takes a lot of time and debugging effort that would otherwise be spent on the lesson content.
2. File organisation was not intuitive, especially when using rendered lessons via RMarkdown.
3. By bundling the styling elements (boilerplate HTML, JavaScript, and CSS) in the repository, lessons rapidly become outdated and difficult to update as it requires advanced Git knowledge to resolve any conflicting changes.
4. While Jekyll can generate sites that work offline, creating a template that support both online and offline output is tedious and error-prone.

All of these issues are accessibility and inclusion issues. Our volunteers' time is precious and lesson authors, contributors, and maintainers should only need to focus on the lesson content instead of debugging a parsing error due to incompatibilities across versions of Jekyll. The styling elements and the rendering tools need to "just work" for our community and we have identified twelve principles that will help us achieve this goal.

## Design Principles for the next iteration of The Carpentries lesson template

### Accessible and Inclusive rendered lesson

1. **Use best practices to ensure accessibility of the rendered lesson**

    In the USA, [1 in 4 adults](https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html) has a disability. By using best practices for accessibility and compatibility with assistive technologies, the content of the rendered lesson should be accessible to most people.

1. **Provide support for translations, multi-language content, and non-Latin characters**

   English dominates documentation and tutorials. This prevents many people across the globe from having access to technical skills. By providing support for translation and multi-language content, we want to equip lesson creators with the tools they need to write lessons in the language of their choice.

1. **The rendered lesson can be used offline and exported in multiple formats**

   Internet access is still limited in most places. Providing a portable way to distribute the rendered lessons ensures that people with no or slow internet access can still have access to knowledge.

### Human-centered lesson template

{:start="4"}
6. **Lesson contributors should not have to worry about infrastructure**

    Occasional contributors to lessons should not have to worry about the tools that are being used to render the lesson. These contributors should focus on improving the content of the lesson and they should be able to quickly and painlessly have access to the rendered lesson that includes their changes.

1. **Files should be organised in an intuitive way**

   The files that compose the lesson should be organised in the repository in a way that is clear and intuitive. From a glance at the repository, a contributor should identify what each file is doing and how modifying them will impact the rendered lesson.

4. **The styling elements should not live in the lesson repository**

   The lesson repository should only contain information that is relevant for the lesson. The files that are needed to render the lesson website should not live within this repository.

8. **Upgrades to the styling elements should be seamless**

   Having a clear separation of the lesson content and the styling elements makes it easy to bring continuous improvements to the template. If new features are being added or others are removed, there should be clear mechanisms and pathways to add or remove these features.

1. **Issues with formatting of lesson content should be detected early and error messages should be informative**

   The lesson content should be parsed and any formatting issue should be reported before the rendered lesson gets built. Reporting on these issues should be clear, and solutions to solve them should be presented.

3. **YAML header is for metadata**

   When writing Markdown files, a YAML header is useful to place structured information that is programmatically accessible for re-use within or across lesson episodes. However, the YAML header should only be used for metadata that are intended to be used by computers. If the primary target of the information is for humans, it should live somewhere else than the YAML header. More generally, people should not have to enter YAML by hand.

5. **Dependencies are clear and easy to install for everyone**

   Whether you are a learner or a contributor to the lesson, the software you need to install to follow along or render the lesson locally should be clearly identified.


### Rendered lesson should make it easy to teach

{:start="11"}
11. **Instructor notes should be easy to access**

    Providing instructor notes for lessons is useful to help instructors explain the order in which concepts are being taught, ideas to emphasise when teaching, or common misconceptions that learners may face. Having these notes displayed in the context of the lesson (e.g., as asides) would guide instructors when preparing or teaching the lessons.

1. **Components of the lessons can be exported for re-use and alternative uses**

   Instructors often need to extract components of the lesson to present them to the learners in different contexts. It should be easy to extract the figures, the exercises, the outline, the callouts, or the code chunks and automatically create slideshows and other outputs.


## Get Involved

These design principles have emerged from numerous conversations with past and current [lesson maintainers]({% link pages/maintainers.html %}), the [Lesson Infrastructure Committee]({% link pages/lesson-infra.md %}), [conversations](https://github.com/carpentries/conversations/issues) with community members, and contributors to our [current lesson template](https://github.com/carpentries/styles).

These design principles might evolve as we continue to work on this project. We will soon do a more formal call, but if you are interested in shaping this next iteration of The Carpentries lesson template, do not hesitate to send us an email at [team@carpentries.org](mailto:team@carpentries.org).
