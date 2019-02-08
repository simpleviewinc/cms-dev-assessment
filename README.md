Simpleview CMS Developer Assessment
======
Welcome to the Simpleview Developer Assessment.

The assessment is in three (3) parts that increase in complexity and scope. You may use any approach you feel comfortable with to complete each section. The assessment period is two (2) days; at the end of the assessment period turn in any and all work including any incomplete work for review.

Although each part builds off the previous, you are expected to turn in three (3) sets of solutions; one for each part.

Requirements
------
In the *comps* folder you will find screenshots and a video of the component you will be responsible for making. The component features a grid of items in a repeatable pattern. Part 3 of the assessment includes a number of buttons in a row at the top as well.

**Brand Fonts**
Google Fonts
* Lato 400
* Lato 900

**Breakpoints**
Large - 1025px and up
Medium - 641px and up
Small - 640px and below

**Max Width**
1200px

Assessments
------
**Part 1 - Static**
Build the comped component using dummy content.

For text content, use Lorem Ipsum.

For image content, use [placeholder.com](https://placeholder.com/)

**Part 2 - REST-API**
Build the component again, but instead of using dummy content, build this out using listings data returned from [our test API](https://sv-reqres.now.sh).

Some listings will have broken images, please use the provided fallback image as needed to ensure an image is always rendered.

**Part 3 - Filtering**
Build the component a final time with data from the API. Include listings, events, and offers data as well as a buttons that will enable a user to see all data, only listings data, only events data, or only offers data.

Some listings/evensts/offers will have broken images, please use the provided fallback image as needed to ensure an image is always rendered.

**Part 4 - Paging & Dynamic Layouts**
See the demo in `/comps/part 4-5/demo.mp4`. You need will need to build this component.

As the user pages through, the layout of the grid and the number of items in the grid changes. The layouts are in a repeatable pattern. When the user gets to the last page, clicking the next button takes the user back to the beginning of the list. Similarly, clicking the prev button when on the first page of the list takes the user to the last page of the list. Your component should have all that same functionality.

You should fill your component with data from the API you used in the previous parts.

You do **NOT** need to include the animation seen in the demo. That is a "nice-to-have" feature, but is not an expected part of the assessment. If you chose to include it, we advise you only do so after completing Part 5. Part 5 is an expected part of the assessment.

**Part 5 - Randomizing**
Continuing with the component you built in Part 4, you will need to randomize the items retrieved from the API.

The API does not offer any randomized sorting options. It does support paging via the `page` and `per_page` properties, however merely getting a page of results and shuffling them is **NOT** sufficient. You randomization function should randomize items across all pages of data available via the API.

Whenever the user refreshes the page, they should see a different set of items on each page of the component.

Submitting Your Assessment For Review
------
When you've completed the assessment, submit your work via a Pull Request to this repo. Your Pull Request should contain three (3) folders that contain your solution; one (1) for each part of the assessment.
