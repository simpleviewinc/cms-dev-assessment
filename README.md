Simpleview CMS Developer Assessment
======
Welcome to the Simpleview Developer Assessment.

The assessment is in four (4) parts that increase in complexity and scope. The assessment period is two (2) days; at the end of the assessment period turn in any and all work including any incomplete work for review.

Although each part builds off the previous, you are expected (unless otherwise directed) to turn in four (4) sets of solutions; one for each part.

Requirements
------
### Technical
This assessment must be completed using HTML, CSS, JavaScript (vanilla JS or jQuery). If you need templates, we recommend using [ES6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or a [templating engine like Goatee](https://github.com/simpleviewinc/goatee).

### Design
In the `/comps/` folder you will find different screenshots and demo videos for the components you will be responsible for building. Each feature a grid of items in a repeatable pattern. You will be working with an API for 4 parts and it some parts you will need to manipulate the data in some way.

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
**Part 1 - REST-API**
Build the comped component found in `/comps/part 1-2/`.

For content, use listings data returned from [our test API](https://sv-reqres.now.sh).

Some listings will have broken images, please use the provided fallback image as needed to ensure an image is always rendered.

**Part 2 - Filtering**
Build the component a final time with data from the API. Include listings, events, and offers data as well as a buttons that will enable a user to see all data, only listings data, only events data, or only offers data.

Some listings/evensts/offers will have broken images, please use the provided fallback image as needed to ensure an image is always rendered.

**Part 3 - Paging & Dynamic Layouts**
See the demo in `/comps/part 3-4/demo.mp4`. You need will need to build this component.

As the user pages through, the layout of the grid and the number of items in the grid changes. The layouts are in a repeatable pattern. When the user gets to the last page, clicking the next button takes the user back to the beginning of the list. Similarly, clicking the prev button when on the first page of the list takes the user to the last page of the list. Your component should have all that same functionality.

You should fill your component with listings data from the API you used in the previous parts.

You do **NOT** need to include the animation seen in the demo. That is a "nice-to-have" feature, but is not an expected part of the assessment. If you chose to include it, we advise you only do so after completing Part 4. Part 4 is an expected part of the assessment.

**Part 4 - Randomizing**
Continuing with the component you built in Part 3, you will need to randomize the items retrieved from the API.

The API does not offer any randomized sorting options. It does support paging via the `page` and `per_page` properties, however merely getting a page of results and shuffling them is **NOT** sufficient. You randomization function should randomize items across all pages of data available via the API.

Whenever the user refreshes the page, they should see a different set of items on each page of the component.

Submitting Your Assessment For Review
------
When you've completed the assessment, submit your work via a Pull Request to this repo. Your Pull Request should contain four (4) folders that contain your solution; one (1) for each part of the assessment.
