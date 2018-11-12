#CMS Assessments

Xavier McLallen

Here you will find three (3) folders named "assessmentx", where "x" is the corresponding part number. See below for notes.

I have not used Reducts, as state was simple enough to manage manually.
I have opted to use CSS for the "read more" button, rather than editing the display with state or similar, as this was simpler. 

------
**Part 1 - Static**
Build the comped component using dummy content.
For text content, use Lorem Ipsum.
For image content, use [placeholder.com](https://placeholder.com/)

###NOTES: Uses Bootstrap for most of layout. Some minor things margins and padding are updated in later versions. the "Read More" button was not implemented here. 

**Part 2 - REST-API**
Build the component again, but instead of using dummy content, build this out using listings data returned from [our test API](https://sv-reqres.now.sh).

Some listings will have broken images, please use the provided fallback image as needed to ensure an image is always rendered.

**Part 3 - Filtering**
Build the component a final time with data from the API. Include listings, events, and offers data as well as a buttons that will enable a user to see all data, only listings data, only events data, or only offers data.

Some listings/evensts/offers will have broken images, please use the provided fallback image as needed to ensure an image is always rendered.

###NOTES:
Similarly to the video provided in the 'comps' folder, this currently treats the "All" filter the same as the "Listings" filter. More minor layout and UI items tweaked here as well. CSS was used where simpler, rather than using react states & callbacks to change display propert.


Submitting Your Assessment For Review
------
When you've completed the assessment, submit your work via a Pull Request to this repo. Your Pull Request should contain three (3) folders that contain your solution; one (1) for each part of the assessment.
