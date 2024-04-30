---
layout: page
authors: ["Zhian N. Kamvar"]
teaser: "Transitioning and Adapting to New Challenges"
title: "Updates on The Carpentries Lesson Infrastructure"
Date: "2023-06-28"
time: "09:00:00"
tags: ["Lesson Infrastructure", "Carpentries Workbench", "Dovetail", "Community", "Carpentries Team", "Core Team", "Curriculum"]
---

In this bitter-sweet blog post, I want to start by noting that we quietly passed a milestone last month. On 15 May, we successfully rolled-out our new lesson infrastructure, [The Carpentries Workbench](https://carpentries.github.io/workbench/) to all 43 of our official lessons. The Workbench, which has been [featured regularly on our blog](https://carpentries.org/posts-by-tags/#blog-tag-dovetail) brings major improvements to how our community creates, maintains, teaches, and learns our lessons. 

## Building Success

The Workbench
Prioritises accessible design principles and uses automated testing to validate lesson content for compliance with [WCAG AA+ accessibility best practices](https://www.w3.org/WAI/standards-guidelines/wcag/),
Is built on tools we teach in our workshops and that are commonly used in our community, reducing barriers for new lesson developers, maintainers, and contributors,
[More accurately reflects lesson authorship](https://carpentries.github.io/workbench/transition-guide.html#contributor-count) by clearly separating the tools needed to build the lesson from the content.
Employs a modular design that is intended for future growth to support our community.

Although I coordinated the design, development, testing, and rollout of The Workbench, this was a truly collaborative effort that would not have been possible without participation and feedback from our community, especially our Maintainers, who worked hard to ensure that pull requests across our lessons were addressed before the rollout. 
A huge thanks goes to Vini Salazar, Toby Hodges, and Erin Becker for jumping in and helping Maintainers address over 100 open pull requests across our more popular lesson repositories. 
Special shoutout to the Maintainers of our [Programming with Python lesson](https://swcarpentry.github.io/python-novice-inflammation/), Toan Phung and Indraneel Chakraborty, who resolved 61 pull requests (many of which were inherited before they became Maintainers) ahead of the transition. 
Behind the scenes, the rollout was only possible thanks to a cross-team effort between members of the Curriculum, Community Development, Instructor Training, and Workshop Administration Teams. 
Special thanks goes to Alycia Crall for detailed planning of an effective communications and support plan. 
Thanks further goes to Toby Hodges for helping to coordinate the Maintainer community for this transition.

Creation of The Workbench has been my primary project since joining the Core Team in March 2020. 
I would not have been able to carry out this work without funding to The Carpentries from the Chan Zuckerberg Initiative (CZI), which [provided initial support](https://carpentries.org/blog/2019/11/czi-moore-grant/) for redesigning our lesson infrastructure from December 2019 to May 2022. 
I am excited to have the Workbench in broad use by the community, and see the many ways in which this new infrastructure lowers barriers for learning and lesson development. 

As the sole developer and Core Team member maintaining The Workbench and other R packages, I am keenly aware of the risks of relying on a single person to maintain software that is widely used (known as the [bus factor](https://en.wikipedia.org/wiki/Bus_factor)). 
This is especially so for a suite like The Workbench, which consists of three core packages along with auxiliary tools that provide support for deployment on GitHub Actions. 
Thus, over the next six months I will be focussing my efforts on the sustainability of The Workbench, by training other members of The Core Team (Kelly Barnes, Rob Davey, and Erin Becker) on its design and maintenance, documenting design and workflows in [The Workbench Developer’s Guide](https://carpentries.github.io/workbench-dev/), and creating pathways for individual community member contributions as demand for new features grows. I and the rest of the Core Team encourage the community to continue to submit bug reports and feature requests during the upcoming six-months transition. 
Please be aware that it may take some time for new features to be implemented, depending on context. 
While development may slow for a bit, we will come out stronger in the end for it.

## New Challenges

This effort to shore up capacity within the Core Team is now even more pressing and important considering news that we received last month: my position, initially funded by a CZI grant, faced funding constraints after the grant's conclusion in May 2022. 
Despite the tremendous efforts by our Executive Team to secure additional funding to support a Core Team member dedicated to lesson infrastructure maintenance and development, those efforts were unsuccessful and my position will come to an end on 31 December, 2023. 
On behalf of The Core Team, I want to assure the community, **as we navigate this new landscape, we remain resolute in our commitment to delivering high-quality resources and support.** 
We have a strong and vibrant community already iterating on The Workbench and I have complete confidence that this project will continue to grow and thrive after my departure.

In working on this project, I had the pleasure of being able to collaborate with members from all over our community. 
There are three sub-communities who work closely with the mechanics of The Workbench: Maintainers, Lesson Developers, and the Internationalization Community. 
I am amplifying our message of support to all of these communities and are providing pathways for contribution. 
In our [design principles for the lesson infrastructure](https://carpentries.org/blog/2020/08/lesson-template-design/), the second principle was to provide support for translations. 
While active development on The Workbench may slow for now, there is movement in the wider ecosystem! The modular nature of The Workbench has lead to efforts from community members to prototype translation frameworks such as [Joel Nitta’s {dovetail} package](https://github.com/joelnitta/dovetail). 
Moreover there are exciting developments in the [rOpenSci Community](https://ropensci.org) for [supporting automated translations](https://docs.ropensci.org/babeldown), which has only been made possible by [the {tinkr} package](https://docs.ropensci.org/tinkr), a collaboration between Maëlle Salmon (rOpenSci) and myself, revived in 2020 to support The Workbench.

I consider myself lucky to have had the chance to serve such a wonderful community doing work that I love. 
This is made possible by the people in the community who live and breathe our core values every day and make it such a joy to attend community discussions and exist in this space. 
I am especially grateful for our Executive and Associate Directors, Kari L. Jordan and Erin Becker, for being a solid foundation that led this operation through the uncertain times of the last three years. 
There was never a time when I felt uncomfortable coming to them for coworking, support, or just to catch up and trade music and book recommendations. 
I’ve been in the academic/nonprofit workforce for the past 12 years and I can say that, without a doubt, they are the best leaders I have ever had the pleasure of working with. 
I do not yet know where I will end up next year, but wherever I go, I will always carry our core values with me. 
