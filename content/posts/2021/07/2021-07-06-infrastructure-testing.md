---
layout: page
authors: ["Zhian N. Kamvar"]
teaser: "Ensuring our redesign is friendly and usable for maintainers at all skill levels."
title: "Reflecting on our first Alpha Test of the Lesson Infrastructure Redesign"
date: 2021-07-06
time: "00:00:00"
tags:
- "Lessons"
- "Community"
- "Maintainers"
- "Infrastructure"
- "Lesson Infrastructure"
- "Incubator"
- "Carpentries Lab"
---

## Introduction

> This is an ongoing series of blog posts about the next iteration of the [Lesson Infrastructure]({{ site.url }}/posts-by-tags/#lesson-infrastructure).
> Find more about our [Design Principles][depr] and our [Path to the Design for the Lesson Website][ux-path]

As our community has grown in the past few years, it has become evident that our current lesson infrastructure---where implementing updates involves complex manual steps---does not scale well.
It was also evident that the lesson development toolchain was intimidating enough that it was---in and of itself---a barrier to contribution.
When this infrastructure was created back in 2016, we had only a few lessons that were maintained by a small group of maintainers who were able to install the toolchain and render them locally.
We now have more than 100 official and community-developed lessons combined.
Based on the feedback from our much larger maintainer community, it is clear that many find it challenging to keep the infrastructure up-to-date on their own machines.

<figure>
<img alt='A stacked area chart showing the growth in the number of lessons from 2015 to present day.
There is an arrow pointing to the top of the data that says "139 lessons".
The data are stratified by our four programs: Software Carpentry on bottom, followed by Data Carpentry, Library Carpentry, and Incubator.
The incubator comprises more than one half of all lessons in the current day.'
src='{{ site.baseurl }}/images/blog/2021/07/lesson-growth.png'>
<figcaption class='text-center'>
The growth in the number of lessons has drastically increased between December 2014 and June 2021.
(Note: data excludes lessons from <https://github.com/carpentries> and <https://github.com/carpentrieslab>)
</figcaption>
</figure>

Thus, We proposed [design principles of the next iteration of the lesson template][depr] to guide us in making lesson contribution a better experience for all involved.
Of course, [as we have learned from previous iterations of the lesson template][previous-iteration], we need to create something that works *for the community*.
This is why, when we had a stable (but not necessarily fully-featured) framework, we needed to test it *with the community*.

After investigating several options for our lesson infrastructure, we realized that the [R publishing ecosystem][rmd] aligned best with our values because it has friendly communities, is available as a binary application on all operating systems, and allows us to integrate with all the features we currently offer.
From this idea, we created three R packages to host the engine, validator, and styling, called [{sandpaper}], [{pegboard}], and [{varnish}], respectively.
We have not yet officially released these packages, but you are free to try them out for yourself! You can get started by visiting <https://carpentries.github.io/sandpaper-docs/>.
This post describes our initial efforts to test changes coming to [callout blocks][bq] and the overall lesson infrastructure.

## Alpha Testing

During our alpha testing, participants complete a set of tasks with functional, but not fully-featured products.
The participants in the tests are given a set of pre-defined tasks to accomplish and asked about how they felt about their experiences vs. their expectations.
These tests are designed to identify common stumbling blocks and any unforeseen difficulties that arise when users test the core functionality of a product.
With this approach, we can test that the solutions we come up with are intuitive before spending time adding extra features.

### Challenge Syntax

Our first challenge was to assess alternatives to the [callout block quote syntax][bq], which was difficult to construct if you were creating a challenge/solution pair of nested block quotes:

```markdown
> ## Challenge Example
>
> This is challenge text
>
> > ## Solution example
> >
> > This is the solution
> >
> {: .solution}
{: .challenge}
```

We ended up replacing this with [pandoc section fence syntax (aka fenced-divs)][en-garde]:

```markdown
:::::: challenge

## Challenge Example

This is challenge text

::: solution

## Solution Example

This is the solution

:::
:::::
```

To get to this solution, we recruited Maintainers for anonymous testing and proposed three potential solutions for this syntax using one of three alternatives:

1. HTML `<div>` tags, ([example HTML syntax](https://zkamvar.github.io/glowing-chainsaw/03-div-challenge-blocks.html))
2. custom [code block syntax based on Oxygen (codename: dovetail)][dovetail], ([example dovetail syntax](https://zkamvar.github.io/glowing-chainsaw/04-dovetail-challenge-blocks.html))
3. pandoc [section fences (aka fenced-divs)][en-garde] ([example section fence syntax](https://zkamvar.github.io/glowing-chainsaw/05-fenced-div-challenge-blocks.html))

We selected the [Pandoc section fence syntax][en-garde] because testers reported it was the easiest to use (6/11) and [they made the fewest syntax errors][results][^1] when they were asked to [reproduce a challenge/solution block in that syntax without rendering the result to HTML][challenge].
HTML was the winner in terms of initial clarity (8/11) and near equally easy to use with fenced divs (5/11).
However, there were several issues around mixing HTML and markdown because particpants either forgot to [pad the HTML with whitespace][nows] or because [indented HTML code is interpreted as a code block][indent].

Below are some comments from our testers regarding the pandoc section fence syntax:

> ...the pandoc looked more confusing, but when I read about what it requires it's less specific and so the easiest.

> The fact that pandoc fenced div tags don't have any specific length and don't need to match in length at start and end tags confused me.

> It is easier to parse the pandoc version visually to see the nested structure.

>  For html and pandoc, I like that the text inside the blocks is no different than the usual markdown syntax (I think) and the tag style (open/close) of indicating the blocks makes sense to me.
> It's really a toss up between which is "better" -- html is less typing and I've seen it before, hence the edge, but I'd be happy to use either in a lesson.

> Pandoc fenced divs are super easy to type, copy paste and move around.

> ...easier to see where the divs close in the pandoc fenced syntax. keeps everything in markdown so it's consistent.

Once we identified the appropriate syntax, we could further refine our design for the lesson infrastructure, which brings us to the infrastructure testing.

### Lesson Infrastructure Testing

Our new infrastructure consists of R and pandoc with our three in-house packages to coordinate, validate, and style our lessons.
We wanted to assess three major aspects of lesson development: infrastructure installation, lesson creation, and lesson contribution.

We tested the alpha version of our infrastructure between April and June 2021.
For this testing phase, we wanted to be absolutely certain that our infrastructure was easy to use from the start, so we recruited people from all across our community.
This included Maintainers, Instructors, Core Team members, Incubator Maintainers, and people who were brand new to The Carpentries.
Because our new infrastructure centered around the R publishing ecosystem, we wanted to recruit people with varying expertise in R.

Our goal for testing was to assess three salient aspects:

1. Is the infrastructure [installable](https://github.com/carpentries/sandpaper-docs/issues/33)?
2. Can participants [create a lesson](https://tang0008.github.io/buoyant-barnacle/)?
3. Can participants [contribute to a lesson](https://github.com/carpentries/sandpaper-docs/pull/34)?

Participants were asked to complete these tasks on their own, following the instructions at <https://carpentries.github.io/sandpaper-docs/>.
Afterwards, we conducted 20 minute post-feedback open-ended interviews to assess how comfortable they were with the new infrastructure and how it compared with the previous iterations.
We asked them five questions:

1. Tell me about the first time you used the current Carpentries Lesson Template (our [styles](https://github.com/carpentries/styles) repo).
1. How did you learn to use the styles repository?
1. How easy was it to get started with the new infrastructure compared to what you expected?
1. Were there any points at which you did not understand what a command was doing?
1. Which task did you find most difficult?

#### Result

We recruited a total of 19 volunteers to test the infrastructure.
These volunteers represented people who were brand new to The Carpentries, active community members who have been helping to create a welcoming community for years, and others involved in The Carpentries.
Most importantly, these volunteers represented varying levels of comfort with both R and our current lesson infrastructure.
We found that _every single participant_ was able to install the infrastructure successfuly regardless of familiarity with R[^2] or comfort with our infrastructure.

<figure>
<img alt="Scatter plot showing no correlation between infrastructure installation success and Jekyll comfort level (y axis) or R comfort level (x axis)."
     src="{{ site.baseurl }}/images/blog/2021/07/infra-alpha-results.svg">
<figcaption class='text-center'>
The pre-interview alpha results show that the new infrastructure can be used regardless of R experience.
</figcaption>
</figure>

This is not to say that there were no bumps along the road.
During alpha tests, we fully expect _some_ difficulty due to missing documentation and unfamiliar tools.
These are some of the responses that we got regarding difficulty.

> my R version and RStudio version were older that the minimum required versions

> I couldn’t tell what this was going to do well enough to know which way I wanted to access it.

> Biggest issue: trying to figure out what pandoc version I had.

> If I was more familiar with R syntax, it would have been easier.

> It would be good to have a "nerd's guide" to the infrastructure.

Many of the initial problems arose from unclear instructions, which is exemplified in [this pull request that significantly rearranges the setup instructions][pr-30].
The next most frequent problems came from connecting to GitHub and even from [the Git installation itself][git-problems].
Other issues occured when packages like [stringi](https://cran.r-project.org/package=stringi) were in the process of being updated on CRAN, during which users would be asked if they wanted to build from source.
To alleviate this particular issue, we set up our own [R Universe][r-universe] that contains binaries of our own infrastructure packages along with the latest versions of packages that are frequenly updated: <https://carpentries.r-universe.dev/ui#builds>.
While several participants expressed initial discomfort with the pandoc fenced section syntax, they were quickly able to recover from any formatting issues thanks to messages from our validator (which highlights [point number 8 from our design principles](https://carpentries.org/blog/2020/08/lesson-template-design/#human-centered-lesson-template)).

I will reiterate here: despite these issues, every participant was able to install the infrastructure correctly.
Once they did this, they were able to quickly create and preview a lesson.
Overall, the feedback from the participants about their experience was largely positive.

> Once I correctly set up my R and RStudio, the rest was self-explanatory.

> It was pretty easy. I was doing this at the end of a long day and my brain was only half on. It seemed to just work.

> I was surprised that there was less [documentation] text to look through. With the original template, there was a lot of files and a lot of text.

> Reducing everything down to one program was really nice.

> It was WAY easier than the previous experience with the lesson template.

> I was expecting it to be easy and it was as easy as my expectations.

> ...the effort to build a more sustainable Carpentries environment for all the potential lessons being developed is great and it will be much help for the maintainers.

## What We Have Learned So Far


### Keeping Current

Our current infrastructure has historically been difficult to deal with, but it is important to remember, it *was working for us* at one point in time.
As one participant pointed out, while they are currently unable and unwilling to use the infrastructure on their personal machine, they were able to successfully install and use it in the past.
After Jekyll updated, their installation became unusable and they were unable to get back to a usable state.
These early tests can tell us a lot about how people interact with the template in a controlled environment, but one thing that became clear is that **updates will happen**.
Here is the thing about updates, though: they can be utterly terrifying[^3].
The infrastructure we built stays up-to-date via GitHub Actions, but we need to ensure that our community will feel comfortable updating the packages on their local machines.

### Know Thy Audience

As I went through the alpha test, I modified the documentation from user feedback, but I quickly realized that the same documentation would not work for everyone.
On two ends of the spectrum, there were people who only wanted the quickstart to those who needed documentation for how the machinery was working internally.
One way to achieve this is to write the quickstart documentation and then invite people to read more in-depth technical documentation if they were curious.
This way, people who only want to get the task done can skip that information.

### Next Steps

In the coming weeks, we will be preparing the infrastructure for a beta release where we will test it on select live lessons to assess how well it can be approached by the community.
In the meantime, we will be updating documentation, fixing bugs, and enhancing the deployment pipelines.


## Thank You

A big thank you goes out to all of our community members who gave their time to test the new infrastructure and gave valuable feedback.

 - Angelique Trusler
 - Christina Koch
 - David Pérez-Suárez
 - Drake Asberry
 - Eric Jankowski
 - Erin Becker
 - Ezra Herman
 - Fan Du
 - François Michonneau
 - Jon Haitz Legarreta Gorroño
 - Liane Newton
 - Karen Word
 - Kari Jordan
 - Maneesha Sane
 - Michael Culshaw-Maurer
 - Sarah Brown
 - Sarah Stevens
 - Shaun C. Gaynor
 - Toby Hodges


[depr]: https://carpentries.org/blog/2020/08/lesson-template-design/
[ux-path]: https://carpentries.org/blog/2021/05/lesson-template-design-process/
[previous-iteration]: https://software-carpentry.org/blog/2015/07/pushing-back.html
[rmd]: https://bookdown.org/yihui/rmarkdown/
[{sandpaper}]: https://carpentries.github.io/sandpaper
[{pegboard}]: https://carpentries.github.io/pegboard
[{varnish}]: https://github.com/carpentries/varnish
[bq]: https://carpentries.github.io/lesson-example/04-formatting/index.html#special-blockquotes
[dovetail]: https://github.com/carpentries/dovetail#example
[en-garde]: https://pandoc.org/MANUAL.html#extension-fenced_divs
[challenge]: https://zkamvar.github.io/glowing-chainsaw/07-complex-nested.html
[results]: https://zkamvar.github.io/glowing-chainsaw/08-survey-results.html
[nows]: https://github.com/zkamvar/glowing-chainsaw/commit/c45c1022376e2d756b9b921cd1a60160c9a27cdd#r43706766
[indent]: https://github.com/zkamvar/glowing-chainsaw/commit/43c8eaa5e5db0f4b99393d02598485fc8b837325#r43115050
[pr-30]: https://github.com/carpentries/sandpaper-docs/pull/30
[commits]: https://github.com/carpentries/sandpaper-docs/graphs/contributors?from=2021-04-18&to=2021-06-06&type=c
[git-problems]: https://github.com/carpentries/sandpaper-docs/issues/33
[r-universe]: https://ropensci.org/r-universe/
[^1]: The only syntax error occurred when [one participant typed an upper-case `Challenge` instead of a lower-case `challenge`](https://github.com/zkamvar/glowing-chainsaw/commit/d659cc501a655a08b7625e9258ef0dcce60416ac#r43122398).
[^2]: One participant out of the 19 chose not to continue beyond this point.
[^3]: Kami Vaniea and Yasmeen Rashidi. 2016. Tales of Software Updates: The process of updating software. In Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems (CHI '16). Association for Computing Machinery, New York, NY, USA, 3215–3226. DOI:[https://doi.org/10.1145/2858036.2858303](https://doi.org/10.1145/2858036.2858303)
