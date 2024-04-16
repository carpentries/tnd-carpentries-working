---
title: Modules
---

## Image

{{% code/wrap %}}
```markdown
![Alternate Text](/images/cc-za.png "Image Description")
```
{{% /code/wrap %}}

![Alternate Text](/images/cc-za.png "Image Description")

## Copy with a button

{{% code/wrap %}}
```markdown
The Carpentries Sponsorship Program aims to help The Carpentries partner with like-minded organisations who want to contribute financially to help The Carpentries achieve our mission and vision.

[Apply to become a sponsor](/apply)
{.button}
```
{{% /code/wrap %}}

The Carpentries Sponsorship Program aims to help The Carpentries partner with like-minded organisations who want to contribute financially to help The Carpentries achieve our mission and vision.

With support from sponsors, The Carpentries will continue our efforts to make coding and data skills equitable globally and expand our operations to better meet the needs of our community now and in the future.

[Apply to become a sponsor](/apply)
{.button}

## Tables

### Default Table

{{% code/wrap %}}
```markdown
| Fruit    | Color  | Taste     | Price (per pound) |
|----------|--------|-----------|-------------------|
| Apple    | Red    | Sweet     | $1.50             |
| Banana   | Yellow | Sweet     | $0.75             |
| Orange   | Orange | Tangy     | $1.00             |
| Grape    | Purple | Juicy     | $2.00             |
| Pineapple| Yellow | Sweet     | $2.50             |
```
{{% /code/wrap %}}

| Fruit    | Color  | Taste     | Price (per pound) |
|----------|--------|-----------|-------------------|
| Apple    | Red    | Sweet     | $1.50             |
| Banana   | Yellow | Sweet     | $0.75             |
| Orange   | Orange | Tangy     | $1.00             |
| Grape    | Purple | Juicy     | $2.00             |
| Pineapple| Yellow | Sweet     | $2.50             |

### Striped Table

{{% code/wrap %}}
```markdown
{{</* table */>}}
| Fruit    | Color  | Taste     | Price (per pound) |
|----------|--------|-----------|-------------------|
| Apple    | Red    | Sweet     | $1.50             |
| Banana   | Yellow | Sweet     | $0.75             |
| Orange   | Orange | Tangy     | $1.00             |
| Grape    | Purple | Juicy     | $2.00             |
| Pineapple| Yellow | Sweet     | $2.50             |
{{</* /table */>}}
```
{{% /code/wrap %}}

{{< table >}}
| Fruit    | Color  | Taste     | Price (per pound) |
|----------|--------|-----------|-------------------|
| Apple    | Red    | Sweet     | $1.50             |
| Banana   | Yellow | Sweet     | $0.75             |
| Orange   | Orange | Tangy     | $1.00             |
| Grape    | Purple | Juicy     | $2.00             |
| Pineapple| Yellow | Sweet     | $2.50             |
{{< /table >}}

### Table with features

{{% code/wrap %}}
```markdown
{{</* table features */>}}
|    | **Empowerment** <br> $150,000 <br>Limit: 2                    | **Champion** <br> $50,000 <br> Limit: 4 | **Supporter** <br> $25,000 | **Contributer** <br> $10,000 | **Advocate** <br> $5,000 |
|----------------------------------------------------|--------------|--------------|--------------|--------------|--------------|
| Digital supporter badge                            | Has Feature  | Has Feature  | Has Feature  | Has Feature  | Has Feature  |
| Philanthropy recognition                           | Has Feature  | Has Feature  | Has Feature  | Has Feature  | Has Feature  |
| Mention in newsletter                              | Has Feature  | Has Feature  | Has Feature  | Has Feature  |              |
| Logo on career page                                | Has Feature  | Has Feature  | Has Feature  |              |              |
| Social media visibility                            | Has Feature  | Has Feature  |              |              |              |
| CarpentryCon registration, sponsor table, and recognition | Has Feature  | Has Feature  |              |              |              |
| Logo on blog                                       | Has Feature  | Has Feature  |              |              |              |
| Original blog post                                 | Has Feature  |              |              |              |              |
| Themed community discussion                        | Has Feature  |              |              |              |              |
| Carpentry workshop                                 | Has Feature  |              |              |              |              |
| Digital supporter badge                            | Has Feature  |              |              |              |              |
{{</* /table */>}}
```
{{% /code/wrap %}}
{{< table features >}}
|    | **Empowerment** <br> $150,000 <br>Limit: 2                    | **Champion** <br> $50,000 <br> Limit: 4 | **Supporter** <br> $25,000 | **Contributer** <br> $10,000 | **Advocate** <br> $5,000 |
|----------------------------------------------------|--------------|--------------|--------------|--------------|--------------|
| Digital supporter badge                            | Has Feature  | Has Feature  | Has Feature  | Has Feature  | Has Feature  |
| Philanthropy recognition                           | Has Feature  | Has Feature  | Has Feature  | Has Feature  | Has Feature  |
| Mention in newsletter                              | Has Feature  | Has Feature  | Has Feature  | Has Feature  |              |
| Logo on career page                                | Has Feature  | Has Feature  | Has Feature  |              |              |
| Social media visibility                            | Has Feature  | Has Feature  |              |              |              |
| CarpentryCon registration, sponsor table, and recognition | Has Feature  | Has Feature  |              |              |              |
| Logo on blog                                       | Has Feature  | Has Feature  |              |              |              |
| Original blog post                                 | Has Feature  |              |              |              |              |
| Themed community discussion                        | Has Feature  |              |              |              |              |
| Carpentry workshop                                 | Has Feature  |              |              |              |              |
| Digital supporter badge                            | Has Feature  |              |              |              |              |
{{< /table >}}

## Copy with badges


{{% code/wrap %}}
```markdown
- Empowerment
- Champion
- Supporter
- Contributer
- Advocate
{.badges}
```
{{% /code/wrap %}}

#### Digital supporter badge

- Empowerment
- Champion
- Supporter
- Contributer
- Advocate
{.badges}

The Carpentries provides a digital icon that can be displayed on sponsor’s website and social media accounts as a way to show support for The Carpentries community.

#### Copies with badges

- Empowerment
- Champion
{.badges}

## Text and Icons

{{% code/wrap %}}
```markdown
{{</* section title="Act Openly" image="/images/act_openly.png" */>}}
We believe that transparency, honesty, and fairness are keys to fostering trust within an open community.
{{</* /section */>}}
```
{{% /code/wrap %}}

{{< section title="Act Openly" image="/images/act_openly.png" >}}
We believe that transparency, honesty, and fairness are keys to fostering trust within an open community.
{{< /section>}}

{{< section title="Empower One Another" image="/images/empower_one_another.png" >}}
We help people build knowledge by creating a conducive environment for the exchange of skills, perspectives and experiences that empower people and enable them to reach their potential.
{{< /section>}}

## Cards

{{% code/wrap %}}
```markdown
{{</* grid cols=2 gap=4 */>}}
  {{</* card title="Curriculum - Lessons" */>}}
    A 16-hour, hands-on training that covers the basics of educational psychology and evidence-based teaching practices.

    [Go to Lessons](/instructor-training)
    {.button}
  {{</* /card */>}}
  {{</* card title="Instructor Training" */>}}
    A 16-hour, hands-on training that covers the basics of educational psychology and evidence-based teaching practices.

    [Go to Instructor Training](/instructor-training)
    {.button}
  {{</* /card */>}}
  [...]
{{</* /grid */>}}
```
{{% /code/wrap %}}

{{< grid cols=2 gap=4 >}}
  {{< card title="Curriculum - Lessons" >}}
    A 16-hour, hands-on training that covers the basics of educational psychology and evidence-based teaching practices.

    [Go to Lessons](/instructor-training)
    {.button}
  {{< /card >}}
  {{< card title="Instructor Training" >}}
    A 16-hour, hands-on training that covers the basics of educational psychology and evidence-based teaching practices.

    [Go to Instructor Training](/instructor-training)
    {.button}
  {{< /card >}}
  {{< card title="Trainer Training" >}}
    A 10-week program, where Trainers learn to teach Instructor Training, while continuing to develop their own teaching skill.

    [Go to Trainer Training](/instructor-training)
    {.button}
  {{< /card >}}
    {{< card title="Workshops" >}}
    Inclusive and hands-on workshops, empowering students to learn new skills and build confidence in using them in their work.

    [Go to Workshops](/instructor-training)
    {.button}
  {{< /card >}}
{{< /grid >}}

## Blobs

{{% code/wrap %}}
```markdown
{{</* grid cols=4 gap=4 */>}}
  {{</* stat */>}}
    More than **3,000** volunteers
  {{</* /stat */>}}
  {{</* stat */>}}
    About **8,000** learners
  {{</* /stat */>}}
  [...]
{{</* /grid */>}}
```
{{% /code/wrap %}}

{{< grid cols=4 gap=4 >}}
  {{< stat >}}
    More than **3,000** volunteers
  {{< /stat >}}
  {{< stat >}}
    About **8,000** learners
  {{< /stat >}}
  {{< stat >}}
    More than **150** countries
  {{< /stat >}}
  {{< stat >}}
   And a **4th** stat
  {{< /stat >}}
{{< /grid >}}

## Accordions

{{% code/wrap %}}
```markdown
{{</* accordion title="What happens if I need to cancel or postpone a planned workshop?" */>}}
If you need to cancel your workshop, please be sure to inform your [Regional Coordinator](https://carpentries.org/regionalcoordinators/). They will ensure that the workshop is removed from our website and complete any other administrative tasks associated with the workshop.

If you need to postpone your workshop please contact your [Regional Coordinator](https://carpentries.org/regionalcoordinators/). They will work with you to select the dates for the rescheduled workshop.
{{</* /accordion */>}}
```
{{% /code/wrap %}}

{{< accordion title="What happens if I need to cancel or postpone a planned workshop?" >}}
If you need to cancel your workshop, please be sure to inform your [Regional Coordinator](https://carpentries.org/regionalcoordinators/). They will ensure that the workshop is removed from our website and complete any other administrative tasks associated with the workshop.

If you need to postpone your workshop please contact your [Regional Coordinator](https://carpentries.org/regionalcoordinators/). They will work with you to select the dates for the rescheduled workshop.
{{< /accordion >}}

{{< accordion title="Do I need to renwew my membershop each year" >}}
Yes, **membership renewal is typically an annual requirement** for most organizations. It ensures continued access to benefits and services offered by the membership. It's essential to check the specific policies of the organization you're a member of to determine the renewal *frequency* and any associated deadlines. **Renewing your membership** on time not only maintains your access but also helps in sustaining the operations and initiatives supported by the organization.

Some *memberships* may offer **auto-renewal options** to streamline the process, while others may require manual renewal. It's advisable to keep track of renewal dates and set reminders to avoid any lapse in membership. Additionally, staying informed about any updates or changes in membership policies through **official communication channels** provided by the organization is crucial to ensure uninterrupted membership benefits.

If you're unsure about the renewal process or have any questions regarding your membership status, don't hesitate to reach out to the **membership department** or designated contact within the organization. They can provide guidance on renewal procedures, clarify any queries, and assist you in ensuring your membership remains active and up to date.

{{< /accordion >}}

{{< accordion >}}
This accordion has no title set
{{< /accordion >}}